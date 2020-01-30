import slufigy from "slugify";
import { models } from "..";

const { Catalog, Category, Product, Color, Image, Size } = models;
const getSku = (product, color, sizeName) => slufigy(`${product.name}-${color.name}-${sizeName}`, { lower: true });
const createSizes = async (product, color, price) =>
  Promise.all(
    ["XS", "S", "M", "L", "XL"].map((s, index) =>
      Size.create({
        sku: getSku(product, color, s),
        name: s,
        price,
        currency: "eur",
        order: index,
      }),
    ),
  );

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

    const gridWhiteImage = await Image.create({
      location: "grid",
      url: "http://grid.white.image",
    });
    const gridBlackImage = await Image.create({
      location: "grid",
      url: "http://grid.black.image",
    });
    const whiteColorImage = await Image.create({
      location: "color",
      url: "http://color.white.image",
    });
    const blackColorImage = await Image.create({
      location: "color",
      url: "http://color.black.image",
    });

    const white = await Color.create({
      key: "white",
      name: "White",
      imageId: whiteColorImage.id,
    });
    const black = await Color.create({
      key: "black",
      name: "Black",
      imageId: blackColorImage.id,
    });

    const product = await Product.create({
      key: "hollister-tshirt",
      name: "Hollister T-Shirt",
      brand: "Hollister",
      categoryId: category.id,
    });
    const whiteSizes = await createSizes(product, white, 3000);
    const blackSizes = await createSizes(product, black, 4000);

    const productColorRows = [
      {
        product_id: product.id,
        color_id: white.id,
      },
      {
        product_id: product.id,
        color_id: black.id,
      },
    ];
    await queryInterface.bulkInsert("product_color", productColorRows);

    const productColorImageRows = [
      {
        product_id: product.id,
        color_id: white.id,
        image_id: gridWhiteImage.id,
      },
      {
        product_id: product.id,
        color_id: black.id,
        image_id: gridBlackImage.id,
      },
    ];
    await queryInterface.bulkInsert("product_color_image", productColorImageRows);

    const productColorSizeRows = [
      ...whiteSizes.map(s => ({
        product_id: product.id,
        color_id: white.id,
        size_id: s.id,
      })),
      ...blackSizes.map(s => ({
        product_id: product.id,
        color_id: black.id,
        size_id: s.id,
      })),
    ];
    await queryInterface.bulkInsert("product_color_size", productColorSizeRows);

    console.log(await white.getImage());
    console.log(await product.getCategory());
    console.log(await product.getColors());
  },
  async down(queryInterface) {
    const promises = [...Object.values(models)].map(m => m.destroy({ where: {}, force: true }));
    await Promise.all(promises);
  },
};
