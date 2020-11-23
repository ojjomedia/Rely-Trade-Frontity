import React from 'react';
import { connect, styled } from 'frontity';
import Link from '../link';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaList } from 'react-icons/fa';

const Categories = ({ state }) => {
    const category = state.theme.categorires.list;
    const isThereLink = category != null && category.length > 0;
    const { primary, text } = state.theme.colors;
    const { lighttext, light } = state.theme.colors.gray;
    return (
        <MainBody>
            <TitleSection bg={primary}>
                <TitleIcon>
                    <FaList color={lighttext} />
                </TitleIcon>
                <Title color={lighttext}>Categories</Title>
            </TitleSection>
            <Body color={light}>
                <BodyList>
                    
                        {
                            isThereLink && category.map(([name, link]) => {
                                const isCurrentPage = state.router.link === link;
                                return(
                                    <BodyItem key={name}>
                                        <ItemLink href={link} hover={primary} bg={light} color={text} aria-current={isCurrentPage ? "category" : undefined}>{name} <span className="float-right"> <MdKeyboardArrowRight /> </span></ItemLink>
                                    </BodyItem>
                                )
                            })
                        }
                </BodyList>
            </Body>
        </MainBody>
    )
}

export default connect(Categories);

const MainBody = styled.div`
    margin-bottom: 35px;
`
const TitleSection = styled.div`
    display: flex;
    width: 100%;
    background-color: ${(props) => props.bg};
`
const TitleIcon = styled.div`
    padding: 6px 18px;
    display: inherit;
    background: rgba(0, 0, 0, 0.19);
    & svg {
        width: 22px;
        height: auto;
    }
`
const Title = styled.h3`
    color: ${(props) => props.color};
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 10px 15px;
`
const Body = styled.div`
    border: 1px solid;
    border-color: ${(props) => props.color};
`
const BodyList = styled.ul`
    padding: 0px;
`
const BodyItem = styled.li`
    list-style: none;
`
const ItemLink = styled(Link)`
    font-size: 16px;
    font-weight: 500;
    line-height: 42px;
    display: block;
    padding: 0 15px;
    text-transform: uppercase;
    color: ${(props) => props.color} !important;

    & :hover, & [aria-current="category"], & :focus {
        text-decoration: none;
        background-color: ${(props) => props.bg};
        color: ${(props) => props.hover} !important;
    }
`