const jwt = require('jsonwebtoken')
const getToken = require('./get-token')

const checkToken = (req,res,next)=>{
    if(!req.headers.authorization){
        return res.status(401).json({message:'Não autorizado'})
    }

    const token = getToken(req)

    if(!token){
        return res.status(401).json({message:'Não autorizado'})
    }

    try{
        const verified = jwt.verify(token,'d41d8cd98f00b204e9800998ecf8427ed41d8cd98f00b204e9800998ecf8427e')
            req.user = verified
            return next()
    }catch(error){
        return res.status(400).json({messatge:'Token inválido'})
    }

}

module.exports = checkToken