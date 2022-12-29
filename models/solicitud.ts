"use strict";
import { Model } from "sequelize";

interface SolicitudAttributes {
  id: string;
  type: string;
  ci: number;
  tome: number;
  folio: number;
  name: string;
  email: string;
  phone: string;
  charge: string;
  state: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Solicitud
    extends Model<SolicitudAttributes>
    implements SolicitudAttributes
  {
    id!: string;
    type!: string;
    ci!: number;
    tome!: number;
    folio!: number;
    name!: string;
    email!: string;
    phone!: string;
    charge!: string;
    state!: string;
    //tarifaId!: number;
    //propositoId!: number;
    //estadoId!: number;
    //eiId!: number;
    //erId!: number;

    static associate(models: any) {
      this.belongsTo(models.Representantes);
      this.hasOne(models.Propositos)
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
      type: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'solicitud',
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
      state: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },

    {
      sequelize,
      modelName: "Solicitudes",
    }
  );
  return Solicitud;
};
