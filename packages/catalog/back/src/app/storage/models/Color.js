module.exports = (sequelize, DataTypes) => {
  const Color = sequelize.define("color", {
    key: {
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
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isUrl: true },
    },
  });
  Color.associate = models => {
    Color.belongsToMany(models.Product, { through: "product_color_size" });
    Color.belongsToMany(models.Size, { through: "product_color_size" });
  };
  return Color;
};
