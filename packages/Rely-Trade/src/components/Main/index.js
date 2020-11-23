import React from 'react';
import { connect } from 'frontity';
import HomeLayou from './home-layou';
import HomeSlider from '../Products/home-slider';

const MainPage = ({ state }) => {
    
    return (
        <>
            <HomeSlider />
            <HomeLayou />
        </>
    )
}

export default connect(MainPage);
