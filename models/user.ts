"use strict";
import { Model } from "sequelize";
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  enabled: boolean;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    enabled!: boolean;

    static associate(models: any) {
       this.belongsTo(models.Rols);
       this.hasOne(models.FuncionariosRegistro);
       this.hasOne(models.Representantes);
    }
  }
  User.init(
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
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
      modelName: "Users",
    }
  );
  return User;
};
