"use strict";

interface NombradorAttributes {
  id: number;
  type: string;
  ci: number;
  name: string;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class Nombrador
    extends Model<NombradorAttributes>
    implements NombradorAttributes
  {
    id!: number;
    type!: string;
    ci!: number;
    name!: string;

    static associate(models: any) {
      this.hasMany(models.Representantes);
    }
  }
  Nombrador.init(
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
        defaultValue: 'nombrador'
      },
      ci: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Nombradores",
    }
  );
  return Nombrador;
};
