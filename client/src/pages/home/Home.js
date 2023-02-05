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
  const [popular,setPopular] = useState([])
  const [header,setHeader] = useState([])

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

  useEffect(()=>{
    const fetchData = async ()=>{
      await api.get('/post/popular/all')
      .then((response)=>{
        setPopular(response.data)
      })
    }
    fetchData()
  },[])

  useEffect(()=>{
    const fetchData = async ()=>{
      await api.get('/post/header/home')
      .then((response)=>{
        setHeader(response.data)
      })
    }
    fetchData()
  },[])

  function descricaoS(x){
    return x.length
  }


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
                  {header && header.map((header)=>(
                  <div className='div-card'>
                    <Card className="card-body text-white">
                      <Card.Img src={header.backgroundImage} alt="Card image" />
                      <Card.ImgOverlay className='bg-card'>
                        <Card.Title>{header.titulo}</Card.Title>
                        <hr />
                        <Card.Text >
                          {header.descricao.substring(0,260)}
                          {descricaoS(header.descricao) > 258 ? ('...'):(<></>)}
                        </Card.Text>
                        <br />
                        <Card.Text><Button variant='light'><BsFillPlayFill /><NavLink to={`/${header.shortid}`}><b>Assistir</b></NavLink></Button></Card.Text>
                      </Card.ImgOverlay>
                      <Card.Body className='mobile-body-card'>
                        <Card.Title>{header.titulo}</Card.Title>
                        <Card.Text>
                          <Button variant='light'><BsFillPlayFill /><NavLink to={`/${header.shortid}`}><b>Assistir</b></NavLink></Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                  ))}
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
              {popular && popular.map((popular)=>(
              <Card key={popular._id} className="div-poster text-white">
                <div>
                <NavLink to={`/${popular.shortid}`}>
                  <Card.Img src={`https://www.themoviedb.org/t/p/w1280${popular.imagePost}`} alt="Card image" />
                  <Card.ImgOverlay className='body-poster-card'>
                  <br />
                    <br />
                    <Card.Title id='title'>{popular.titulo}</Card.Title>                   
                  </Card.ImgOverlay>
                  </NavLink>
                  </div>
                </Card>
              ))}
               
                
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