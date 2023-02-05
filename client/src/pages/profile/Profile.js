import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Profile.css'

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/UserContext';
import api from '../../api/api';

import { AiOutlineStar } from 'react-icons/ai'

const Profile = () => {

    const [user, setUser] = useState([])
    const [movie,setMovie] = useState([])

    const [token] = useState(localStorage.getItem('token') || '')
    const { authenticated } = useContext(Context)

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
                    setMovie(response.data.favoritos)
                })
        }
        fetchData()
    }, [token])


    return (
        <div>
            <br />
            <br />
            <br />
            <Container className='container-home'>
                <Row>

                    <Col>
                        {!authenticated ? (
                            <h1>Faça Login</h1>
                        ) : (<>
                            {user && (
                                <div>
                                    <br />
                                    <div className='profile-div'>
                                        <img src='https://cdn.dribbble.com/users/6142/screenshots/5679189/media/052967c305a8f96a4b40b79ce5e61b0d.png' alt='profile photo' />
                                    </div>
                                    <h1>{user.username}</h1>
                                    {user.admin === true ? (
                                        <div>
                                            <li>
                                                <NavLink to='/create/movies'>Criar Filmes</NavLink>
                                                <NavLink to='/create/series'>Criar Series</NavLink>
                                            </li>
                                        </div>
                                    ) : (<></>)}
                                    
                                    <br />
                                    <br />
                                    <hr />
                                    <h2>Favoritos <AiOutlineStar /> </h2>
                                    <Col className='conteudo-lista'>
                                    {movie && movie.map((movie)=>(  
                                    <div id='div-poster' >
                                                                  
                                        <Card  className="div-poster text-white">
                                            <div>
                                                <NavLink to={`/${movie.id_fav}`}>
                                                    <Card.Img src={`https://www.themoviedb.org/t/p/w1280${movie.imagePost}`} alt="Card image" />
                                                    <Card.ImgOverlay className='body-poster-card'>
                                                        <br />
                                                        <br />                           
                                                        <Card.Title id='title'>{movie.titulo}</Card.Title>
                                                    </Card.ImgOverlay>
                                                </NavLink>
                                            </div>
                                        </Card>
                                        
                                    </div>
                                    ))}
                                    </Col>
                                </div>
                            )}
                        </>)}




                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile