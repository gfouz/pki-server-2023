"use strict";

import { Model } from "sequelize";

export interface FinalidadAttributes {
  id: number;
  type: string;
  name: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Finalidad
    extends Model<FinalidadAttributes>
    implements FinalidadAttributes
  {
    id!: number;
    type!: string;
    name!: string;

    static associate(models: any) {
      this.belongsTo(models.Tarifas);
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
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'finalidad'
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
