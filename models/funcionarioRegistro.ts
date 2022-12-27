"use strict";

interface FuncionarioRegistroAttributes {
  id: number;
  name: string;
  phone: string;
  enabled: boolean;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class FuncionarioRegistro
    extends Model<FuncionarioRegistroAttributes>
    implements FuncionarioRegistroAttributes
  {
    id!: number;
    name!: string;
    phone!: string;
    enabled!: boolean;
    //erId!: number;
    //userId!: number;

    static associate(models: any) {
      this.belongsTo(models.Users);
      this.belongsTo(models.EntidadesRegistro);
    }
  }
  FuncionarioRegistro.init(
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
      },
      phone: {
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
      modelName: "FuncionariosRegistro",
    }
  );
  return FuncionarioRegistro;
};
