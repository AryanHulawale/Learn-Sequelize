import express from "express"
import { sequelize, connectDb } from "./config/connectDb.js"
import Router from "./routers/userRoutes.js"
import "./association.js"

const app = express()
app.use(express.json())
connectDb()

app.use("/", Router);




(
    async () => {
            try {
                await sequelize.sync({ force: false })
                console.log("Database Synced")
            } catch (e) {
                console.log("Error syncing the Database : ", e)
            }
        }
)()




const port = 8000
app.listen(port, () => {
    console.log("Server is running on the port : ", port)
})