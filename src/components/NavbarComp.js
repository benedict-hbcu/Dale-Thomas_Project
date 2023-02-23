import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";
import Who from "./Who";
import Why from "./Why";
import Hoax from "./Hoax";
import Questions from "./Questions";
import Devotion from "./Devotion";
import Prayer from './Prayer';
import Gallery from './Gallery';
import Chatroom from './Chatroom';
import Surprise from './Surprise';
import Bible from './Bible';
import Lifestyle from './Lifestyle';
import logo from './ichthus_cross.jpg';

export default class NavbarComp extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand as={Link} to="/"><img src={logo} height={30} width ={30}alt="logo"/></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link as={Link} to={"/"} >Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/who"} class="text-warning">Who are Christians?</Nav.Link>
                                    <Nav.Link as={Link} to={"/hoax"} > Is It a Hoax?</Nav.Link>
                                    <Nav.Link as={Link} to={"/why"}>Christianity &  Me?</Nav.Link>
                                    <Nav.Link as={Link} to={"/questions"}>Common Questions</Nav.Link>
                                    <Nav.Link as={Link} to={"/devotion"}>Devotion</Nav.Link>
                                    <Nav.Link as={Link} to={"/prayer"}>Prayer</Nav.Link>
                                    <Nav.Link as={Link} to={"/gallery"}>Gallery</Nav.Link>
                                    <Nav.Link as={Link} to={"/chat"}>Hmu</Nav.Link>
                                    <Nav.Link as={Link} to={"/surprise"}>Click  for Surprise</Nav.Link>
                                    <Nav.Link as={Link} to={"/bible"}>The Bible</Nav.Link>
                                    <Nav.Link as={Link} to={"/lifestyle"}>Lifestyle</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
    
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="who" element={<Who/>}/>
                        <Route path="hoax" element={<Hoax/>}/>
                        <Route path="why" element={<Why/>}/>
                        <Route path="questions" element={<Questions/>}/>
                        <Route path="devotion" element={<Devotion/>}/>
                        <Route path="prayer" element={<Prayer/>}/>
                        <Route path="gallery" element={<Gallery/>}/>
                        <Route path="chat" element={<Chatroom/>}/>
                        <Route path="surprise" element={<Surprise/>}/>
                        <Route path="bible" element={<Bible/>}/>
                        <Route path="lifestyle" element={<Lifestyle/>}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}