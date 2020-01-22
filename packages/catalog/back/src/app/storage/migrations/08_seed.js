import { models } from "../../storage";

const { Catalog, Category, Product, Color, Image } = models;

module.exports = {
  async up(queryInterface) {
    const catalog = await Catalog.create({
      key: "man",
      name: "Man",
    });
    const category = await Category.create({
      key: "tshirt",
      name: "T-Shirt",
      catalogId: catalog.id,
    });

    const color = await Color.create({
      key: "white",
      name: "White",
      image: "http://color.white",
    });
    const image = await Image.create({
      location: "category",
      url: "http://category.image",
    });
    const product = await Product.create({
      key: "hollister-tshirt",
      name: "Hollister T-Shirt",
      brand: "Hollister",
      price: 30000,
      currency: "eur",
      categoryId: category.id,
    });

    const productColorImageRows = [
      {
        product_id: product.id,
        color_id: color.id,
        image_id: image.id,
      },
    ];
    await queryInterface.bulkInsert("product_color_image", productColorImageRows);

    console.log(await product.getCategory());
  },
  async down(queryInterface) {
    const promises = [...Object.values(models)].map(m => m.destroy({ where: {}, force: true }));
    await Promise.all(promises);
  },
};
