import React from 'react';
import { connect, styled } from 'frontity';
import TitleSection from '../Sidebar/section-title';
import { Col, Container, Image, Row } from 'react-bootstrap';
import ProductImg from '../../img/product_img.jpg';

const ProductLayout = ({ state, CategoriesTitle }) => {
    const { primary, text } = state.theme.colors;
    const { light } = state.theme.colors.gray;
    return (
        <MainContainer>
            <TilteSection border={light}>
                <TitleBox bg={primary}>
                    <TitleSection> {CategoriesTitle} </TitleSection>
                </TitleBox>
                <SubCat>
                    <List>
                        <Item border={light}>Safety Vest</Item>
                        <Item border={light}>Masks</Item>
                        <Item border={light}>Ear Protector</Item>
                        <Item border={light}>Safety Goggles</Item>
                    </List>
                </SubCat>
            </TilteSection>
            <ProductBox border={light}>
                <Container>
                    <Row>
                        <Col xs lg={3} className="pl-0">
                            <ProdcutItem border={light}>
                                <ItemImage>
                                    <Image src={ProductImg} width="100%" />
                                </ItemImage>
                                <ItemContent>
                                    <Title color={text}> Cras cursus nulla accum </Title>
                                </ItemContent>
                            </ProdcutItem>
                        </Col>
                        <Col xs lg={3}>
                            <ProdcutItem border={light}>
                                <ItemImage>
                                    <Image src={ProductImg} width="100%" />
                                </ItemImage>
                                <ItemContent>
                                    <Title color={text}> Cras cursus nulla accum </Title>
                                </ItemContent>
                            </ProdcutItem>
                        </Col>
                        <Col xs lg={3}>
                            <ProdcutItem border={light}>
                                <ItemImage>
                                    <Image src={ProductImg} width="100%" />
                                </ItemImage>
                                <ItemContent>
                                    <Title color={text}> Cras cursus nulla accum </Title>
                                </ItemContent>
                            </ProdcutItem>
                        </Col>
                        <Col xs lg={3} className="pr-0">
                            <ProdcutItem border={light}>
                                <ItemImage>
                                    <Image src={ProductImg} width="100%" />
                                </ItemImage>
                                <ItemContent>
                                    <Title color={text}> Cras cursus nulla accum </Title>
                                </ItemContent>
                            </ProdcutItem>
                        </Col>
                    </Row>
                </Container>
            </ProductBox>
        </MainContainer>
    )
}

export default connect(ProductLayout);

const MainContainer = styled.div`
    margin: 35px 0;
`
const TilteSection = styled.div`
    margin-bottom: 25px;
    display: block ruby;
    border: 1px solid;
    border-bottom: 3px solid #7eb942 !important;
    border-color: ${(props) => props.border};
`
const TitleBox = styled.div`
    & h2, h3, h4 {
        text-transform: uppercase;
        margin: 0px;
    }
`
const SubCat = styled.div`
    float: right;
    margin: 8px 0;
`
const List = styled.ul`

`
const Item = styled.li`
    list-style: none;
    float: left;
    padding: 0 15px;
    border-right: 1px solid;
    border-color: ${(props) => props.border};
    font-size: 14px;
    & :last-child {
        border-right: 0;
    }
    & :first-child {
        border-left: 1px solid;
        border-color: ${(props) => props.border};
    }
`
const ProductBox = styled.div`
    margin-bottom: 50px;
    border: 1px solid;
    border-color: ${(props) => props.border};
`
const ProdcutItem = styled.div`
    height: 100%;
    border-left: 1px solid;
    border-right: 1px solid;
    border-color: ${(props) => props.border};
`
const ItemImage = styled.div`

`
const ItemContent = styled.div`

`
const Title = styled.h3`
    font-size: 14px;
    text-align: center;
`