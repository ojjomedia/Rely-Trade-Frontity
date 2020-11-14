import React from 'react';
import { connect } from 'frontity';
import { Image } from 'react-bootstrap';
import Banner from '../../img/Banner.png';
import HomeLayou from './home-layou';

const MainPage = ({ state }) => {
    return (
        <>
            <Image src={Banner} width="100%" />
            <HomeLayou />
        </>
    )
}

export default connect(MainPage);
