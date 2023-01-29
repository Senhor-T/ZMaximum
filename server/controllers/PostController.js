const Posts = require('../models/Posts')
const shortid = require('shortid')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')
const ObjectId = require('mongoose').Types.ObjectId
const slugify = require('slugify')

module.exports = class PostController{
    static async create(req,res){
        const {titulo,descricao,genero,imagePost} = req.body
        
        if (!titulo) {
            res.status(422).json({
                message: 'O titulo é obrigatório!'
            })
            return
        }

        if (!descricao) {
            res.status(422).json({
                message: 'A Descrição é obrigatória!'
            })
            return
        }

        if (!imagePost) {
            res.status(422).json({
                message: 'A imagem é obrigatória!'
            })
            return
        }

        const token = getToken(req)
        const user = await getUserByToken(token)

        let newSlug = req.body.titulo
        const slug = slugify(newSlug,{
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: true,
            locale: 'vi',
            trim: true
        })

        const post = new Posts({
            _id:ObjectId(),
            shortid: shortid.generate(),
            titulo,
            descricao,
            imagePost,
            slug: slug,
            genero,
            views: 0
        })
        if (user.admin == true){
            try{
                const newPost = await post.save()

                res.status(201).json({
                    message:'Conteudo adicionado',
                    newPost: newPost
                })
            }catch(error){
                res.status(500).json({message:error})
            }
        }else{
            res.status(500).json({message:'Você não pode criar conteúdo'})
        }
    }
}