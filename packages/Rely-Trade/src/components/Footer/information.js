import React from 'react';
import { connect, styled } from 'frontity';
import { FiChevronsRight } from 'react-icons/fi'

const Information = () => {
    return (
        <>
            <Title>Information</Title>
            <List>
                <ListItem>
                    <FiChevronsRight /> About Us
                </ListItem>
                <ListItem>
                    <FiChevronsRight /> Contact Us
                </ListItem>
                <ListItem>
                    <FiChevronsRight /> Terms &amp; Condition
                </ListItem>
                <ListItem>
                    <FiChevronsRight /> Why Rely Trade
                </ListItem>
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