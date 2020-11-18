import React from 'react';
import { connect, styled } from 'frontity';
import { Image } from 'react-bootstrap';
import Banner from '../../img/Banner.png';
import HomeLayou from './home-layou';
import HomeSlider from '../Products/home-slider';

const MainPage = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    
    return (
        <>
            {/* <Image src={Banner} width="100%" />  */}
            <HomeSlider />
            <HomeLayou />
        </>
    )
}

export default connect(MainPage);

const PostBody = styled.div`

`
const PostTitle = styled.div`

`
const Title = styled.h2`
   font-size: 22px;
   font-weight: bold;
   padding: 0 30px;
   margin: 15px 0px;
   word-break: break-word;
   @media (max-width: 450px){
      font-size: 18px;
      padding: 0 20px 0 20px;
   }
`
const PostImage = styled.div`
   margin-bottom: 15px;
`