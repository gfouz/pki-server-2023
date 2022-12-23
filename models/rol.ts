"use strict";

import { Model } from "sequelize";

interface RolAttributes {
  id: number;
  name: string;
  enabled: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Rol extends Model<RolAttributes> implements RolAttributes {
    id!: number;
    name!: string;
    enabled!: boolean;

    static associate(models: any) {
      // define association here
    }
  }
  Rol.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Rols",
    }
  );
  return Rol;
};
