"use strict";

import { Model } from "sequelize";

interface FuncionalidadAttributes {
  id: number;
  type: string;
  name: string;
  path: string;
  enabled: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Funcionalidad
    extends Model<FuncionalidadAttributes>
    implements FuncionalidadAttributes
  {
    id!: number;
    type!: string;
    name!: string;
    path!: string;
    enabled!: boolean;

    static associate(models: any) {
      this.belongsTo(models.Rols);
    }
  }
  Funcionalidad.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'funcionalidad'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Funcionalidades",
    }
  );
  return Funcionalidad;
};
