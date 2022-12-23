"use strict";

interface EmpresaInstitucionAttributes {
  id: number;
  name: string;
  enabled: boolean;
  organismoId: number;
  municipioId: number;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class EmpresaInstitucion
    extends Model<EmpresaInstitucionAttributes>
    implements EmpresaInstitucionAttributes
  {
    id!: number;
    name!: string;
    enabled!: boolean;
    organismoId!: number;
    municipioId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  EmpresaInstitucion.init(
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
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      organismoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Organismos",
          key: "id",
        },
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
      modelName: "EmpresasInstituciones",
    }
  );
  return EmpresaInstitucion;
};

//SequelizeForeignKeyConstraintError: viola la llave foranea