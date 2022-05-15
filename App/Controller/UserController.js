const req = require('express/lib/request')
const { get } = require('express/lib/response')
const{User} = require('../Model/User')

const UserController = {
    //Create(post)
    //AddUser
    add_User : async(req,res) =>{
        try{
            const NewUser = new User(req.body)
            const saveUser = await NewUser.save()
            console.log("Create user successful")
            res.json(saveUser)
        }
        catch(error){
            console.log("Create user fail")
        }
    },
    //Adduser using params
    add_User_with_params : async(req,res) =>{
        try {
            const NewUser = new User ({
                Name : req.params.name,
                Address :req.params.address,
                Birthday :req.params.birthday
            })
            const saveUser = await NewUser.save()
            console.log("Create user successful")
            res.json(saveUser)
        } catch (error) {
            console.log("Create user fail")
        }
    },

    //READ(get)
    //Get user

    Get_All_user : async(req,res) =>{
        try{
            const getUser  = await User.find()
            res.json(getUser)
            console.log("Get User Successful")
        }
        catch(error){
            console.log("Get user fail")
        }
    },

    Get_User_byID : async(req,res) =>{
        try {
            const getUser = await User.findById(req.params.Id)
            res.json({
                Success : true,
                Data : getUser
            })
            console.log("Get User Successful")
        } catch (error) {
            console.log("Get user fail")
        }
    },

    //UPDATE(Put)
    UpdateUserAddressByID : async(req,res)=>{
        try {
            const getUser = await User.findById(req.params.Id)
            await User.findByIdAndUpdate(req.params.Id,{
                Address : req.params.Address
            },{
                Success : true
            })
            const Result = await User.findById(req.params.Id)
            res.json({
                Before : getUser,
                After : Result
            })
            console.log("Update User Successful")
        } catch (error) {
            console.log("Update user fail")
        }

    },

    UpdateUserBirthdayByID : async(req,res)=>{
        try {
            const getUser = await User.findById(req.params.Id)
            await User.findByIdAndUpdate(req.params.Id,{
                Birthday : req.params.Birthday
            },{
                Success : true
            })
            const Result = await User.findById(req.params.Id)
            res.json({
                Before : getUser,
                After : Result
            })
            console.log("Update User Successful")
        } catch (error) {
            console.log("Update user fail")
        }

    },

    UpdateUserByID : async(req,res)=>{
        try {
            const getUser = await User.findById(req.params.Id)
            await User.findByIdAndUpdate(req.params.Id,req.body,{
                Success : true
            })
            const Result = await User.findById(req.params.Id)
            res.json({
                Before : getUser,
                After : Result
            })
            console.log("Update User Successful")
        } catch (error) {
            console.log("Update user fail")
        }

    },

    //DELETE
    DeleteUserByID : async(req,res)=>{
        try {
            await User.findByIdAndDelete(req.params.Id)
            res.json({
                Success : true
            })
            console.log("Delete User Successful")
        } catch (error) {
            console.log("Delete user fail")
        }
    }

    
}

module.exports = UserController
