const table = "color";

module.exports = {
  up(query, DataTypes) {
    return query.createTable(table, {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
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
      image_id: {
        type: DataTypes.INTEGER,
        references: {
          key: "id",
          model: "image",
        },
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }
    });
  },
  down(query) {
    return query.dropTable(table);
  },
};
