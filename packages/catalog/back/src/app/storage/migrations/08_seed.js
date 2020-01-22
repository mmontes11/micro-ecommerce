import { models } from "../../storage";

const { Catalog, Category, Product } = models;

module.exports = {
  async up() {
    const catalog = await Catalog.create({
      key: "man",
      name: "Man",
    });
    const product = {
      key: "hollister-tshirt",
      name: "Hollister T-Shirt",
      brand: "Hollister",
      price: 30000,
      currency: "eur",
    };
    const category = await Category.create(
      {
        key: "tshirt",
        name: "T-Shirt",
        products: [product],
        catalogId: catalog.id,
      },
      { include: [Product] },
    );
  },
  async down() {
    const promises = [...Object.values(models)].map(m => m.destroy({ where: {}, force: true }));
    await Promise.all(promises);
  },
};
