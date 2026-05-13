import { QueryTypes } from "sequelize"
import { sequelize } from "../config/connectDb.js"
import userSchema from "../middlewares/validateUser.js"
import User from "../models/user.js"
import Profile from "../models/userProfile.js"
import Post from "../models/userPosts.js"
import Student from "../models/student.js"
import Course from "../models/course.js"

export const createUser = async (req, res, next) => {
    try {
        const { error } = await userSchema.validate(req.body)
        if (error) {
            return res.status(403).json({ message: error.details[0].message })
        }

        // const createdUser = await User.create(req.body)

        // const user = await User.create({ username: "Aryan" })
        // const profile = await Profile.create({ bio: "Hi Aryan this side", userId: user.id })


        // const user = await User.create({ username: "Aryan" })
        // const post1 = await Post.create({ content : "This is my first Post", userId : user.id})
        // const post2 = await Post.create({ content : "This is my second Post", userId : user.id})


        const student = await Student.create({ name: "Aryan" })
        const student2 = await Student.create({ name: "Karan" })

        const math = await Course.create({ title: "Math" })
        const science = await Course.create({ title: "Science" })

        await student.addCourse(math)
        await student.addCourse(science)
        await student2.addCourse(math)

        return res.status(200).send({ student, student2, math, science })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}



export const findUser = async (req, res, next) => {
    try {

        // const [findedUsers , metadata] = await sequelize.query("SELECT * FROM users")

        // const findedUsers = await sequelize.query("SELECT * FROM users", {
        //     type: QueryTypes.SELECT
        // })

        // const findedUsers = await User.findAll({
        //     include: {
        //         model : Profile,
        //         as: "profile"
        //     }
        // })

        // const findedUsers = await User.findAll({
        //     include: {
        //         model: Post,
        //         as: "posts"
        //     }
        // })


        // EAGER LOADING
        // const findedUsers = await Student.findAll({
        //     include: {
        //         model: Course,
        //     }
        // })

        // LAZY LOADING

        const findedUsers = await Student.findByPk(1)
        const Courses = await findedUsers.getCourses()

        return res.status(200).send({ Courses })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}



export const findUserById = async (req, res, next) => {
    try {
        const { id } = req.params
        const getUser = await User.findByPk(id)
        if (!getUser) {
            return res.status(404).json({ message: "User does not found" })
        }
        return res.status(200).send(getUser)

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}



export const updateUser = async (req, res, next) => {
    try {

        const { id } = req.params

        const updatedUser = await User.update(
            req.body,
            {
                where: {
                    id: id
                }
            }
        )


        return res.status(200).json("User updated successfully")

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}



export const deleteUser = async (req, res, next) => {
    try {

        const { id } = req.params
        const getUser = await User.findByPk(id)
        if (!getUser) {
            return res.status(404).json({ message: "User does not found" })
        }

        await getUser.destroy()
        return res.status(200).json("User deleted Successfully")

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}



export const test = async (req, res, next) => {
    try {

        const { name, id } = req.body
        const query = await sequelize.query("SELECT * FROM users WHERE firstName = ? and id = ?", {
            replacements: [name, id],
            type: QueryTypes.SELECT
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}



const unManagedTransaction = async (req, res, next) => {

    const t = await sequelize.transaction()
    try {

        // Kaam create update delete

        await t.commit()

    } catch (error) {
        await t.rollback()
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

const managedTransaction = async (req, res) => {
    try {

        const result = await sequelize.transaction(async (t) => {
            const user = await User.create(req.body, {
                transaction: t
            })
            // just add like this
        })

    } catch (error) {

        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" })
    }
}