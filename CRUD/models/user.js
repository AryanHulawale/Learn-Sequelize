import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/connectDb.js";

const User = sequelize.define("user", {
    // firstName: {
    //     type: DataTypes.STRING,
    //     get() {
    //         const rawValue = this.getDataValue("firstName")
    //         return rawValue ? "Mr." + rawValue.toUpperCase() : null
    //     }
    // },
    // lastName: {
    //     type: DataTypes.STRING,
    //     set(value) {
    //         this.setDataValue("lastName",
    //             value + " From India")
    //     }
    // },
    // fullName: {
    //     type: DataTypes.VIRTUAL,
    //     get() {
    //         return `${this.firstName} ${this.lastName}`
    //     },
    //     set(value) {
    //         throw new Error("Error I dont know what")
    //     }
    // },
    // email: DataTypes.STRING,
    // age : {
    //     type :DataTypes.INTEGER,
    //     validate : {
    //         customValidator(value){
    //             if(value === null || value <= 0){
    //                 throw new Error("Age cannot be zero ")
    //             }
    //         }
    //     }
    // },
    // password: DataTypes.STRING,
    // mobile: DataTypes.BIGINT,
    // isActive: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false
    // }


    id :{ 
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username : {
        allowNull:false,
        type: DataTypes.STRING
    },
}, {
    tableName: "users",
    timestamps: false
})

export default User