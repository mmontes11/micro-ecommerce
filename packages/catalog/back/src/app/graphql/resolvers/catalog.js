import { UserInputError } from "apollo-server";
import { isEmpty } from "common/data";

const catalogs = async (parent, args, context) => {
  const {
    storage: {
      models: { Catalog },
    },
  } = context;
  const result = await Catalog.findAll();
  if (isEmpty(result)) {
    throw new UserInputError("Catalogs not found");
  }
  return result;
};

export default {
  Query: {
    catalogs,
  },
};
