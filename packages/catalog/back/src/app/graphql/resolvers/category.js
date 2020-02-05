import { UserInputError } from "apollo-server";
import { isDefined, isEmpty } from "common/data";
import { combineResolvers } from "graphql-resolvers";
import getMandatoryArgsResolver from "./args";

const mandatoryArgsResolver = getMandatoryArgsResolver(["catalogId", "catalogKey"]);

const categories = combineResolvers(mandatoryArgsResolver, async (parent, args, context) => {
  const { catalogId, catalogKey } = args;
  const {
    storage: {
      models: { Catalog, Category },
    },
  } = context;
  const idOrKey = catalogId || catalogKey;
  const catalog = await Catalog.findByIdOrKey(idOrKey);
  if (!isDefined(catalog)) {
    throw new UserInputError("Catalog not found");
  }
  const result = await Category.findAll({
    where: {
      catalogId: catalog.id,
    },
  });
  if (isEmpty(result)) {
    throw new UserInputError("Categories not found");
  }
  return result;
});

export default {
  Query: {
    categories,
  },
};
