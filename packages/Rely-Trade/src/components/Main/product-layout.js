import React from 'react';
import { connect, styled } from 'frontity';
import TitleSection from '../Sidebar/section-title';
import ProductCarousel from '../Products/carousel';
import Link from '../link';

const ProductLayout = ({ state, CategoriesTitle, Id, libraries, SubCategory }) => {
    const { primary, text } = state.theme.colors;
    const { light } = state.theme.colors.gray;
    const Html2React = libraries.html2react.Component;
    return (
        <MainContainer>
            <TilteSection border={light}>
                <TitleBox bg={primary}>
                    <TitleSection> <Html2React html={CategoriesTitle} /> </TitleSection>
                </TitleBox>
                <SubCat>
                    <List>
                        {SubCategory.map(([name, link]) => {
                            return(
                                <ItemLink key={name} href={link}><Item border={light}> {name} </Item></ItemLink>
                            )
                        })}
                    </List>
                </SubCat>
            </TilteSection>
            <ProductBox border={light}>
                <ProductCarousel CategoryId={Id} />
                <Bubtton href="/products" bg={primary} color={text}>View More</Bubtton>
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
    /* border: 1px solid; */
    padding: 0;
    /* border-color: ${(props) => props.border}; */
`
const Bubtton = styled(Link)`
    text-align: center !important;
    padding: 8px 20px;
    background: ${(props) => props.bg};
    font-size: 14px;
    font-weight: 600;
    align-content: center;
    display: grid;
    margin: 0 auto;
    width: 20%;
    color: #fff !important;
    & :hover {
        color: ${(props) => props.color} !important;
    }
`