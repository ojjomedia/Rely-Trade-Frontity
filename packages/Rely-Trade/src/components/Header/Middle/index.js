import React from 'react';
import { connect, styled } from 'frontity';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Logo from '../../../img/Mail_Logo.png';
import SearchForm from './search-form';
import { MdPhoneIphone } from 'react-icons/md';
import Link from '../../link';

const Middle = ({state }) => {
    const { primary } = state.theme.colors;
    return (
        <Section>
            <Container>
                <Row className="align-items-center">
                    <Col xs lg={3} className="pl-0">
                        <Link href="/">
                            <Image src={Logo} width="220" />
                        </Link>
                    </Col>
                    <Col xs lg={6}>
                        <SearchForm />
                    </Col>
                    <Col xs lg={3}>
                        <Main className="d-flex align-items-center float-right">
                            <PhoneIcon>
                                <MdPhoneIphone color={primary} />
                            </PhoneIcon>
                            <MainContent>
                                <Title>Hotline:</Title>
                                <PhoneContent>+880 1779120813<br/>
                                +880 1558993231</PhoneContent>
                            </MainContent>
                        </Main>
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default connect(Middle);

const Section = styled.div`
    padding: 20px 0px;
`
const Main = styled.div`

`
const PhoneIcon = styled.div`
    & svg{
        width: 52px;
        height: auto;
    }
`
const MainContent = styled.div`

`
const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: #666;
`
const PhoneContent = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0px;
    color: #666;
`