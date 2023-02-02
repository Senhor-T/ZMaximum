import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './Home.css'

import { NavLink, Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { BsFillPlayFill } from 'react-icons/bs'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from '../../api/api';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  };
  const settingsO = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  const [movies,setMovies] = useState([])
  const [series,setSeries] = useState([])

  useEffect(()=>{
    const fetchData = async ()=>{
      await api.get('/post/movies/all')
      .then((response)=>{
        setMovies(response.data)
      })
    }
    fetchData()
  },[])

  useEffect(()=>{
    const fetchData = async ()=>{
      await api.get('/post/series/all')
      .then((response)=>{
        setSeries(response.data)
      })
    }
    fetchData()
  },[])


  return (
    <div>
      <br />
      <br />
      <br />
      <Container className='container-home'>
        <Row>
          <Col>
            <div className='div-img'>
              <div className="slider">
                <Slider {...settings}>
                  <div className='div-card'>
                    <Card className="card-body text-white">
                      <Card.Img src="https://cinemaemserie.com.br/wp-content/uploads/2022/05/Top-Gun-Maverick-Dolby-Header.jpg" alt="Card image" />
                      <Card.ImgOverlay className='bg-card'>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text >
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </Card.Text>
                        <br />
                        <Card.Text><Button variant='light'><BsFillPlayFill /> <b>Assistir</b></Button></Card.Text>
                      </Card.ImgOverlay>
                      <Card.Body className='mobile-body-card'>
                        <Card.Title>Top Gun: Maverick</Card.Title>
                        <Card.Text>
                          <Button variant='light'><BsFillPlayFill /> <b>Assistir</b></Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  <div className='div-card'>
                    <Card className=" card-body text-white">
                      <Card.Img src="https://midias.correiobraziliense.com.br/_midias/jpg/2022/11/17/gato_de_botas_2_1-26868535.jpg" alt="Card image" />
                      <Card.ImgOverlay className='bg-card'>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text >
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                      </Card.ImgOverlay>

                      <Card.Body className='mobile-body-card'>
                        <Card.Title>Gato de Botas 2</Card.Title>
                        <Card.Text>
                          <Button variant='light'><BsFillPlayFill /> <b>Assistir</b></Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <Container>
          {/* Populares */}
          <Row>
            <Col>
              <h2><b>Populares</b></h2>
              <br />
              <Slider {...settingsO} className='slider-posts'>
              <Card className="div-poster text-white">
                <div>
                <NavLink to='/single'>
                  <Card.Img src="https://cinewestside.com.br/img/filmes/f597.jpeg" alt="Card image" />
                  <Card.ImgOverlay className='body-poster-card'>
                  <br />
                    <br />
                    <Card.Title id='title'>Gato de Botas 2</Card.Title>                   
                  </Card.ImgOverlay>
                  </NavLink>
                  </div>
                </Card>
              
               
                
              </Slider>
            </Col>
          </Row>
          <br />
          {/* Filmes */}
          <Row>
            <Col>
              <h2><b>Filmes</b></h2>
              <br />
              <Slider {...settingsO} className='slider-posts'>
            {movies && movies.map((movies) =>(

            
              <Card className="div-poster text-white">     
                <div>
                <NavLink to={`/${movies.shortid}`}>
                  <Card.Img src={`https://www.themoviedb.org/t/p/w1280${movies.imagePost}`} alt="Card image" />
                  <Card.ImgOverlay className='body-poster-card'>
                  <br />
                    <br />
                    <Card.Title id='title'>{movies.titulo}</Card.Title>                   
                  </Card.ImgOverlay>
                  </NavLink>
                  </div>
                </Card>
                 ))} 
              </Slider>
            </Col>
          </Row>
          <br />
          {/* Séries */}
          <Row>
            <Col>
              <h2><b>Séries</b></h2>
              <br />
              <Slider {...settingsO} className='slider-posts'>
            {series && series.map((serie)=>(
              <Card className="div-poster text-white">
                <div>
                <NavLink to={`/${serie.shortid}`}>
                  <Card.Img src={`https://www.themoviedb.org/t/p/w1280${serie.imagePost}`} alt="Card image" />
                  <Card.ImgOverlay className='body-poster-card'>
                  <br />
                    <br />
                    <Card.Title id='title'>{serie.titulo}</Card.Title>                   
                  </Card.ImgOverlay>
                  </NavLink>
                  </div>
                </Card>
                ))}
                
                
              </Slider>
            </Col>
          </Row>
        </Container>
      </Container>
      <br />
      <br />
    </div>

  )
}

export default Home