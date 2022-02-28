const express = require ('express')
const router = express.Router()
const userApiController = require("../../controllers/api/userApi")

router.get("/users",  userApiController.listUsers)
router.get("/users/:id",  userApiController.getOneUser)


module.exports = router
