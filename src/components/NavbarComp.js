import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    BrowserRouter as Router,
    Switch,
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
import Therapists from './Therapists';
import logo from './ichthus_cross.jpg';

export default class NavbarComp extends Component {
    render() {
        return(
            <Router>
                <div>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} to="/home"><img src={logo} height={30} width ={30}alt="logo"/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/who"}>Who is a Christian?</Nav.Link>
                            <Nav.Link as={Link} to={"/hoax"}>Isn't Christianity a Hoax?</Nav.Link>
                            <Nav.Link as={Link} to={"/why"}>What Does this Have to Do with Me?</Nav.Link>
                            <Nav.Link as={Link} to={"/questions"}>Common Questions</Nav.Link>
                            <Nav.Link as={Link} to={"/devotion"}>Devotion</Nav.Link>
                            <Nav.Link as={Link} to={"/prayer"}>Prayer</Nav.Link>
                            <Nav.Link as={Link} to={"/gallery"}>Gallery</Nav.Link>
                            <Nav.Link as={Link} to={"/chat"}>Hmu</Nav.Link>
                            <Nav.Link as={Link} to={"/surprise"}>Click Here for a Surprise!</Nav.Link>
                            <Nav.Link as={Link} to={"/bible"}>Da Bible</Nav.Link>
                            <Nav.Link as={Link} to={"/therapy"}>Christian... Therapy?</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
    
                </div>
                <div>
                    <Switch>
                        <Route path="/">
                            <Home/>
                        </Route>
                        <Route path="/who">
                            <Who/>
                        </Route>
                        <Route path="/hoax">
                            <Hoax/>
                        </Route>
                        <Route path="/why">
                            <Why />
                        </Route>
                        <Route path="/questions">
                            <Questions/>
                        </Route>
                        <Route path="/devotion">
                            <Devotion/>
                        </Route>
                        <Route path="/prayer">
                            <Prayer/>
                        </Route>
                        <Route path="/gallery">
                            <Gallery/>
                        </Route>
                        <Route path="/Chat">
                            <Chatroom/>
                        </Route>
                        <Route path="/surprise">
                            <Surprise/>
                        </Route>
                        <Route path="/bible">
                            <Bible/>
                        </Route>
                        <Route path="/therapy">
                            <Therapists/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}