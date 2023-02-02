import React,{ useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/UserContext';
import api from '../../api/api';

const Profile = () => {

    const [user,setUser] = useState({})

    const [token] = useState(localStorage.getItem('token') || '')
    const { authenticated } = useContext(Context)

    useEffect(()=>{
        const fetchData = async ()=>{
            await api.get('/user/checkuser',{
                headers:{
                    Authorization:`Bearer ${JSON.parse(token)}`,
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": true
                },
            })
            .then((response)=>{
                setUser(response.data)
            }) 
        }
        fetchData()
    },[token])


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
                ):(<>
                {user && (
                     <div>
                        <h1>{user.username}</h1>
                        <li>
                        <NavLink to='/create/movies'>Criar Filmes</NavLink>
                        <NavLink to='/create/series'>Criar Series</NavLink>
                        <NavLink to='/create/animes'>Criar Animes</NavLink>
                        </li>
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