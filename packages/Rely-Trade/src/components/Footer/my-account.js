import React from 'react';
import { connect, styled } from 'frontity';
import { FiChevronsRight } from 'react-icons/fi'

const MyAccount = () => {
    return (
        <>
            <Title>My Account</Title>
            <List>
                <ListItem>
                    <FiChevronsRight /> Products
                </ListItem>
                <ListItem>
                    <FiChevronsRight /> Services
                </ListItem>
                <ListItem>
                    <FiChevronsRight /> Shop
                </ListItem>
                <ListItem>
                    <FiChevronsRight /> Privacy Policy
                </ListItem>
            </List>
        </>
    )
}

export default connect(MyAccount);

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
    list-style: none;
    font-weight: 500;
    margin-bottom: 10px;
`