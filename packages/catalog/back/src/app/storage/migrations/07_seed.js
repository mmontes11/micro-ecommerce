import { indexBy } from "common/data";
import { models } from "..";
import {
  catalogFactory,
  categoryFactory,
  colorsFactory,
  productFactory,
  getNumericSizes,
} from "./helpers/data.factory";
import { catalogs, getCategories, colors, sizes, getProducts } from "./helpers/data";

module.exports = {
  async up(queryInterface) {
    const createCatalogs = catalogFactory(queryInterface, models);
    const createCategories = categoryFactory(queryInterface, models);
    const createColors = colorsFactory(queryInterface, models);
    const createProducts = productFactory(queryInterface, models);

    const [man, woman] = await createCatalogs(catalogs);
    const catalogObject = { man, woman };

    const categories = getCategories(catalogObject);
    const [manTshirt, manShoes, womanTrousers, womanJeans] = await createCategories(categories);
    const categoryObject = { manTshirt, manShoes, womanTrousers, womanJeans };

    const createdColors = await createColors(colors);
    const [white, black, blue] = createdColors;
    const colorIndex = indexBy(createdColors, "id");
    const colorObject = { white, black, blue };

    const shoeSizes = getNumericSizes(35, 45, 1);
    const trouserSizes = getNumericSizes(30, 60, 2);
    const sizeObject = { sizes, shoeSizes, trouserSizes };

    const products = getProducts(categoryObject, colorObject, sizeObject);
    await createProducts(colorIndex, products);
  },
  async down() {
    const promises = [...Object.values(models)].map(m => m.destroy({ where: {}, force: true }));
    await Promise.all(promises);
  },
};
