const UserController = require('../controllers/UserControllers')

const router = require('express').Router()


router.post('/register', UserController.register)
router.get('/check/:id', UserController.getUserById)

module.exports = router