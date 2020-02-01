import { UserInputError } from "apollo-server";
import { isDefined, isEmpty } from "common/data";

const categories = async (parent, args, context) => {
  const { catalogId, catalogKey } = args;
  const {
    storage: {
      models: { Catalog, Category },
    },
  } = context;
  const idOrKey = catalogId || catalogKey;
  let opts = {};
  if (isDefined(idOrKey)) {
    const catalog = await Catalog.findByIdOrKey(idOrKey);
    if (!isDefined(catalog)) {
      throw new UserInputError("Catalog not found");
    }
    opts = {
      ...opts,
      where: {
        catalogId: catalog.id,
      },
    };
  }
  const result = await Category.findAll(opts);
  if (isEmpty(result)) {
    throw new UserInputError("Categories not found");
  }
  return result;
};

export default {
  Query: {
    categories,
  },
};
