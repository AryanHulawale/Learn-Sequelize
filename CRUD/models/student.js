import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/connectDb.js";

const Student = sequelize.define("Student", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Student