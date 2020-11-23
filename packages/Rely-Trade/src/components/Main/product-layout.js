import React from 'react';
import { connect, styled } from 'frontity';
import TitleSection from '../Sidebar/section-title';
import ProductCarousel from '../Products/carousel';
import Link from '../link';

const ProductLayout = ({ state, CategoriesTitle, libraries, C_Link, SubCategory, Time }) => {
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
                        {SubCategory.map(([name, link]) => {
                            return(
                                <ItemLink href={link}><Item key={name} border={light}> {name} </Item></ItemLink>
                            )
                        })}
                    </List>
                </SubCat>
            </TilteSection>
            <ProductBox border={light}>
                <ProductCarousel CategoryLink={C_Link} autoPlayTime={Time} />
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