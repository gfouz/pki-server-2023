"use strict";

import { Model } from "sequelize";

interface EstadoAttributes {
  id: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Estado extends Model<EstadoAttributes> implements EstadoAttributes {
    id!: number;
    name!: string;

    static associate(models: any) {
      this.belongsTo(models.Solicitudes);
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
    {
      timestamps: false,
      sequelize,
      modelName: "Estados",
    }
  );
  return Estado;
};
