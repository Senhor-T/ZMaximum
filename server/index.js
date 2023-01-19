const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Posts = require('./models/Posts')
const Users = require('./models/Users')
const ObjectId = require('mongoose').Types.ObjectId

const app = express()

const port = 8080

app.use(express.json())
app.use(cors())
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/ZMaximum').then(()=>{
    console.log('Conectado ao Banco de Dados')
}).catch((err)=>{
    console.log(err.message)
})

app.get('/posts',async(req,res)=>{
    const posts = await Posts.find().exec()
    res.json(posts)
})

app.get('/users',async(req,res)=>{
    const users = await Users.find().exec()
    res.json(users)
})

app.post('/create/user',async (req,res)=>{
    await Users.create({
        _id: ObjectId(),
        name: req.body.name,
        password: req.body.password
    })
    res.json({message:'Criado com Sucesso'})
})

app.listen(port,()=>{
    console.log(`Conectado na porta ${port}`)
})