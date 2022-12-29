"use strict";

interface OrganismoAttributes {
  id: number;
  type: string;
  name: string;
  enabled: boolean;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Organismo
    extends Model<OrganismoAttributes>
    implements OrganismoAttributes
  {
    id!: number;
    type!: string;
    name!: string;
    enabled!: boolean;

    static associate(models: any) {
      this.hasMany(models.EmpresasInstituciones);
    }
  }
  Organismo.init(
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
        defaultValue: 'organismo'
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
      timestamps: false,
      sequelize,
      modelName: "Organismos",
    }
  );
  return Organismo;
};
