"use strict";

import { Model } from "sequelize";

interface TarifaAttributes {
  id: number;
  time: number;
  price: number;
  range: string;
  enabled: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Tarifa extends Model<TarifaAttributes> implements TarifaAttributes {
    id!: number;
    time!: number;
    price!: number;
    range!: string;
    //finalidadId!: number;
    enabled!: boolean;

    static associate(models: any) {
      // define association here
    }
  }
  Tarifa.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      time: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      range: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Tarifas",
    }
  );
  return Tarifa;
};
