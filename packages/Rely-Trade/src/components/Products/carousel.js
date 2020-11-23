import React from 'react';
import { connect, styled } from 'frontity';
import Thumbnal from '../Main/thumbnal';
import Link from '../link';
import { Container, Row, Col } from 'react-bootstrap';

const ProductCarousel = ({ state, libraries, CategoryId }) => {
    const data = state.source.get(state.router.link);
    const Html2React = libraries.html2react.Component;
    const { text } = state.theme.colors;
    const { light } = state.theme.colors.gray;
    return (
        <>
        <Container>
            <Row>
                {data.items.map((item, index) => {
                    const post = state.source.post[item.id];
                    const Img = state.theme.thumbnal.showOnList;
                    return post.categories[post.categories.length - 1] == CategoryId && (
                        <Col xs lg={3} className="pl-0" key={index}>
                            <ProdcutItem border={light}>
                                <ItemLink href={post.link}>
                                    <ItemImage>
                                        { Img === true && <Thumbnal classAdd="img-height" id={post.featured_media} /> }
                                    </ItemImage>
                                    
                                    <ItemContent color={text}> <Title><Html2React html={post.title.rendered} /></Title> </ItemContent>
                                </ItemLink>
                            </ProdcutItem>
                        </Col>
                    )
                })}
            </Row>
        </Container>
        </>
    )
}

export default connect(ProductCarousel);

const ItemLink = styled(Link)`
    
    & :hover {
        text-decoration: none !important;
    }
`
const ProdcutItem = styled.div`
    height: 100%;
`
const ItemImage = styled.div`

`
const ItemContent = styled.div`
    font-size: 16px !important;
    margin: 10px 0px;
    color: ${(props) => props.color} !important;
`
const Title = styled.h3`
    padding: 0px 10px;
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
`