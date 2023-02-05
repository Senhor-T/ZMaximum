const router = require('express').Router()
const Posts = require('../models/Posts')
const PostController = require('../controllers/PostController')
const verifyToken = require('../helpers/verify-token')

const getToken = require('../helpers/get-token')
const getUserByToken = require('../helpers/get-user-by-token')

router.post('/create',verifyToken,PostController.create)

// Get post slug and shortid
router.get('/:shortid',async(req,res)=>{
    const posts = await Posts.findOneAndUpdate({shortid:req.params.shortid},{$inc:{views: 1}},{new:true}).exec()
    return res.status(200).json(posts)
})


// Get All
router.get('/recentes/post',PostController.getAll)

// Get All Movies
router.get('/movies/all',PostController.getAllMovies)

// Get All Series 
router.get('/series/all',PostController.getAllSeries)

// Get Popular
router.get('/popular/all',PostController.getPopular)

// Search By ShortId
router.get('/all/:shortid',PostController.searchByShortid)

// Create Header
router.post('/header/create',verifyToken,PostController.createHeaderHome)



// Get Header Home
router.get('/header/home',PostController.getHeaderHome)


// Genres List Movies
router.get('/genre/acao',PostController.getGenresMovieAcao)
router.get('/genre/aventura',PostController.getGenresMovieAventura)
router.get('/genre/animacao',PostController.getGenresMovieAnimacao)
router.get('/genre/comedia',PostController.getGenresMovieComedia)
router.get('/genre/crime',PostController.getGenresMovieCrime)
router.get('/genre/documentario',PostController.getGenresMovieDocumentario)
router.get('/genre/drama',PostController.getGenresMovieDrama)
router.get('/genre/familia',PostController.getGenresMovieFamilia)
router.get('/genre/fantasia',PostController.getGenresMovieFantasia)
router.get('/genre/historia',PostController.getGenresMovieHistoria)
router.get('/genre/terror',PostController.getGenresMovieTerror)
router.get('/genre/musica',PostController.getGenresMovieMusica)
router.get('/genre/misterio',PostController.getGenresMovieMisterio)
router.get('/genre/romance',PostController.getGenresMovieRomance)
router.get('/genre/ficcao-cientifica',PostController.getGenresMovieFiccaocientífica)
router.get('/genre/cinema-tv',PostController.getGenresMovieCinemaTV)
router.get('/genre/thriller',PostController.getGenresMovieThriller)
router.get('/genre/guerra',PostController.getGenresMovieGuerra)
router.get('/genre/faroeste',PostController.getGenresMovieFaroeste)

// Genres List Tv
router.get('/genre/tv/action',PostController.getGenresActionAdventure)
router.get('/genre/tv/animacao',PostController.getGenresAnimacao)
router.get('/genre/tv/comedia',PostController.getGenresComedia)
router.get('/genre/tv/crime',PostController.getGenresCrime)
router.get('/genre/tv/documentario',PostController.getGenresDocumentario)
router.get('/genre/tv/drama',PostController.getGenresDrama)
router.get('/genre/tv/familia',PostController.getGenresFamilia)
router.get('/genre/tv/misterio',PostController.getGenresMisterio)
router.get('/genre/tv/reality',PostController.getGenresReality)
router.get('/genre/tv/sci-fi-fantasy',PostController.getGenresSciFiFantasy)
router.get('/genre/tv/talk',PostController.getGenresTalk)
router.get('/genre/tv/war-politics',PostController.getGenresWarPolitics)
router.get('/genre/tv/faroeste',PostController.getGenresFaroeste)
router.get('/genre/tv/kids',PostController.getGenresKids)

module.exports = router