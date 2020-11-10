import React from 'react';
import { connect } from 'frontity';
import Top from './Top';
import Middle from './Middle';
import BottomMenu from './Bottom'

const Header = ({ state }) => {
    return (
        <div >
            <Top />
            <Middle />
            <BottomMenu />
        </div>
    )
}

export default connect(Header);
