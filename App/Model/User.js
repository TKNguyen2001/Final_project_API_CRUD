const mongooes = require('mongoose')

//Khai bao thuoc tinh bang
const UserSchema = new mongooes.Schema({
    Name : {
        type : String,
        required : true
    },

    Address : {
        type : String,
        required : true
    },

    Birthday : {
        type : String
    }


})

//tao bang cho database ten la User
let User = mongooes.model("User",UserSchema)
module.exports = {User}