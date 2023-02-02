import React from 'react'
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

import './Single.css'
import api from '../../api/api';

import Moment from 'moment'

const Single = () => {
    const { shortid } = useParams()

    const [post, setPost] = useState([])
    const [genre, setGenero] = useState([])
    


    useEffect(() => {
        const fetchData = async () => {
            await api.get(`/post/${shortid}`)
                .then((response) => {
                    setPost(response.data)
                    setGenero(response.data.genero)

                })
                
                  
        }
        fetchData()
    }, [])

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
                            <Button variant='light'><AiFillHeart /> <b>Favoritos</b></Button>
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