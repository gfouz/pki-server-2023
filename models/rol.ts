"use strict";

import { Model } from "sequelize";

interface RolAttributes {
  id: number;
  type: string;
  name: string;
  enabled: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Rol extends Model<RolAttributes> implements RolAttributes {
    id!: number;
    type!: string;
    name!: string;
    enabled!: boolean;

    static associate(models: any) {
      this.hasMany(models.Funcionalidades);
      this.hasOne(models.Users)
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
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'rols'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Rols",
    }
  );
  return Rol;
};
