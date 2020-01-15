import { models } from "../../storage";

const { Catalog, Category } = models;

module.exports = {
  async up() {
    const category = {
      key: "coats",
      name: "Coats",
    };
    const catalog = await Catalog.create(
      {
        key: "woman",
        name: "Woman",
        categories: [category],
      },
      { include: [Category] },
    );
  },
};
