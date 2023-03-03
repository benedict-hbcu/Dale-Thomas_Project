import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'next/image';


import logo from './ichthus_cross.jpg';
   
export default function NavbarComp(){
    return(
            <div>
                <Navbar collapseOnSelect expand="xs" bg="dark" variant = "dark">
                    <Container>
                        <Navbar.Brand> < a href="/"> <Image src={logo} height={30} width={30}alt="logo"/></a></Navbar.Brand>  
                        <Navbar.Toggle aria-controls="responvise-navbar-nav"/>
                        <Navbar.Collapse id="responvise-navbar-nav">
                            <Nav class Name="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/prayerbin">prayer bin</Nav.Link>
                                <Nav.Link href="/prayerwall">prayer Wall </Nav.Link>
                                <Nav.Link href="/musicwall">Music Wall</Nav.Link>
                                <Nav.Link herf ="/wya">WYA?</Nav.Link>
                            </Nav>  
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </div>
    )
}