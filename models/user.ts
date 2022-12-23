"use strict";
import { Model } from "sequelize";
interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
  enabled: boolean;
  rolId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    name!: string;
    email!: string;
    password!: string;
    enabled!: boolean;
    rolId!: number;

    static associate(models: any) {
      // define association here
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
      rolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Rols",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return User;
};
