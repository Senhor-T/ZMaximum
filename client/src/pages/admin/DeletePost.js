import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import useFlashMessage from '../../hooks/UseFlashMessage';
import api from '../../api/api';

const DeletePost = () => {
    const [id, setId] = useState('')

    const [token] = useState(localStorage.getItem('token') || '')
    const {setFlashMessage} = useFlashMessage()

    const handleRemove = async (e)=>{
        e.preventDefault()
        let msgType = 'success'
        const idS = {
            id
        }
        const data = await api.delete(`/post/delete/${idS.id}`,{
        headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
        },})
        .then((response)=>{
            setId('')
            return response.data
        })
        .catch((error)=>{
            console.log(error)
            msgType = 'error'
            return error.response.data
        })
        setFlashMessage(data.message, msgType)
    }


  return (
    <div>
            <br />
            <br />
            <br />
            <Container className='container-home' id='create-form'>
                <Row>
                    <Col>
                        <Form onSubmit={handleRemove}>
                        <Form.Group className="mb-3">
                            <Form.Control type='text' placeholder='Id Filme' value={id} name={id} onChange={(e) => setId(e.target.value)} />
                            <br />
                            <Button variant='danger' type='submit' value='enviar'>Excluir</Button>
                            </Form.Group>                     
                        </Form>
                    </Col>
                </Row>
            </Container>
    </div>
  )
}

export default DeletePost