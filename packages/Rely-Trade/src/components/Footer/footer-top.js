import React from 'react';
import { connect, styled } from 'frontity';
import { Col, Container, Row } from 'react-bootstrap';
import { FaRocket } from 'react-icons/fa';
import { BsHeartHalf } from 'react-icons/bs';
import { AiFillGift } from 'react-icons/ai';

const FooterTop = ({ state }) => {
    const { primary, secondary, warning } = state.theme.colors;
    const { light, base } = state.theme.colors.gray;
    return (
        <MainContainer>
            <Container>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <Item border={light}>
                            <Row>
                                <Col xs={4} md={3} lg={3} className="d-flex pr-0">
                                    <FaRocket color={primary} />
                                </Col>
                                <Col xs lg={9} className="pl-0">
                                    <Title color={primary}>Free Shipping</Title>
                                    <SubTitle color={base}>On All Items</SubTitle>
                                </Col>
                            </Row>
                        </Item>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Item border={light}>
                            <Row>
                                <Col xs={4} md={3} lg={3} className="d-flex pr-0">
                                    <BsHeartHalf color={secondary} />
                                </Col>
                                <Col xs lg={9} className="pl-0">
                                    <Title color={secondary}>100% Satisfaction</Title>
                                    <SubTitle color={base}>Guaranteed</SubTitle>
                                </Col>
                            </Row>
                        </Item>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Item border={light}>
                            <Row>
                                <Col xs={4} md={3} lg={3} className="d-flex pr-0">
                                    <AiFillGift color={warning} />
                                </Col>
                                <Col xs lg={9} className="pl-0">
                                    <Title color={warning}>Great Daily Deals</Title>
                                    <SubTitle color={base}>Shop Now!</SubTitle>
                                </Col>
                            </Row>
                        </Item>
                    </Col>
                </Row>
            </Container>
        </MainContainer>
    )
}

export default connect(FooterTop);

const MainContainer = styled.div`
    margin-top: 35px;
    margin-bottom: 40px;
`
const Item = styled.div`
    border: 3px solid;
    border-color: ${(props) => props.border};
    padding: 15px 30px;
    margin-bottom: 25px;
    & svg {
        text-align: center;
        width: 50px;
        height: auto;
    }
`
const Title = styled.h2`
    font-size: 20px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0px;
    color: ${(props) => props.color};
`
const SubTitle = styled.h4`
    font-size: 19px;
    text-transform: uppercase;
    color: ${(props) => props.color}
`