import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

import { NavLink, Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

import { BsFillPlayFill } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import {FaMinus} from 'react-icons/fa'

import './Single.css'
import api from '../../api/api';

import Moment from 'moment'

import { Context } from '../../context/UserContext';

const Single = () => {
    const { shortid } = useParams()

    const [post, setPost] = useState([])
    const [genre, setGenero] = useState([])
    const [fav,setFav] = useState(false)

    const [titulo,setTitulo] = useState('')
    const [imagePost,setImagePost] = useState('')
    const [id_fav,setIdFav] = useState('')
    const [Sshortid,setSShortid] = useState('')

    console.log(Sshortid)

    const [token] = useState(localStorage.getItem('token') || '')
    const { authenticated } = useContext(Context)

    const [user, setUser] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            await api.get('/user/checkuser', {
                headers: {
                    Authorization: `Bearer ${JSON.parse(token)}`,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true
                },
            })
                .then((response) => {
                    setUser(response.data)
                })
        }
        fetchData()
    }, [token])

    useEffect(() => {
        const fetchData = async () => {
            try{
           const post =  await api.get(`/post/${shortid}`)
                
                    setPost(post.data)
                    setGenero(post.data.genero)

                    setTitulo(post.data.titulo)
                    setImagePost(post.data.imagePost)
                    setIdFav(post.data.shortid)
                    
            if(token){
                const favPost = await api.get(`/user/get-favorites/${post.data.shortid}`)
            .then((response)=>{
                setFav(response.data)
            }) 
            }
            }catch(error){console.log(error)}
        }
        fetchData()
    }, [])


    async function addFavorite(movie){
        const data = await api
    .patch('/user/add-favorite',movie,{
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
    })
    .then(async (response) => {
        console.log(response.data)
      })
    }

    async function removeFavorite(movie){
        const data = await api
    .patch(`/user/remove-favorite/${shortid}`,{
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
    })
    .then(async (response) => {
        console.log(response.data)
      })
    }


    const handleRemove = async (e) =>{
        e.preventDefault()
        const movie = {
            shortid
        }
        removeFavorite(movie)
        setFav(false)
    }
   
    const handleAdd = async (e) =>{
        e.preventDefault()
        const movie = {
            titulo,
            imagePost,
            id_fav,
        }
        addFavorite(movie)
        setFav(true)
    }


    function voteNumber(x) {
        return Number.parseFloat(x).toFixed(1);
    }

    var data = Moment(post.data, "YYYY/MM/DD");

    
    return (
        <div>
            <br />
            <br />
            <br />
            {post && (


                <Container className='container-home'>
                    <Row id='row-single' style={{
                        backgroundImage: `url(https://www.themoviedb.org/t/p/w1280${post.backgroundImage})`,
                        backgroundSize: '100% 100%',
                        backgroundRepeat: 'no-repeat',
                    }}>

                    </Row>

                    <Col className='col-img-poster' lg={10} sm={10} xs={10}>
                        <img src={`https://www.themoviedb.org/t/p/w1280${post.imagePost}`} alt="Card image" />


                    </Col>
                    <Col className='col-info-mobile'>
                        <h3>{post.titulo}</h3>
                        <p>{data.format("DD/MM/YYYY")}</p>
                        <ul>
                            {genre.map((genero, index) => (
                                <div>
                                    <li key={index}>
                                        {genero.name}
                                    </li>
                                </div>
                            ))}

                        </ul>

                        <div class="grade">
                            <br />
                            <br />
                            {!authenticated ?
                             (<></>)
                            :(<>
                            
                            {fav == false ?
                                (<><><form onSubmit={handleAdd}>
                                <Button type='submit' variant='light'><AiFillHeart /> <b>Favoritos</b></Button>
                                </form></></>):
                                (<>
                                <form onSubmit={handleRemove}>
                                <Button type='submit' variant='light'><FaMinus /> <b>Remover</b></Button>
                                </form>
                                </>)}
                            
                            </>)}
                            
                            
                            {post.nota <=3 ? (
                                <div className={`grade-circle red`}>
                                   <div className="grade-percentage">
                                       <p>{voteNumber(post.nota)}<span></span></p>
                                   </div>
                               </div>
                            ):
                            (<div className={`grade-circle ${post.nota < 7 ?
                                     ('yellow'):('green')}`}>
                                    <div className="grade-percentage">
                                        <p>{voteNumber(post.nota)}<span></span></p>
                                    </div>
                                </div>)}
                                
                                
                            

                        </div>
                        <br />
                        <div id='sinopse'>
                            <h5>Sinopse</h5>
                            <p>{post.descricao}</p>
                        </div>
                    </Col>
                    <Row>
                        <Col>
                            <br />
                            <hr />
                            <iframe width="100%" height="460" src={`https://embed.warezcdn.net/${post.categoria}/${post.idImdb}`} frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;"
                                allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Container>
            )}
        </div>
    )
}

export default Single