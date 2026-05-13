import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'CRUD',
    'postgres',
    'root',
    {
        dialect: "postgres",
        host : "localhost",
        port: 5432,
        logging : false
    }
)

export const connectDb = async()=>{
    try{
        await sequelize.authenticate()
        console.log("Database connected Successfully")
    }catch(e){
        console.log("Error connecting Db : ",e)
    }
}
