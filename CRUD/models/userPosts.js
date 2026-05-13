import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../config/connectDb.js";

const Post = sequelize.define("Post", {

    id: {
        type: DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement :true
    },
    content: {
        type: DataTypes.STRING
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

}, {
    freezeTableName: true,
    timestamps: false
})

export default Post