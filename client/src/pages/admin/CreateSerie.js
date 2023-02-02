import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import api from '../../api/api';

const CreateSerie = () => {
    
    const [token] = useState(localStorage.getItem('token') || '')

    const [id, setId] = useState('')
    const [movie, setMovie] = useState({})
    const [titulo, setTitulo] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagePost, setImagePost] = useState('')
    const [idImdb, setIdImdb] = useState('')
    const [backgroundImage,setBackgroundImage] = useState('')
    const [nota,setNota] = useState('')
    const [data,setData] = useState('')
    const [genero, setGenero] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        const idS = {
            id
        }
        await axios.get(`https://api.themoviedb.org/3/tv/${idS.id}/external_ids?api_key=d795b4019ef0cbbc7042c3f7a07debcb&language=pt-BR`)
        .then((response)=>{
            setIdImdb(response.data.imdb_id)
        })
        await axios.get(`https://api.themoviedb.org/3/tv/${idS.id}?api_key=d795b4019ef0cbbc7042c3f7a07debcb&language=pt-BR`)
            .then((response) => {
                setMovie(response.data)
                setTitulo(response.data.name)
                setDescricao(response.data.overview)
                setImagePost(response.data.poster_path)
                setGenero(response.data.genres)
                setBackgroundImage(response.data.backdrop_path)
                setNota(response.data.vote_average)
                setData(response.data.last_air_date)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    async function createMovie(post) {
        const data = await api.post(`/post/create`, post, {
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
            imagePost,
            genero,
            idImdb,
            backgroundImage,
            nota,
            data,
            categoria:'serie'
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
                            <Form.Control type='text' placeholder='Id Serie' value={id} name={id} onChange={(e) => setId(e.target.value)} />
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
                            <Form.Control type='text' name='idImdb' placeholder='imdb' value={idImdb}
                            onChange={(e) => setIdImdb(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type='text' name='nota' placeholder='Nota' 
                        value={nota}
                            onChange={(e) => setNota(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type='text' name='backgroundImage' placeholder='backgroundImage'
                         value={backgroundImage}
                            onChange={(e) => setBackgroundImage(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type='text' name='data' placeholder='data'
                         value={data}
                            onChange={(e) => setData(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type='text' name='imagePost' placeholder='link da imagem'
                            value={imagePost}
                            onChange={(e) => setImagePost(e.target.value)} />
                    </Form.Group>
                    <Button variant='danger' type='submit' value='enviar'>Criar</Button>
                    </Form>
                </Row>
            </Container>
    </div>
  )
}

export default CreateSerie