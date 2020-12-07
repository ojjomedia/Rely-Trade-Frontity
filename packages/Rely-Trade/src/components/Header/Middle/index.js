import React from 'react';
import { connect, styled } from 'frontity';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Logo from '../../../img/Mail_Logo.png';
import SearchForm from './search-form';
import Link from '../../link';
import ContactInfo from './contact-info';

const Middle = ({ state }) => {
    return (
        <Section>
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} lg={3} className="pl-0">
                        <Brand href="/">
                            <Image src={Logo} width="220" />
                        </Brand>
                    </Col>
                    <Col xs={12} lg={6} className="search_are">
                        <SearchForm />
                    </Col>
                    <Col xs={12} lg={3} className="contact_info">
                        <ContactInfo />
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default connect(Middle);

const Section = styled.div`
    padding: 20px 0px;
    @media (max-width: 800px){
        & .search_are, .contact_info{
            display: none;
        }
    }
`
const Brand = styled(Link)`
    display: block;
    width: 100%;
    @media (max-width: 800px){
        text-align: center;
    }
`