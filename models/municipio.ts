"use strict";

interface MunicipioAttributes {
  id: number;
  name: string;
  enabled: boolean;
  provinciaId: number;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Municipio
    extends Model<MunicipioAttributes>
    implements MunicipioAttributes
  {
    id!: number;
    name!: string;
    enabled!: boolean;
    provinciaId!: number;

    static associate(models: any) {
       this.belongsTo(models.Provincias);
      
    }
  }
  Municipio.init(
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
      provinciaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Provincias",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Municipios",
    }
  );
  return Municipio;
};
