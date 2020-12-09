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
        <Container className="pr-0">
            <RowBody>
                {data.items.map((item, index) => {
                    const post = state.source.post[item.id];
                    const Img = state.theme.thumbnal.showOnList;
                    return post.categories.find(element => element == CategoryId) == CategoryId && (
                        <Col xs={12} md={6} lg={3} className="pl-0 mb-4" key={index}>
                            <ProdcutItem border={light}>
                                <ItemLink href={post.link}>
                                    <ItemImage>
                                        { Img === true && <Thumbnal classAdd="img-height" id={post.featured_media} /> }
                                    </ItemImage>
                                    <ItemContent color={text}>
                                        <Title> <Html2React html={post.title.rendered} /> </Title>
                                    </ItemContent>
                                </ItemLink>
                            </ProdcutItem>
                        </Col>
                    )
                })}
            </RowBody>
        </Container>
    )
}

export default connect(ProductCarousel);
const RowBody = styled(Row)`
    @media (max-width: 450px){
      width: 100%;
   }
`
const ItemLink = styled(Link)`
    
    & :hover {
        text-decoration: none !important;
    }
`
const ProdcutItem = styled.div`
    height: 100%;
    border: 1px solid;
    border-radius: 5px;
    overflow: auto;
    border-color: #dddddd;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
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