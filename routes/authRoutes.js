const { register, login, logout } = require("../controllers/authController")

const { authenticateUser } = require("../middleware/authentication")

const express = require("express")
const router = express.Router()

router.route("/register").post(register)
router.route("/login").post(login)
router.route("/logout").get(logout)

module.exports = router
