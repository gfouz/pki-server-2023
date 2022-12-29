"use strict";

interface RepresentanteAttributes {
  id: number;
  type: string;
  ci: number;
  tome: number;
  folio: number;
  name: string;
  phone: string;
  namer: string;
  namerCharge: string;
  enabled: boolean;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Representante
    extends Model<RepresentanteAttributes>
    implements RepresentanteAttributes
  {
    id!: number;
    type!: string;
    ci!: number;
    tome!: number;
    folio!: number;
    name!: string;
    phone!: string;
    namer!: string;
    namerCharge!: string;
    enabled!: boolean;

    static associate(models: any) {
      this.hasMany(models.Solicitudes);
      this.belongsTo(models.EmpresasInstituciones);
      this.belongsTo(models.Users);
      this.belongsTo(models.Nombradores);
    }
  }
  Representante.init(
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
        defaultValue: 'representante'
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
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Representantes",
    }
  );
  return Representante;
};
