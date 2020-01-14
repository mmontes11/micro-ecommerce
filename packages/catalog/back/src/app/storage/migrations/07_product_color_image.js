const table = "product_color_image";

module.exports = {
  up(query, DataTypes) {
    return query.createTable(table, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "product",
        },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      colorId: {
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "color",
        },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      imageId: {
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "image",
        },
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },
  down(query) {
    return query.dropTable(table);
  },
};
