import express from "express"
import { createUser, deleteUser, findUser, findUserById, updateUser } from "../controllers/userController.js"

const Router = express.Router()

Router.get("/",findUser)
Router.get("/:id",findUserById)
Router.post("/",createUser)
Router.put("/:id",updateUser)
Router.delete("/:id",deleteUser)


export default Router