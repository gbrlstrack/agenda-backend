const { Router } = require("express")
const userController = require("../controllers/userController")
const validateSchema = require("../middleware/validateSchema")
const userSchema = require("../schemas/userSchema")

const router = Router()

router.route('/')
    .get(userController.getAll)
    .post(validateSchema(userSchema), userController.create)

router.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.destroy)

module.exports = router