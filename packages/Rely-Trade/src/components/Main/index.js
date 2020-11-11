import React from 'react';
import { connect } from 'frontity';
import { Image } from 'react-bootstrap';
import Banner from '../../img/Banner.png';

const MainPage = ({ state }) => {
    return (
        <>
            <Image src={Banner} width="100%" />
        </>
    )
}

export default connect(MainPage);
