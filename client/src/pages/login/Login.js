import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'

import { useState } from 'react';

import { Context } from '../../context/UserContext';



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { login } = useContext(Context)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = {
            email,
            password
        }
        login(user)
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <Container className='container-home'>
                <Row >
                    <Col >
                        <Form className='body-form' onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" name={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" name={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" autocomplete="of" />
                            </Form.Group>
                            <div className='mb-3'>
                                <Button variant="danger" type="submit">
                                    Entrar
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login