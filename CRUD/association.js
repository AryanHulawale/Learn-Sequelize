import User from "./models/user.js";
import Profile from "./models/userProfile.js"
import Post from "./models/userPosts.js"
import Student from "./models/student.js";
import Course from "./models/course.js";

// One to one 
User.hasOne(Profile, {
    foreignKey: "userId",
    as: "profile"
})

Profile.belongsTo(User, {
    foreignKey: "userId",
    as: "profile"
})


// one to many
User.hasMany(Post, {
    foreignKey: "userId",
    as: "posts"
})

Post.belongsTo(User, {
    foreignKey: "userId",
    as: "posts"
})


// many to many 
Student.belongsToMany(Course, { through: "StudentCourses" })
Course.belongsToMany(Student, { through: "StudentCourses" })