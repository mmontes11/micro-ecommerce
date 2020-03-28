import Sequelize from "sequelize";

const { or } = Sequelize.Op;

export default function (idOrKey) {
  return this.findOne({
    where: {
      [or]: {
        id: idOrKey,
        key: idOrKey,
      },
    },
  });
}
