import { FindMethods, Register, WhereClause } from "../controllers/userController.js"
import express from "express"

const Router = express.Router()

Router.get("/",Register)
Router.get("/test",FindMethods)
Router.get("/where", WhereClause)

export default Router