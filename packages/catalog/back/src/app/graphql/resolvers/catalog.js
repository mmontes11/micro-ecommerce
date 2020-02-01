const catalogs = async (parent, args, context) => {
  const {
    storage: {
      models: { Catalog },
    },
  } = context;
  return Catalog.findAll();
};

export default {
  Query: {
    catalogs,
  },
};
