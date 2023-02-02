const Posts = require('../models/Posts')
const shortid = require('shortid')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')
const ObjectId = require('mongoose').Types.ObjectId
const slugify = require('slugify')

module.exports = class PostController{
    static async create(req,res){
        const {titulo,
            descricao,
            idImdb,
            backgroundImage,
            nota,
            data,
            categoria,
            genero,
            imagePost,
            torrent,
        } = req.body
        
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
            categoria,
            idImdb,
            descricao,
            imagePost,
            backgroundImage,
            nota,
            data,
            torrent,
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

    // Get All

    static async getAll(req,res){
        const posts = await Posts.find().sort('-createdAt')
        res.status(200).json(posts)
    }

    // Get All Movies

    static async getAllMovies(req,res){
        const posts = await Posts.find({'categoria':'filme'}).sort('-createdAt')
        res.status(200).json(posts)
    }

    // Get All Series
    static async getAllSeries(req,res){
        const posts = await Posts.find({'categoria':'serie'}).sort('-createdAt')
        res.status(200).json(posts)
    }
    // Get By Genres

    static async getGenresMovieAcao(req,res){
        const posts = await Posts.find({'genero.name':'Ação'})
        res.json(posts)
    }
    static async getGenresMovieAventura(req,res){
        const posts = await Posts.find({'genero.name':'Aventura'}).exec()
        res.json(posts)
    }
    static async getGenresMovieAnimacao(req,res){
        const posts = await Posts.find({'genero.name':'Animação'}).exec()
        res.json(posts)
    }
    static async getGenresMovieComedia(req,res){
        const posts = await Posts.find({'genero.name':'Comédia'}).exec()
        res.json(posts)
    }
    static async getGenresMovieCrime(req,res){
        const posts = await Posts.find({'genero.name':'Crime'}).exec()
        res.json(posts)
    }
    static async getGenresMovieDocumentario(req,res){
        const posts = await Posts.find({'genero.name':'Documentário'}).exec()
        res.json(posts)
    }
    static async getGenresMovieDrama(req,res){
        const posts = await Posts.find({'genero.name':'Drama'}).exec()
        res.json(posts)
    }
    static async getGenresMovieFamilia(req,res){
        const posts = await Posts.find({'genero.name':'Família'}).exec()
        res.json(posts)
    }
    static async getGenresMovieFantasia(req,res){
        const posts = await Posts.find({'genero.name':'Fantasia'}).exec()
        res.json(posts)
    }
    static async getGenresMovieHistoria(req,res){
        const posts = await Posts.find({'genero.name':'História'}).exec()
        res.json(posts)
    }
    static async getGenresMovieTerror(req,res){
        const posts = await Posts.find({'genero.name':'Terror'}).exec()
        res.json(posts)
    }
    static async getGenresMovieMusica(req,res){
        const posts = await Posts.find({'genero.name':'Música'}).exec()
        res.json(posts)
    }
    static async getGenresMovieMisterio(req,res){
        const posts = await Posts.find({'genero.name':'Mistério'}).exec()
        res.json(posts)
    }
    static async getGenresMovieRomance(req,res){
        const posts = await Posts.find({'genero.name':'Romance'}).exec()
        res.json(posts)
    }
    static async getGenresMovieFiccaocientífica(req,res){
        const posts = await Posts.find({'genero.name':'Ficção científica'}).exec()
        res.json(posts)
    }
    static async getGenresMovieCinemaTV(req,res){
        const posts = await Posts.find({'genero.name':'Cinema TV'}).exec()
        res.json(posts)
    }
    static async getGenresMovieThriller(req,res){
        const posts = await Posts.find({'genero.name':'Thriller'}).exec()
        res.json(posts)
    }
    static async getGenresMovieGuerra(req,res){
        const posts = await Posts.find({'genero.name':'Guerra'}).exec()
        res.json(posts)
    }
    static async getGenresMovieFaroeste(req,res){
        const posts = await Posts.find({'genero.name':'Faroeste'}).exec()
        res.json(posts)
    }


}