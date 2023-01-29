const jwt = require('jsonwebtoken')

const createUserToken = async(user,req,res) =>{
    const token = jwt.sign({
        username:user.username,
        id: user._id
    },"d41d8cd98f00b204e9800998ecf8427ed41d8cd98f00b204e9800998ecf8427e")

    res.status(200).json({
        message:'Autenticado',
        token: token,
        userId: user._id
    })
}

module.exports = createUserToken