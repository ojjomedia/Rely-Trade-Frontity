import React from 'react';
import { connect, styled } from 'frontity'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { RiMenuLine } from 'react-icons/ri';
import MobileNavBar from '../Mobile'
import Link from '../../link';

/*
 * Header Component
 * Link are passing to every components
 * Author: ojjomedia <info@ojjomedia.com>
 */
// Mobile Right Nav Bar Start
function openNav() {
    document.getElementById("mySidenav").classList.add("show");
    document.getElementById("content").style.display = "block";
    document.getElementById("mainbody").classList.add("mystyle");
  }
  function closeNav() {
    document.getElementById("mySidenav").classList.remove("show");
    document.getElementById("content").style.display = "none";
    document.getElementById("mainbody").classList.remove("mystyle");
  }
  // Mobile Right Nav Bar End
  

const BottomMenu = ({ state }) => {
    const menu = state.theme.menu;
    const { headerbtmbg } = state.theme.colors;
    const isThereLink = menu != null && menu.length > 0;
    return (
        <>
        <Section bg={headerbtmbg}>
            <Container>
                <Row>
                    <Col>
                        <Navbar variant="dark" expand="lg">
                        <Icon onClick={openNav} />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav>
                                {
                                    isThereLink && menu.map(([name, link]) => {
                                        const isCurrentPage = state.router.link === link;
                                        return(
                                            <Link key={name} href={link} className="nav-link" aria-current={isCurrentPage ? "active" : undefined}>{name}</Link>
                                        )
                                    })
                                }
                            </Nav>
                        </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </Section>
        <MobileNavBar closeNavBar={closeNav} />
        </>
    )
}

export default connect(BottomMenu);

const Section = styled.div`
    background-color: ${(props) => props.bg};
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
        color: rgba(255,255,255,.5) !important;
    }
    & .nav-link:last-child {
        border-right: 0px;
    }
    & .nav-link:hover, & [aria-current="active"], & :focus {
        background-color: #666 !important;
        color: #fff !important;
    }
`
const Icon = styled(RiMenuLine)`
    cursor: pointer;
    display: none;
    width: 42px;
    height: 42px;
    padding: 10px;
    background: #ddd;
    &:hover svg, &:focus svg {
        color: #7eb942 !important;
    }
    @media (max-width: 800px){
        display: block;
    }
`