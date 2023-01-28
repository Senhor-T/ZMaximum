import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css'

import { NavLink, Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlinePlayCircle } from 'react-icons/ai'
import {BsFilm} from 'react-icons/bs'
import {RiMovie2Line} from 'react-icons/ri'
import { BsSearch } from 'react-icons/bs'

const Menu = () => {
    
    return (
        <div>



            <Row>
                <Col>
                    <Nav className="flex-column nav-content" >
                        <br />
                        <Nav.Link style={({ isActive }) => isActive ? {borderLeft:'3px solid orange'} : {}} as={NavLink} to="/">
                            <AiOutlineHome />
                        </Nav.Link>
                        <Nav.Link style={({ isActive }) => isActive ? {borderLeft:'3px solid orange'} : {}} as={NavLink} to="/filmes">
                            <BsFilm /> <h6>Filmes</h6>
                        </Nav.Link>
                        <Nav.Link style={({ isActive }) => isActive ? {borderLeft:'3px solid orange'} : {}} as={NavLink} to="/series">
                            <RiMovie2Line /> <h6>Séries</h6>
                        </Nav.Link>
                        <Nav.Link style={({ isActive }) => isActive ? {borderLeft:'3px solid orange'} : {}} as={NavLink} to="/animes">
                            <AiOutlinePlayCircle /> <h6>Animes</h6>
                        </Nav.Link>
                       
                    </Nav>
                </Col>
            </Row>
            <Navbar fixed="top" className='top-bar' style={{ backgroundColor: '#000' }} >
                <Container>
                <h3>zMaximum</h3>
                <Form className="d-flex" >
                <Button variant="outline-light" type="submit">
            <BsSearch />
      </Button>
            <Form.Control
              type="search"
              placeholder="Pesquise"
              className="me-2"
              aria-label="Search"
             
            />
           
      
            
          </Form>
                </Container>
            </Navbar>
            <Navbar className='nav-mobile-content' fixed="bottom" style={{ backgroundColor: '#000' }} >
                <Container>
                    <Nav.Link style={({ isActive }) => isActive ? {borderBottom:'3px solid orange '} : {}} as={NavLink} to="/">
                        <AiOutlineHome />
                    </Nav.Link>
                    <Nav.Link style={({ isActive }) => isActive ? {borderBottom:'3px solid orange '} : {}} as={NavLink} to="/filmes">
                        <BsFilm />
                    </Nav.Link>
                    <Nav.Link style={({ isActive }) => isActive ? {borderBottom:'3px solid orange '} : {}} as={NavLink} to="/series">
                        <RiMovie2Line />
                    </Nav.Link>
                    <Nav.Link style={({ isActive }) => isActive ? {borderBottom:'3px solid orange '} : {}} as={NavLink} to="/Animes">
                        <AiOutlinePlayCircle />
                    </Nav.Link>
                    
                </Container>
            </Navbar>

        </div>
    )
}

export default Menu