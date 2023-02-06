const Posts = require('../models/Posts')
const shortid = require('shortid')
const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')
const ObjectId = require('mongoose').Types.ObjectId
const slugify = require('slugify')
const Header = require('../models/Header')

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

        const idExists = await Posts.findOne({idImdb:idImdb})

        if(idExists){
            res.status(422).json({message:'Conteúdo existente'})
            return
        }

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

    // Delete Post
    static async deletePost(req,res){
        const shortid = req.params.shortid

        const posts = await Posts.findOne({shortid:shortid})


        if(!posts){
            res.status(404).json({message:'Post Não Encontrado'})
            return
        }

        const token = getToken(req)
        const user = await getUserByToken(token)

        if(user.admin == true){
            await Posts.findByIdAndRemove(posts._id)
            res.status(200).json({message:'Excluido com sucesso'})
        }else{
            res.status(200).json({message:'Você não tem autotização'})
            return
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

    // Get Popular
    static async getPopular(req,res){
        const posts = await Posts.find().sort({'views':-1}).exec()
        return res.status(200).json(posts)
    }

    // Search By shortid
    static async searchByShortid(req,res){
        const shortid =  req.params.shortid

        const posts = await Posts.findOne({shortid:shortid}).exec()
        return res.status(200).json(posts)
    }


    // Create Header Home
    static async createHeaderHome(req,res){
        const {titulo,backgroundImage,shortid,descricao,header} = req.body

        const token = getToken(req)
        const user = await getUserByToken(token)

        const headerP = new Header({
            _id:ObjectId(),
            titulo,
            descricao,
            backgroundImage,
            shortid,
            header,
        })

        if(user.admin == true){
            try{
                const newHeader = await headerP.save()
                res.status(201).json({
                    message:'Conteudo adicionado',
                    newHeader: newHeader
                })
            }catch(error){
                res.status(500).json({message:error})
            }
        }else{
            res.status(500).json({message:'Você não pode criar conteúdo'})
        }
    }

    // Get Header Home
    static async getHeaderHome(req,res){
        const header = await Header.find({'header':'home'}).sort({'_id':-1})
        return res.status(200).json(header)
    }

    // Delete Header
    static async deleteHeader(req,res){
        const shortid = req.params.shortid

        const header = await Header.findOne({shortid:shortid})


        if(!header){
            res.status(404).json({message:'Post Não Encontrado'})
            return
        }

        const token = getToken(req)
        const user = await getUserByToken(token)

        if(user.admin == true){
            await Header.findByIdAndRemove(header._id)
            res.status(200).json({message:'Excluido com sucesso'})
        }else{
            res.status(200).json({message:'Você não tem autotização'})
            return
        }
    }


    // Get By Genres Movies
    static async getGenresMovieAcao(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Ação'}).sort('-createdAt')
        res.json(posts)
    }
    static async getGenresMovieAventura(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Aventura'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieAnimacao(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Animação'}).sort('-createdAt').sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieComedia(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Comédia'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieCrime(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Crime'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieDocumentario(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Documentário'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieDrama(req,res){
        const posts = await Posts.find({'categoria':'filme','categoria':'filme','genero.name':'Drama'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieFamilia(req,res){
        const posts = await Posts.find({'categoria':'filme','categoria':'filme','genero.name':'Família'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieFantasia(req,res){
        const posts = await Posts.find({'categoria':'filme','categoria':'filme','genero.name':'Fantasia'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieHistoria(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'História'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieTerror(req,res){
        const posts = await Posts.find({'categoria':'filme','categoria':'filme','genero.name':'Terror'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieMusica(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Música'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieMisterio(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Mistério'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieRomance(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Romance'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieFiccaocientífica(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Ficção científica'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieCinemaTV(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Cinema TV'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieThriller(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Thriller'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieGuerra(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Guerra'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresMovieFaroeste(req,res){
        const posts = await Posts.find({'categoria':'filme','genero.name':'Faroeste'}).sort('-createdAt').exec()
        res.json(posts)
    }


    // Get Genres By Tv
    static async getGenresActionAdventure(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Action & Adventure'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresAnimacao(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Animação'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresComedia(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Comédia'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresCrime(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Crime'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresDocumentario(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Documentário'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresDrama(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Drama'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresFamilia(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Família'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresMisterio(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Mistério'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresReality(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Reality'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresSciFiFantasy(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Sci-Fi & Fantasy'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresTalk(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Talk'}).sort('-createdAt').exec()
        res.json(posts)
    }

    static async getGenresWarPolitics(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'War & Politics'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresFaroeste(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Faroeste'}).sort('-createdAt').exec()
        res.json(posts)
    }
    static async getGenresKids(req,res){
        const posts = await
         Posts.find({
            'categoria':'serie','genero.name':'Kids'}).sort('-createdAt').exec()
        res.json(posts)
    }

}