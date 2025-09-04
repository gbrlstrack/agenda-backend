const { Router } = require("express")
const userController = require("../controllers/userController")

const router = Router()

router.route('/')
    .get(userController.getAll)
    .post(userController.create)

router.route('/:id')
    .get(userController.getById)
    .put(userController.update)
    .delete(userController.destroy)

module.exports = router