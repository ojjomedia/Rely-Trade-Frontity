import React from 'react';
import { connect, styled } from 'frontity';
import TitleSection from '../Sidebar/section-title';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import Thumbnal from './thumbnal';
import Link from '../link';

const ProductLayout = ({ state, CategoriesTitle, libraries }) => {
    const data = state.source.get(state.router.link);
    // Get the html2react component.
    const Html2React = libraries.html2react.Component;
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
            <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={5000}
            centerMode={false}
            className=""
            containerClass="container-with-dots"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 3,
                partialVisibilityGutter: 40
                },
                mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
                },
                tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 2,
                partialVisibilityGutter: 30
                }
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            >
                {data.items.map((item, index) => {
                    const post = state.source.post[item.id];
                    const allCategories = state.source.category;
                    const categories = post.categories && post.categories.map((catId) => allCategories[catId]);
                    const Aut = state.source.author[post.author];
                    const Img = state.theme.thumbnal.showOnList;
                    return(
                        <div key={index}>
                            <ProdcutItem border={light}>
                                <ItemLink href={post.link}>
                                    <ItemImage>
                                        { Img === true && <Thumbnal classAdd="img-height" id={post.featured_media} /> }
                                    </ItemImage>
                                    <ItemContent color={text}> <Title><Html2React html={post.title.rendered} /></Title> </ItemContent>
                                </ItemLink>
                            </ProdcutItem>
                        </div>
                    )
                })}
            </Carousel> 
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
const ItemLink = styled(Link)`
    
    & :hover {
        text-decoration: none !important;
    }
`
const ProductBox = styled.div`
    margin-bottom: 50px;
    border: 1px solid;
    border-color: ${(props) => props.border};
`
const ProdcutItem = styled.div`
    height: 100%;
    /* border-left: 1px solid;
    border-right: 1px solid;
    border-color: ${(props) => props.border}; */
`
const ItemImage = styled.div`

`
const ItemContent = styled.div`
    font-size: 16px !important;
    margin: 10px 0px;
    color: ${(props) => props.color} !important;
`
const Title = styled.h3`
    font-size: 14px;
    text-align: center;
    margin-bottom: 20px;
`