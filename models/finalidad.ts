"use strict";

import { Model } from "sequelize";

export interface FinalidadAttributes {
  id: number;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Finalidad
    extends Model<FinalidadAttributes>
    implements FinalidadAttributes
  {
    id!: number;
    name!: string;

    static associate(models: any) {
      // define association here
    }
  }
  Finalidad.init(
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
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Finalidades",
    }
  );
  return Finalidad;
};
