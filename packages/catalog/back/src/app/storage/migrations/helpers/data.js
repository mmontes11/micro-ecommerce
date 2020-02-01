export const catalogs = [
  {
    name: "Man",
  },
  {
    name: "Woman",
  },
];

export const getCategories = catalogObject => {
  const { woman, man } = catalogObject;
  return [
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
    {
      name: "Jeans",
      catalog: woman,
    },
  ];
};

export const colors = [
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
];

export const sizes = ["XS", "S", "M", "L", "XL"];

export const getProducts = (categoryObject, colorObject, sizeObject) => {
  const { manTshirt, manShoes, womanTrousers, womanJeans } = categoryObject;
  const { white, black, blue } = colorObject;
  const { sizes: genericSizes, shoeSizes, trouserSizes } = sizeObject;
  return [
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
            {
              location: "grid-detail",
              url: "http://grid-detail.white.image",
            },
            {
              location: "detail",
              url: "http://detail.white.image",
            },
          ],
          sizes: {
            names: genericSizes,
            price: 2000,
          },
        },
        [black.id]: {
          images: [
            {
              location: "grid",
              url: "http://grid.black.image",
            },
            {
              location: "grid-detail",
              url: "http://grid-detail.black.image",
            },
            {
              location: "detail",
              url: "http://detail.black.image",
            },
          ],
          sizes: {
            names: genericSizes,
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
            {
              location: "grid-detail",
              url: "http://grid-detail.white.image",
            },
            {
              location: "detail",
              url: "http://detail.white.image",
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
        [black.id]: {
          images: [
            {
              location: "grid",
              url: "http://grid.white.image",
            },
            {
              location: "grid-detail",
              url: "http://grid-detail.white.image",
            },
            {
              location: "detail",
              url: "http://detail.white.image",
            },
          ],
          sizes: {
            names: trouserSizes,
            price: 8000,
          },
        },
      },
    },
    {
      name: "Jeans",
      brand: "Pepe Jeans",
      category: womanJeans,
      colors: {
        [blue.id]: {
          images: [
            {
              location: "grid",
              url: "http://grid.blue.image",
            },
            {
              location: "grid-detail",
              url: "http://grid-detail.blue.image",
            },
            {
              location: "detail",
              url: "http://detail.blue.image",
            },
          ],
          sizes: {
            names: trouserSizes,
            price: 6000,
          },
        },
      },
    },
  ];
};
