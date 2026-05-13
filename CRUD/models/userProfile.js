import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../config/connectDb.js";

const Profile = sequelize.define("Profile",{

    id : {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    bio : {
        type : DataTypes.STRING,
        allowNull : true,

    },
    userId : {
        type : DataTypes.INTEGER,
        allowNull: false,
        unique : true
    }

},{
    freezeTableName: true
})

export default Profile