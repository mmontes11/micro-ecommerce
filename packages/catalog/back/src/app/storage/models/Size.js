module.exports = (sequelize, DataTypes) =>
  sequelize.define("size", {
    sku: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: { notEmpty: true },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    priceCents: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    priceCurrency: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { notEmpty: true },
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "product",
      },
      allowNull: true,
    },
    colorId: {
      type: DataTypes.INTEGER,
      references: {
        key: "id",
        model: "color",
      },
      allowNull: true,
    },
  });
