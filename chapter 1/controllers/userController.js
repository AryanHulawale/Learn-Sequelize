import { Op, where } from "sequelize"
import { sequelize } from "../config/connectDb.js"
import User from "../models/userModel.js"

export const Register = async (req, res) => {
    try {
        const jake = await User.create({ name: "Jake" })
        // console.log(jake.name)
        // await jake.save()
        // jake.name = 'Aryan'
        await jake.update({
            name: "Aryan",
            favoriteColor: "Blue"
        })
        await jake.save()
        res.status(201).json(jake)

    } catch (e) {
        return res.status(500).json({ message: "Internal Server Error" })
        console.log(e)
    }
}


export const FindMethods = async (req, res, next) => {
    try {

        const newUser = {
            firstName: 'vivek',
            lastName: 'kumar',
            email: 'vivek@gmail.com',
            password: 'Admin@123',
            age: 40,
        }
        const users = [
            {
                firstName: 'vivek',
                lastName: 'kumar',
                email: 'vivek@gmail.com',
                password: 'Admin@123',
                age: 40,
            },
            {
                firstName: 'aarav',
                lastName: 'sharma',
                email: 'aarav.sharma@example.com',
                password: 'Aarav@123',
                age: 29,
            },
            {
                firstName: 'anaya',
                lastName: 'verma',
                email: 'anaya.verma@example.com',
                password: 'Anaya#456',
                age: 25,
            },
            {
                firstName: 'krishna',
                lastName: 'iyer',
                email: 'krishna.iyer@example.com',
                password: 'Krishna@789',
                age: 34,
            },
            {
                firstName: 'neha',
                lastName: 'patel',
                email: 'neha.patel@example.com',
                password: 'Neha@2022',
                age: 28,
            },
            {
                firstName: 'rohan',
                lastName: 'singh',
                email: 'rohan.singh@example.com',
                password: 'Rohan@345',
                age: 32,
            },
            {
                firstName: 'sanya',
                lastName: 'gupta',
                email: 'sanya.gupta@example.com',
                password: 'Sanya@678',
                age: 27,
            },
            {
                firstName: 'rahul',
                lastName: 'mishra',
                email: 'rahul.mishra@example.com',
                password: 'Rahul@901',
                age: 37,
            },
            {
                firstName: 'riya',
                lastName: 'nair',
                email: 'riya.nair@example.com',
                password: 'Riya@234',
                age: 30,
            },
            {
                firstName: 'arjun',
                lastName: 'joshi',
                email: 'arjun.joshi@example.com',
                password: 'Arjun@567',
                age: 35,
            },
        ];

        // const createdUser = await User.create(newUser)
        // const BulkUser = await User.bulkCreate(users)

        // const UserDetails = await User.findAll()
        // return res.status(201).json(UserDetails)

        // const UserDetails = await User.findAll({
        //     attributes : ['firstName']
        // })
        // return res.status(201).json(UserDetails)

        // const UserDetails = await User.findAll({
        //     attributes : [['firstName','FN'],['lastName','LN'],]
        // })
        // return res.status(201).json(UserDetails)

        // const UserDetails = await User.findAll({
        //     attributes : [['firstName','FN'],[sequelize.fn('COUNT',sequelize.col('firstName')), 'count']],
        //      group: ['firstName']
        // })
        // return res.status(201).json(UserDetails)

        const UserDetails = await User.findAll({
            attributes: [[sequelize.fn('SUM', sequelize.col('id')), 'Sum']]
        })
        return res.status(201).json(UserDetails)

    } catch (e) {
        return res.status(500).json({ message: "Internal Server Error" })
        console.log(e)
    }
}


export const WhereClause = async (req, res, next) => {
    try {

        // const user = await User.findAll({
        //     where : {
        //         id: [1,2,3,4],
        //         isActive : true
        //     }
        // })
        // return res.json(user)

        // const user = await User.findAll({
        //     where : {
        //         id: {
        //             [Op.gt]: [175]
        //         },
        //         isActive : true
        //     }
        // })
        // return res.json(user)


        // const user = await User.findAll({
        //     where : {
        //         id: {
        //             [Op.and]: [{id : 5}, {isActive : true}]
        //         },

        //     }
        // })
        // return res.json(user)

        // const [updatedUser] = await User.update(
        //     {
        //         firstName : "Aryan",
        //         lastName : "Hulawale"
        //     },{
        //         where : {
        //             id : 1
        //         }
        //     }
        // )
        // return res.json({updatedUser})
        
        const deleteUser = await User.destroy({
            where : {
                id : 1
            }
        })
        return res.json({deleteUser})

    } catch (e) {
        return res.status(500).json({ message: "Internal Server Error" })
        console.log(e)
    }
}