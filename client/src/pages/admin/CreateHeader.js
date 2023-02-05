import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import api from '../../api/api';


const CreateHeader = () => {

    const [token] = useState(localStorage.getItem('token') || '')


    const [id, setId] = useState('')
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [backgroundImage,setBackgroundImage] = useState('')
    const [shortid,setShortid] = useState('')




    const handleSubmit = async (e) => {
        e.preventDefault()
        const shortidS = {
            id
        }
        console.log(shortidS.id)
        await api.get(`/post/${shortidS.id}`)
            .then((response) => {
                setTitulo(response.data.titulo)
                setDescricao(response.data.descricao)
                setShortid(response.data.shortid)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    async function createMovie(post) {
        const data = await api.post(`/post/header/create`, post, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        })
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.log(error)
                return error.response.data
            })
    }

    const handleCreate = async (e) => {
        e.preventDefault()
        const post = {
            titulo,
            descricao,
            shortid,
            backgroundImage,
            header:'home'
        }
        createMovie(post)
    }


    return (
        <div>
            <br />
            <br />
            <br />
            <Container className='container-home' id='create-form'>
                <Row>
                    <Col>
                        <Form onSubmit={handleSubmit} id='form-filme'>
                        <Form.Group className="mb-3">
                            <Form.Control type='text' placeholder='Id Filme' value={id} name={id} onChange={(e) => setId(e.target.value)} />
                            <br />
                            <Button variant='danger' type='submit' value='enviar'>Pesquisar</Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>

                    <Form onSubmit={handleCreate}>
                    <Form.Group className="mb-3">
                        <Form.Control type='text' name='titulo' placeholder='title' value={titulo}
                            onChange={(e) => setTitulo(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type='text' name='descricao' placeholder='sinopse' value={descricao}
                            onChange={(e) => setDescricao(e.target.value)} />
                    </Form.Group>
                   
                    <Form.Group className="mb-3">
                        <Form.Control type='text' name='backgroundImage' placeholder='backgroundImage'
                         
                            onChange={(e) => setBackgroundImage(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type='text' name='shortid' placeholder='shortid'
                         value={shortid}
                            onChange={(e) => setShortid(e.target.value)}
                            />
                    </Form.Group>
                   
                    <Button variant='danger' type='submit' value='enviar'>Criar</Button>
                    </Form>


                </Row>
            </Container>
        </div>
    )
}

export default CreateHeader