import { sequelize } from "../config/connectDb.js";
import { Sequelize, DataTypes, Model } from "sequelize";


const User = sequelize.define('user', {
  // Model attributes are defined here
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  age: DataTypes.INTEGER,
  isActive:{
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  // Other model options go here
  freezeTableName: true
});

export default User