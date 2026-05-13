import { Sequelize,DataTypes } from "sequelize";
import { sequelize } from "../config/connectDb.js";

const UserDetails = sequelize.define('UserDetails',{

    email : {
        type: DataTypes.STRING
    },
    address : {
        type: DataTypes.STRING
    },
    phone : {
        type: DataTypes.INTEGER
    }

},{
    freezeTableName:true,
    timestamps:false
})

export default UserDetails