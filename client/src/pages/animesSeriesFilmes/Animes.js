import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import PaginationPages from '../../components/Pagination';


import { BsFillPlayFill } from 'react-icons/bs'

import './style.css'

import axios from 'axios'


const Animes = () => {
  const [movies, setMovies] = useState([])
  const [moviesPerPage, setMoviesPerPage] = useState(10)
  const [currentPage,setCurrentPage] = useState(0)

  const pages = Math.ceil(movies.length/moviesPerPage)
  const startIndex = currentPage*moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex,endIndex)


  useEffect(()=>{
    const fetchData = async()=>{
      await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
        setMovies(response.data)
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
                
                  <div className='div-card'>
                    <Card className="card-body text-white">
                      <Card.Img src="https://cinemaemserie.com.br/wp-content/uploads/2022/05/Top-Gun-Maverick-Dolby-Header.jpg" alt="Card image" />
                      <Card.ImgOverlay className='bg-card'>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text >
                          This is a wider card with supporting text below as a natural lead-in
                          to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                      </Card.ImgOverlay>
                      <Card.Body className='mobile-body-card'>
                        <Card.Title>Top Gun: Maverick</Card.Title>
                        <Card.Text>
                          <Button variant='light'><BsFillPlayFill /> <b>Assistir</b></Button>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>               
              </div>
            </div>
                </Col>
            </Row>
            <br />
        <br />
            <Container>
                <Row>
                <h2><b>Animes</b></h2>
                    <Col className='conteudo-lista'>
                    
                    {currentMovies.map(movies=>(
                    <div id='div-poster' >
                      <Card key={movies.id} className="div-poster text-white">
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
                  </div>
                    ))}
                       
                    </Col>
                </Row>
                <PaginationPages pages={pages} currentPage={currentPage} setCurrentPage={setCurrentPage} /> 
            </Container>
         </Container>
    </div>
  )
}

export default Animes