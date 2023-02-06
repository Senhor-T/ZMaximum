import React, { useEffect, useState } from 'react'
import { NavLink,useSearchParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import useFlashMessage from '../../hooks/UseFlashMessage';
import PaginationPages from '../../components/Pagination';
import { useNavigate } from 'react-router-dom';
import { useQuery } from "../../hooks/useQuery";
import api from '../../api/api';

const Search = () => {

    const [searchParams] = useSearchParams()
    const [searchPost,setSearchPost] = useState([])
    const query = useQuery();
    const search = query.get("q");

  const [movies, setMovies] = useState([])
  const [moviesPerPage, setMoviesPerPage] = useState(80)
  const [currentPage,setCurrentPage] = useState(0)

  const pages = Math.ceil(movies.length/moviesPerPage)
  const startIndex = currentPage*moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex,endIndex)

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
         await api.get(`/post/get/search?${searchParams}`)
        .then((response)=>{
            setMovies(response.data)
          
        })
       
      }catch(error){
        console.log(error)
        
      }
    }
    fetchData()
  },[searchParams])


  return (
    <div>
           <br />
            <br />
            <br />
            <Container className='container-home' id='create-form'>
                <Row>
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
    </div>
  )
}

export default Search