"use strict";

interface EntidadRegistroAttributes {
  id: number;
  name: string;
  address: string;
  enabled: boolean;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class EntidadRegistro
    extends Model<EntidadRegistroAttributes>
    implements EntidadRegistroAttributes
  {
    id!: number;
    name!: string;
    address!: string;
    enabled!: boolean;
    //municipioId!: number;

    static associate(models: any) {
      this.hasOne(models.FuncionariosRegistro);
      this.belongsTo(models.Municipios);
    }
  }
  
  EntidadRegistro.init(
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
      address: {
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
      modelName: "EntidadesRegistro",
    }
  );
  return EntidadRegistro;
};
