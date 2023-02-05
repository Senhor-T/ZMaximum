const UserController = require('../controllers/UserControllers')
const verifyToken = require('../helpers/verify-token')
const router = require('express').Router()


router.post('/register', UserController.register)
router.post('/login',UserController.login)
router.get('/checkuser',UserController.checkUser)
router.get('/check/:id', UserController.getUserById)
router.patch('/add-favorite',verifyToken,UserController.addFavoriteMovie)
router.patch('/remove-favorite/:id_fav',verifyToken,UserController.removeToFavorite)
router.get('/get/all',UserController.getAllusers)
router.get('/get-favorites/:id_fav',UserController.getFavoritesUser)

module.exports = router