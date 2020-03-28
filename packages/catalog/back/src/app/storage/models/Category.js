module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("category", {
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
  });
  Category.associate = (models) => {
    Category.belongsTo(models.Catalog);
    Category.hasMany(models.Product);
  };
  return Category;
};
