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

import './style.css'

import api from '../../api/api';
import {useFetchGenresMovies} from '../../hooks/fetchGenresMovies'


const Filmes = () => {
  const [movies, setMovies] = useState([])
  const [moviesPerPage, setMoviesPerPage] = useState(80)
  const [currentPage,setCurrentPage] = useState(0)

  const pages = Math.ceil(movies.length/moviesPerPage)
  const startIndex = currentPage*moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex,endIndex)

  const {
    genreAcao,
    genreAventura,
    genreAnimacao,
    genreComedia,
    genreCrime,
    genreDocumentario,
    genreDrama,
    genreFamilia,
    genreFantasia,
    genreHistoria,
    genreTerror,
    genreMusica,
    genreMisterio,
    genreRomance,
    genreFiccaocientífica,
    genreCinemaTV,
    genreThriller,
    genreGuerra,
    genreFaroeste
  } = useFetchGenresMovies(api)

  const handleAll = async(e)=>{
    e.preventDefault()
    await api.get('/post/movies/all')
    .then((response)=>{
      setMovies(response.data)
    })
  }
  
  const handleAcao = async(e)=>{
    e.preventDefault()
    setMovies(genreAcao)
  }

  const handleAventura = async(e)=>{
    e.preventDefault()
    setMovies(genreAventura)
  }

  const handleAnimacao = async(e)=>{
    e.preventDefault()
    setMovies(genreAnimacao)
  }

  const handleComedia = async(e)=>{
    e.preventDefault()
    setMovies(genreComedia)
  }

  const handleCrime = async(e)=>{
    e.preventDefault()
    setMovies(genreCrime)
  }

  const handleDocumentario = async(e)=>{
    e.preventDefault()
    setMovies(genreDocumentario)
  }

  const handleDrama = async(e)=>{
    e.preventDefault()
    setMovies(genreDrama)
  }

  const handleFamilia = async(e)=>{
    e.preventDefault()
    setMovies(genreFamilia)
  }

  const handleFantasia = async(e)=>{
    e.preventDefault()
    setMovies(genreFantasia)
  }

  const handleHistoria = async(e)=>{
    e.preventDefault()
    setMovies(genreHistoria)
  }

  const handleTerror = async(e)=>{
    e.preventDefault()
    setMovies(genreTerror)
  }

  const handleMusica = async(e)=>{
    e.preventDefault()
    setMovies(genreMusica)
  }

  const handleMisterio = async(e)=>{
    e.preventDefault()
    setMovies(genreMisterio)
  }

  const handleRomance = async(e)=>{
    e.preventDefault()
    setMovies(genreRomance)
  }

  const handleFiccaocientífica = async(e)=>{
    e.preventDefault()
    setMovies(genreFiccaocientífica)
  }

  const handleCinemaTV = async(e)=>{
    e.preventDefault()
    setMovies(genreCinemaTV)
  }

  const handleThriller = async(e)=>{
    e.preventDefault()
    setMovies(genreThriller)
  }

  const handleGuerra = async(e)=>{
    e.preventDefault()
    setMovies(genreGuerra)
  }

  const handleFaroeste = async(e)=>{
    e.preventDefault()
    setMovies(genreFaroeste)
  }

  useEffect(()=>{
    const fetchData = async()=>{
      await api.get('/post/movies/all')
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
                <h2><b>Filmes</b></h2>
                <br />
                <br />
                <Dropdown as={ButtonGroup} id='dropdown'>              
                  <Button>Ordenar Por:</Button>
                  <Dropdown.Toggle split  id="dropdown-split-basic" />
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={handleAll}>Todos</Dropdown.Item>
                    <Dropdown.Item onClick={handleAcao}>Ação</Dropdown.Item>
                    <Dropdown.Item onClick={handleAventura}>Aventura</Dropdown.Item>
                    <Dropdown.Item onClick={handleAnimacao}>Animação</Dropdown.Item>
                    <Dropdown.Item onClick={handleComedia}>Comedia</Dropdown.Item>
                    <Dropdown.Item onClick={handleCrime}>Crime</Dropdown.Item>
                    <Dropdown.Item onClick={handleDocumentario}>Documentário</Dropdown.Item>
                    <Dropdown.Item onClick={handleDrama}>Drama</Dropdown.Item>
                    <Dropdown.Item onClick={handleFamilia}>Família</Dropdown.Item>
                    <Dropdown.Item onClick={handleFantasia}>Fantasia</Dropdown.Item>
                    <Dropdown.Item onClick={handleHistoria}>História</Dropdown.Item>
                    <Dropdown.Item onClick={handleTerror}>Terror</Dropdown.Item>
                    <Dropdown.Item onClick={handleMusica}>Música</Dropdown.Item>
                    <Dropdown.Item onClick={handleMisterio}>Mistério</Dropdown.Item>
                    <Dropdown.Item onClick={handleRomance}>Romance</Dropdown.Item>
                    <Dropdown.Item onClick={handleFiccaocientífica}>Ficção-Científica</Dropdown.Item>
                    <Dropdown.Item onClick={handleCinemaTV}>Cinema-TV</Dropdown.Item>
                    <Dropdown.Item onClick={handleThriller}>Thriller</Dropdown.Item>
                    <Dropdown.Item onClick={handleGuerra}>Guerra</Dropdown.Item>
                    <Dropdown.Item onClick={handleFaroeste}>Faroeste</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
                <br />
                <br />
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

export default Filmes