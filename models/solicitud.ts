"use strict";
import { Model, UUIDV4 } from "sequelize";

interface SolicitudAttributes {
  id: string;
  ci: number;
  tome: number;
  folio: number;
  name: string;
  email: string;
  phone: string;
  charge: string;
  tarifaId: number;
  propositoId: number;
  estadoId: number;
  eiId: number;
  erId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Solicitud
    extends Model<SolicitudAttributes>
    implements SolicitudAttributes
  {
    id!: string;
    ci!: number;
    tome!: number;
    folio!: number;
    name!: string;
    email!: string;
    phone!: string;
    charge!: string;
    tarifaId!: number;
    propositoId!: number;
    estadoId!: number;
    eiId!: number;
    erId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  Solicitud.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      ci: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      tome: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      folio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      charge: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      tarifaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Tarifas",
          key: "id",
        },
      },
      propositoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Propositos",
          key: "id",
        },
      },
      estadoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Estados",
          key: "id",
        },
      },
      eiId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "EmpresasInstituciones",
          key: "id",
        },
      },
      erId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "EntidadesRegistros",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Solicitudes",
    }
  );
  return Solicitud;
};
