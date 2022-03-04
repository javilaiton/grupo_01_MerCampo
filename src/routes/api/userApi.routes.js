const express = require ('express')
const router = express.Router()
const userApiController = require("../../controllers/api/userApi")

router.get("/users",  userApiController.listUsers)
router.get("/users/:id", userApiController.getOneUser)
router.get("/users/lastuser", userApiController.getLastUser)

module.exports = router
