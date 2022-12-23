"use strict";

interface OrganismoAttributes {
  id: number;
  name: string;
  enabled: boolean;
  municipioId: number;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Organismo
    extends Model<OrganismoAttributes>
    implements OrganismoAttributes
  {
    id!: number;
    name!: string;
    enabled!: boolean;
    municipioId!: number;

    static associate(models: any) {
      // define association here
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      municipioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Municipios",
          key: "id",
        },
      },
    },

    {
      sequelize,
      modelName: "Organismos",
    }
  );
  return Organismo;
};