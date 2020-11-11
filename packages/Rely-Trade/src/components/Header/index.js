import React from 'react';
import { connect, styled } from 'frontity';
import Top from './Top';
import Middle from './Middle';
import BottomMenu from './Bottom'

const Header = ({ state }) => {
    return (
        <MainSection>
            <Top />
            <Middle />
            <BottomMenu />
        </MainSection>
    )
}

export default connect(Header);

const MainSection = styled.div`
    margin-bottom: 35px;
`