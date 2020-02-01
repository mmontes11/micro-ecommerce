import { indexBy } from "common/data";
import { models } from "..";
import { catalogFactory, categoryFactory, colorsFactory, productFactory, getNumericSizes } from "./data.factory";

module.exports = {
  async up(queryInterface) {
    const createCatalogs = catalogFactory(queryInterface, models);
    const createCategories = categoryFactory(queryInterface, models);
    const createColors = colorsFactory(queryInterface, models);
    const createProduct = productFactory(queryInterface, models);

    const [man, woman] = await createCatalogs([
      {
        name: "Man",
      },
      {
        name: "Woman",
      },
    ]);

    const [manTshirt, manShoes, womanTrousers] = await createCategories([
      {
        name: "T-Shirts",
        catalog: man,
      },
      {
        name: "Shoes",
        catalog: man,
      },
      {
        name: "Trousers",
        catalog: woman,
      },
    ]);

    const colors = await createColors([
      {
        name: "White",
        imageUrl: "http://color.white.image",
      },
      {
        name: "Black",
        imageUrl: "http://color.black.image",
      },
      {
        name: "Blue",
        imageUrl: "http://color.blue.image",
      },
    ]);
    const [white, black, blue] = colors;
    const colorIndex = indexBy(colors, "id");

    const sizes = ["XS", "S", "M", "L", "XL"];
    const shoeSizes = getNumericSizes(35, 45, 1);
    const trouserSizes = getNumericSizes(30, 60, 2);

    const products = [
      {
        name: "T-Shirt",
        brand: "Hollister",
        category: manTshirt,
        colors: {
          [white.id]: {
            images: [
              {
                location: "grid",
                url: "http://grid.white.image",
              },
            ],
            sizes: {
              names: sizes,
              price: 2000,
            },
          },
          [black.id]: {
            images: [
              {
                location: "grid",
                url: "http://grid.black.image",
              },
            ],
            sizes: {
              names: sizes,
              price: 1000,
            },
          },
        },
      },
      {
        name: "Sneakers",
        brand: "Adidas",
        category: manShoes,
        colors: {
          [white.id]: {
            images: [
              {
                location: "grid",
                url: "http://grid.white.image",
              },
            ],
            sizes: {
              names: shoeSizes,
              price: 3000,
            },
          },
        },
      },
      {
        name: "Trousers",
        brand: "Prada",
        category: womanTrousers,
        colors: {
          [blue.id]: {
            images: [
              {
                location: "grid",
                url: "http://grid.white.image",
              },
            ],
            sizes: {
              names: trouserSizes,
              price: 8000,
            },
          },
        },
      },
    ];
    await createProduct(colorIndex, products);
  },
  async down() {
    const promises = [...Object.values(models)].map(m => m.destroy({ where: {}, force: true }));
    await Promise.all(promises);
  },
};
