"use strict";

import { Model } from "sequelize";

interface ProvinciaAttributes {
  id: number;
  type: string;
  name: string;
  enabled: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Provincia
    extends Model<ProvinciaAttributes>
    implements ProvinciaAttributes
  {
    id!: number;
    type!: string;
    name!: string;
    enabled!: boolean;

    static associate(models: any) {
      this.hasMany(models.Municipios, {foreignKey: 'ProvinciaId'});
    }
  }
  Provincia.init(
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
        defaultValue: 'provincia',
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
      modelName: "Provincias",
    }
  );
  return Provincia;
};
