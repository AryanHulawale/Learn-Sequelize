import Joi from "joi";

const userSchema = Joi.object({

    firstName: Joi.string().required() ,
    lastName:Joi.string().required() ,
    email:Joi.string().email().required(),
    age: Joi.number().required(),
    password: Joi.string().min(6).required(),
    mobile: Joi.number().required(),
    isActive:Joi.boolean().default(true)

})

export default userSchema