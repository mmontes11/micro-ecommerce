import { combineResolvers } from "graphql-resolvers";
import { indexBy } from "common/data";
import getMandatoryArgsResolver from "./args";
import { parseList } from "../helpers/string";

const mandatoryArgsResolver = getMandatoryArgsResolver(["categoryId", "categoryKey"]);

const resolver = combineResolvers(mandatoryArgsResolver, async (parent, args, context) => {
  const { storage, paginators } = context;
  const {
    models: { Image, Color, Size },
  } = storage;
  const {
    categoryId,
    categoryKey,
    page: { cursor, limit },
  } = args;

  const filter = { categoryId, categoryKey };
  const results = await paginators.products(storage, filter, cursor, limit);
  const { edges, pageInfo, totalCount } = results;

  const productsPromises = edges.map(async productFromDB => {
    const { id: productId, imageIds, colorIds, ...restProduct } = productFromDB;

    const imagesQuery = Image.findAll({ where: { id: parseList(imageIds) }, order: [["location", "ASC"]] });
    const colorsQuery = Color.findAll({ where: { id: parseList(colorIds) }, order: [["name", "ASC"]] });
    const [imagesFromDB, colorsFromDB] = await Promise.all([imagesQuery, colorsQuery]);

    const colorImageIndex = indexBy(imagesFromDB, "colorId");
    const colorPromises = colorsFromDB.map(async colorFromDB => {
      const { id: colorId, ...restColor } = colorFromDB.toJSON();
      const images = colorImageIndex[colorId];

      const sizesFromDB = await Size.findAll({ where: { productId, colorId }, order: [["order", "ASC"]] });
      const sizes = sizesFromDB.map(sizeFromDB => {
        const { priceCents: cents, priceCurrency: currency, ...restSize } = sizeFromDB.toJSON();
        return {
          price: {
            cents,
            currency,
          },
          ...restSize,
        };
      });

      return {
        id: colorId,
        images,
        sizes,
        ...restColor,
      };
    });
    const colors = await Promise.all(colorPromises);

    return {
      id: productId,
      colors,
      ...restProduct,
    };
  });
  const products = await Promise.all(productsPromises);

  return { edges: products, pageInfo, totalCount };
});

export default {
  Query: {
    products: resolver,
  },
};
