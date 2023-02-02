const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Posts = require('./models/Posts')
const Users = require('./models/Users')
const ObjectId = require('mongoose').Types.ObjectId

const app = express()

const port = 8080

const UserRoutes = require('./routes/UserRoutes')
const PostRoutes = require('./routes/PostRoutes')

app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/ZMaximum').then(()=>{
    console.log('Conectado ao Banco de Dados')
}).catch((err)=>{
    console.log(err.message)
})

app.use('/user',UserRoutes)
app.use('/post',PostRoutes)

app.listen(port,()=>{
    console.log(`Conectado na porta ${port}`)
})