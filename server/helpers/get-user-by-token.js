const jwt = require('jsonwebtoken')

const Users = require('../models/Users')

const getUserByToken = async (token) =>{
    if(!token){
        return res.status(401).json({message:'Acesso Não Autorizado'})
    }

    const decoded = jwt.verify(token,'d41d8cd98f00b204e9800998ecf8427ed41d8cd98f00b204e9800998ecf8427e')

    const userId = decoded.id
    const user = await Users.findOne({_id: userId})

    return user
}

module.exports = getUserByToken