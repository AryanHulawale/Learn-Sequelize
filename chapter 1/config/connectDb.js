import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    'test',
    'postgres',
    'root',
    {
        host: "localhost",
        port: 5432,
        dialect: 'postgres',
        logging:false
    }
)
 
const connectDb = async () => {
    try {
        await sequelize.authenticate()
        console.log("Database connected Successfully")

    } catch (error) {
        console.log("Error connecting the DB : ", error)
    }
}

export {
    connectDb,
    sequelize
}