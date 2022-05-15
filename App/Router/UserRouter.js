const express = require('express')
const UserController = require('../Controller/UserController')

var router = express.Router()



//CREATE
//addUserUsingBody
//http://localhost:3000/User/add_user
router.post('/User/add_user',UserController.add_User)

//addUserUsingParams
//http://localhost:3000/User/add_user/Nguyen Van A/THANH HOA/11-15-1973
router.post('/User/add_user/:name/:address/:birthday',UserController.add_User_with_params)


//READ
//Get all user
//http://localhost:3000/User/get_user
router.get("/User/Get_User",UserController.Get_All_user)
//Get user by id
//http://localhost:3000/User/get_user/627e2a7c81769406a2b67d90
router.get("/User/Get_User/:Id",UserController.Get_User_byID)

//UPDATE
//update address using params
//http://localhost:3000/User/Update_User_address/627e2a7c81769406a2b67d90/HA NOI
router.put("/User/Update_User_address/:Id/:Address",UserController.UpdateUserAddressByID)

//update birthday using params
//http://localhost:3000/User/Update_User_address/627e2a7c81769406a2b67d90/12-10-2001
router.put("/User/Update_User_birthday/:Id/:Birthday",UserController.UpdateUserBirthdayByID)

//update user using body
//http://localhost:3000/User/Update_User_address/627e2a7c81769406a2b67d90
router.put("/User/Update_User/:Id",UserController.UpdateUserByID)

//DELETE
//Delete user by ID
//http://localhost:3000/User/delete_user/:Id
router.delete("/User/Delete_User/:Id",UserController.DeleteUserByID)

module.exports = router