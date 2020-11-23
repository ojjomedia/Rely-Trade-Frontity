import React from 'react';
import { connect, styled } from 'frontity';
import { FiChevronsRight } from 'react-icons/fi';
import Link from '../link';

const Information = ({ state, libraries }) => {
    const Info = state.theme.information.list;
    const Html2React = libraries.html2react.Component;
    const isThereLink = Info != null && Info.length > 0;
    const { primary, text } = state.theme.colors;
    return (
        <>
            <Title>Information</Title>
            <List>
                {
                    isThereLink && Info.map(([name, link]) => {
                        const isCurrentPage = state.router.link === link;
                        return(
                            <ListItem key={name}>
                                <Link href={link} hover={primary} color={text} aria-current={isCurrentPage ? "active" : undefined}><FiChevronsRight /> <Html2React html={name} /> </Link>
                            </ListItem>
                        )
                    })
                }
            </List>
        </>
    )
}

export default connect(Information);

const Title = styled.h3`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    text-transform: uppercase;
`
const List = styled.ul`
    padding: 0px;
`
const ListItem = styled.li`
    font-size: 16px;
    list-style: none;
    font-weight: 500;
    margin-bottom: 10px;
`