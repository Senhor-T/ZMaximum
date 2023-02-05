import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import PaginationPages from '../../components/Pagination';


import { BsFillPlayFill } from 'react-icons/bs'

import './style.css'

import api from '../../api/api';
import {useFetchGenreTv} from '../../hooks/useFetchGenreTv'

const Series = () => {
  const [movies, setMovies] = useState([])
  const [moviesPerPage, setMoviesPerPage] = useState(80)
  const [currentPage,setCurrentPage] = useState(0)

  const pages = Math.ceil(movies.length/moviesPerPage)
  const startIndex = currentPage*moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex,endIndex)

  const {
    animacao,
    action,
    comedia,
    crime,
    documentario,
    drama,
    familia,
    misterio,
    reality,
    sciFiFantasy,
    talk,
    warPolitics,
    faroeste,
    kids
  } = useFetchGenreTv(api)

  const handleAll = async(e)=>{
    e.preventDefault()
    await api.get('/post/series/all')
    .then((response)=>{
      setMovies(response.data)
    })
  }

  const handleAnimacao = async(e)=>{
    e.preventDefault()
    setMovies(animacao)
  }

  const handleAcao = async(e)=>{
    e.preventDefault()
    setMovies(action)
  }

  const handleComedia = async(e)=>{
    e.preventDefault()
    setMovies(comedia)
  }

  const handleCrime = async(e)=>{
    e.preventDefault()
    setMovies(crime)
  }  

  const handleDocumentario= async(e)=>{
    e.preventDefault()
    setMovies(documentario)
  }
  const handleDrama= async(e)=>{
    e.preventDefault()
    setMovies(drama)
  }  

  const handleFamilia= async(e)=>{
    e.preventDefault()
    setMovies(familia)
  }
  
  const handleMisterio= async(e)=>{
    e.preventDefault()
    setMovies(misterio)
  }  

  const handleReality= async(e)=>{
    e.preventDefault()
    setMovies(reality)
  }  

  const handleSciFiFantasy= async(e)=>{
    e.preventDefault()
    setMovies(sciFiFantasy)
  }  

  const handleTalk= async(e)=>{
    e.preventDefault()
    setMovies(talk)
  }  

  const handleWarPolitics= async(e)=>{
    e.preventDefault()
    setMovies(warPolitics)
  }  

  const handleFaroeste= async(e)=>{
    e.preventDefault()
    setMovies(faroeste)
  }  

  const handleKids= async(e)=>{
    e.preventDefault()
    setMovies(kids)
  }  

  useEffect(()=>{
    const fetchData = async()=>{
      await api.get('/post/series/all')
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
            <Container>
                <Row>
                <h2><b>Séries</b></h2>
                <Dropdown as={ButtonGroup} id='dropdown'>              
                  <Button>Ordenar Por:</Button>
                  <Dropdown.Toggle split  id="dropdown-split-basic" />
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleAll}>Todos</Dropdown.Item>
                    <Dropdown.Item onClick={handleAnimacao}>Animação</Dropdown.Item>
                    <Dropdown.Item onClick={handleAcao}>Action</Dropdown.Item>
                    <Dropdown.Item onClick={handleComedia}>Comédia</Dropdown.Item>
                    <Dropdown.Item onClick={handleCrime}>Crime</Dropdown.Item>
                    <Dropdown.Item onClick={handleDocumentario}>Documentário</Dropdown.Item>
                    <Dropdown.Item onClick={handleDrama}>Drama</Dropdown.Item>
                    <Dropdown.Item onClick={handleFamilia}>Família</Dropdown.Item>
                    <Dropdown.Item onClick={handleMisterio}>Mistério</Dropdown.Item>
                    <Dropdown.Item onClick={handleReality}>Reality</Dropdown.Item>
                    <Dropdown.Item onClick={handleSciFiFantasy}>Sci-Fi & Fantasy</Dropdown.Item>
                    <Dropdown.Item onClick={handleTalk}>Talk</Dropdown.Item>
                    <Dropdown.Item onClick={handleWarPolitics}>War & Politics</Dropdown.Item>
                    <Dropdown.Item onClick={handleFaroeste}>Faroeste</Dropdown.Item>
                    <Dropdown.Item onClick={handleKids}>Kids</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
                    <Col className='conteudo-lista'>
                    
                    {currentMovies.map(movies=>(
                    <div id='div-poster' >
                      <Card key={movies.id} className="div-poster text-white">
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

export default Series