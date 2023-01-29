const Users = require('../models/Users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const ObjectId = require('mongoose').Types.ObjectId

const createUserToken = require('../helpers/create-user-token')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')

module.exports = class UserController{
    // Function Registro
    static async register(req,res){
        const {username,email,password,confirmpassword} = req.body

        if(!username){
            res.status(422).json({message:'Insira o seu nome de usuário'})
            return
        }
        if(!email){
            res.status(422).json({message:'Insira um email válido'})
            return
        }
        if(!password){
            res.status(422).json({message:'Insira sua senha'})
            return
        }
        if(!confirmpassword){
            res.status(422).json({message:'Confirme sua senha'})
            return
        }

        if(password !== confirmpassword){
            res.status(422).json({message:'A senha e confirmação de senha devem ser iguais'})
            return
        }

        const emailExists = await Users.findOne({email:email})
        const userExists = await Users.findOne({username:username})

        if(emailExists){
            res.status(422).json({message:'Esse email já foi cadastrado, use outro.'})
            return
        }
        if(userExists){
            res.status(422).json({message:'Esse nome já existe, use outro.'})
            return
        }

        const salt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(password,salt)

        const user = new Users({
            _id: ObjectId(),
            username,
            email,
            password: passwordHash,   
        })

        try{
            const newUser = await user.save()
            await createUserToken(newUser,req,res)
        }catch(error){
            res.status(500).json({message:error})
        }
    }

    // Function Login

    static async login(req,res){
        const {email,password} = req.body

        if(!email){
            res.status(422).json({message:'Insira seu email'})
            return 
        }

        if(!password){
            res.status(422).json({message:'Insira sua senha'})
            return
        }

        const user = await Users.findOne({email:email})

        if(!user){
            res.status(422).json({message:'Usuário Não Encontrado'})
            return
        }

        const checkPassword = await bcrypt.compare(password,user.password)
        if(!checkPassword){
            res.status(422).json({message:'Senha incorreta'})
            return
        }
        await createUserToken(user,req,res)
    }

    // Function Checar usuário

    static async checkUser(req,res){
        let currentUser

        if(req.headers.authorization){
            const token = getToken(req)
            const decoded = jwt.verify(token, 'd41d8cd98f00b204e9800998ecf8427ed41d8cd98f00b204e9800998ecf8427e')
            
            currentUser = await Users.findById(decoded.id)
            currentUser.password = undefined
        }else{
            currentUser = null
        }
        res.status(200).send(currentUser)
    }

    // Function Checar Usuário pela Id

    static async getUserById(req,res){
        const id = req.params.id
        if(!id.match(/^[0-9a-fA-F]{24}$/)){
            res.status(422).json({"message":" User not found!"})
            return
        }

        const user = await Users.findById(id).select("-password")

        res.status(200).json({user})
    }
}