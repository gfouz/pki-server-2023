"use strict";

interface EmpresaInstitucionAttributes {
  id: number;
  type: string;
  name: string;
  enabled: boolean;
}

import { Model } from "sequelize";

module.exports = (sequelize: any, DataTypes: any) => {
  class EmpresaInstitucion
    extends Model<EmpresaInstitucionAttributes>
    implements EmpresaInstitucionAttributes
  {
    id!: number;
    type!: string;
    name!: string;
    enabled!: boolean;
    //organismoId!: number;
    //municipioId!: number;

    static associate(models: any) {
       this.hasOne(models.Representantes);
       this.belongsTo(models.Municipios);
       this.belongsTo(models.Organismos);
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
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'empresa o institución'
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enabled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "EmpresasInstituciones",
    }
  );
  return EmpresaInstitucion;
};

//SequelizeForeignKeyConstraintError: viola la llave foranea