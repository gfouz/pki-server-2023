"use strict";

import { Model } from "sequelize";

interface EstadoAttributes {
  id: number;
  name: string;
  enabled: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Estado extends Model<EstadoAttributes> implements EstadoAttributes {
    id!: number;
    name!: string;
    enabled!: boolean;

    static associate(models: any) {
      // define association here
    }
  }
  Estado.init(
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
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Estados",
    }
  );
  return Estado;
};
