import { ApolloError, UserInputError } from "apollo-server";
import { isDefined } from "common/data";
import { encode, decode } from "../helpers/base64";
import { ERROR_NOT_FOUND_CODE } from "../constants";

const getProductsInBatch = (storage, filter, cursor, limit) => {
  const { sequelize } = storage;
  const { categoryId, categoryKey } = filter;
  const query = `
    SELECT
    p.*,
    GROUP_CONCAT(DISTINCT c.id) AS colorIds,
    GROUP_CONCAT(DISTINCT i.id) AS imageIds
    FROM product p
    JOIN product_color pc ON p.id = pc.product_id
    JOIN color c ON c.id = pc.color_id
    JOIN size s ON p.id = s.product_id
      AND s.color_id = c.id
    JOIN image i ON (
      p.id = i.product_id
      OR i.product_id IS NULL
    )
    AND c.id = i.color_id
    ${categoryKey ? "JOIN category cat ON p.category_id = cat.id" : ""}
    WHERE
      ${categoryKey ? "cat.key = :categoryKey" : "p.category_id = :categoryId"}
      ${cursor ? "AND p.id > :cursor" : ""}
    GROUP BY
      p.id
    ORDER BY
      p.id    
    LIMIT 
      :limit
  `;
  let replacements = {
    limit: limit + 1,
    cursor: cursor ? decode(cursor) : undefined,
  };
  replacements = categoryKey ? { ...replacements, categoryKey } : { ...replacements, categoryId };
  return sequelize.query(query, {
    type: sequelize.QueryTypes.SELECT,
    replacements,
  });
};

const getTotalCount = async (storage, filter) => {
  const {
    models: { Category, Product },
  } = storage;
  const { categoryId, categoryKey } = filter;
  const idOrKey = categoryId || categoryKey;
  const category = await Category.findByIdOrKey(idOrKey);
  if (!isDefined(category)) {
    throw new UserInputError("Category not found");
  }
  return Product.count({ where: { categoryId: category.id } });
};

export default async (storage, filter, cursor, limit = 10) => {
  const productsQuery = getProductsInBatch(storage, filter, cursor, limit);
  const totalCountQuery = getTotalCount(storage, filter);
  const [products, totalCount] = await Promise.all([productsQuery, totalCountQuery]);
  const hasNextPage = products.length > limit;
  const edges = hasNextPage ? products.slice(0, -1) : products;
  if (products.length === 0) {
    throw new ApolloError("Not found", ERROR_NOT_FOUND_CODE);
  }
  const last = edges[edges.length - 1].id.toString();
  const endCursor = encode(last);
  return {
    edges,
    pageInfo: {
      hasNextPage,
      endCursor,
    },
    totalCount,
  };
};
