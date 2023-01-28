import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { NavLink, Link } from 'react-router-dom';

import { BsFillPlayFill } from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'

import './Single.css'

const Single = () => {
    return (
        <div>
            <br />
            <br />
            <br />
            <Container className='container-home'>
                <Row id='row-single' style={{
                    backgroundImage: 'url(https://www.themoviedb.org/t/p/w1000_and_h563_face/r9PkFnRUIthgBp2JZZzD380MWZy.jpg)',
                    backgroundSize: '100% 100%',
                    backgroundRepeat: 'no-repeat',
                }}>

                </Row>

                <Col className='col-img-poster' lg={10} sm={10} xs={10}>
                    <img src="https://cinewestside.com.br/img/filmes/f597.jpeg" alt="Card image" />

                    {/* <Col lg={8} sm={8} xs={8} className='col-info'>
                        <h3>Gato de Botas: 2</h3>
                        <p>05/01/2023</p>
                        <ul>
                            <li>Animação, Ação, Aventura, Comédia, Família, Fantasia
                            </li>
                        </ul>
                        
                        <div class="grade">
                        <Button variant='light'><BsFillPlayFill /> <b>Trailer</b></Button>
                            <div class="grade-circle green">
                                <div class="grade-percentage">
                                    <p>90<span>%</span></p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div id='sinopse'>
                            <h5>Sinopse</h5>
                            <p>O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele queimou oito de suas nove vidas, deixando-o com apenas uma vida restante. Gato parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.</p>
                        </div>

                    </Col> */}
                    
                </Col>
                <Col className='col-info-mobile'>
                    <h3>Gato de Botas: 2</h3>
                        <p>05/01/2023</p>
                        <ul>
                            <li>Animação, Ação, Aventura, Comédia, Família, Fantasia
                            </li>
                        </ul>
                        
                        <div class="grade">
                        <Button variant='light'><BsFillPlayFill /> <b>Trailer</b></Button>
                        <br />
                        <br />
                        <Button variant='light'><AiFillHeart /> <b>Favoritos</b></Button>
                            <div class="grade-circle green">
                                <div class="grade-percentage">
                                    <p>90<span>%</span></p>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div id='sinopse'>
                            <h5>Sinopse</h5>
                            <p>O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele queimou oito de suas nove vidas, deixando-o com apenas uma vida restante. Gato parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.</p>
                        </div>
                    </Col>
            </Container>
        </div>
    )
}

export default Single