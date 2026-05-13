import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/connectDb.js";

const Course = sequelize.define("Course", {

    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

export default Course