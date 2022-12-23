"use strict";

interface EntidadRegistroAttributes {
  id: number;
  name: string;
  address: string;
  enabled: boolean;
  municipioId: number;
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
    municipioId!: number;

    static associate(models: any) {
      // define association here
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
      modelName: "EntidadesRegistro",
    }
  );
  return EntidadRegistro;
};
