import React from 'react';
import { connect, styled } from 'frontity'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const BottomMenu = () => {
    return (
        <Section className="bg-dark">
            <Container>
                <Row>
                    <Col>
                        <Navbar bg="dark" variant="dark">
                            <Nav>
                                <Nav.Link>Home</Nav.Link>
                                <Nav.Link>Products</Nav.Link>
                                <Nav.Link>Services</Nav.Link>
                                <Nav.Link>About Us</Nav.Link>
                                <Nav.Link>Contact Us</Nav.Link>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default connect(BottomMenu);

const Section = styled.div`
    padding: 0px;

    & .navbar  {
        padding: 0px;
    }
    & .navbar-nav {
        margin: 0 auto;
    }
    & .nav-link{
        font-size: 16px;
        font-weight: 600;
        padding: 13px 20px 15px 20px !important;
        border-right: 1px solid #666;
        text-transform: uppercase;
        transition: all ease-in-out .3s;
    }
    & .nav-link:last-child {
        border-right: 0px;
    }
    & .nav-link:hover {
        background-color: #666;
        color: #fff;
    }
`
