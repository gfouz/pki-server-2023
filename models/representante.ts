"use strict";

interface RepresentanteAttributes {
  id: number;
  ci: number;
  tome: number;
  folio: number;
  name: string;
  phone: string;
  namer: string;
  namerCharge: string;
  enabled: boolean;
  eiId: number;
  userId: number;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Representante
    extends Model<RepresentanteAttributes>
    implements RepresentanteAttributes
  {
    id!: number;
    ci!: number;
    tome!: number;
    folio!: number;
    name!: string;
    phone!: string;
    namer!: string;
    namerCharge!: string;
    enabled!: boolean;
    eiId!: number;
    userId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  Representante.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
      },
      ci: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
      },
      tome: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      folio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      namer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      namerCharge: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      eiId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "EmpresasInstituciones",
          key: "id",
        },
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Representantes",
    }
  );
  return Representante;
};
