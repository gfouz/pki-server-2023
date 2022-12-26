"use strict";

interface MunicipioAttributes {
  id: number;
  name: string;
  enabled: boolean;
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
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Municipios",
    }
  );
  return Municipio;
};
