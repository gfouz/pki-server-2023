"use strict";

import { Model } from "sequelize";

interface FuncionalidadAttributes {
  id: number;
  name: string;
  path: string;
  enabled: boolean;
  rolId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Funcionalidad
    extends Model<FuncionalidadAttributes>
    implements FuncionalidadAttributes
  {
    id!: number;
    name!: string;
    path!: string;
    enabled!: boolean;
    rolId!: number;

    static associate(models: any) {
      // define association here
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      rolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Rols",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Funcionalidades",
    }
  );
  return Funcionalidad;
};
