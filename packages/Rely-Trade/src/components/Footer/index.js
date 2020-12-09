import React from 'react';
import { connect, styled } from 'frontity';
import { Col, Container, Row } from 'react-bootstrap';
import About from './About';
import MyAccount from './my-account';
import Information from './information';
import Contact from './contact';
import SocialIcon from '../Header/Social-icon';
import FooterTop from './footer-top';
import Link from '../link';

const Footer = ({ state }) => {
    const { primary, footer, footerBottomBg } = state.theme.colors;
    return (
        <>
        <FooterTop />
        <MainContainer bg={footer}>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={3} className="mb-4">
                        <About />
                        <SocialIcon />
                    </Col>
                    <Col xs={12} md={6} lg={5} className="mb-4">
                        <Row>
                            <Col xs={12} lg={6} className="fot-myacc">
                                <MyAccount />
                            </Col>
                            <Col xs={12} lg={6}>
                                <Information />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-4">
                        <Contact />
                    </Col>
                </Row>
            </Container>
            <Copyright bg={footerBottomBg}>
                <Container>
                    <Row>
                        <Col>
                            <Content color={primary}>
                                © Copyright 2020 <Link href="/">Rely Trade</Link>. All Rights Reserved. Developed by <a href="https://ojjomedia.com/" target="_blank">Ojjomedia</a>
                            </Content>
                        </Col>
                    </Row>
                </Container>
            </Copyright>
        </MainContainer>
        </>
    )
}

export default connect(Footer);

const MainContainer = styled.div`
    background-color: ${(props) => props.bg};
    padding: 30px 0px 0px 0px;
    margin-top: 35px;

    & .fot-myacc {
        border-left: 1px solid #dddddd;
        border-right: 1px solid #dddddd;
    }
    @media (max-width: 990px) {
        & .fot-myacc {
        border-left: 0px solid #dddddd;
        border-right: 0px solid #dddddd;
    }
    }
`
const Copyright = styled.div`
    background-color: ${(props) => props.bg};
    padding: 10px 0px;
`
const Content = styled.p`
    font-size: 14px;
    color: #444444;
    margin: 0px;

    & a {
        font-weight: 600;
        color: ${(props) => props.color} !important;
        & :hover {
            text-decoration: none;
        }
    }
`