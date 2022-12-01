"use strict";

import { Model } from "sequelize";

export interface PropositoAttributes {
  id: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Proposito
    extends Model<PropositoAttributes>
    implements PropositoAttributes
  {
    id!: number;
    name!: string;

    static associate(models: any) {
      // define association here
    }
  }
  Proposito.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "Propositos",
    }
  );
  return Proposito;
};
