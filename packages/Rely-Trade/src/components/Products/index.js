import React from 'react';
import { connect, styled } from 'frontity';
import Thumbnal from '../Main/thumbnal';

const Products = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const Img = state.theme.thumbnal.showOnPost;
    // Get the html2react component.
    const Html2React = libraries.html2react.Component;
    return (
        <MainContainer>
            <PostImage>
                {page.format === "standard" &&
                    Img === true && <Thumbnal id={page.featured_media} />
                }
            </PostImage>
            <PostTitle>
               <Title> <Html2React html={page.title.rendered} /> </Title>
            </PostTitle>
            <Contnet>
               <Html2React html={page.content.rendered} />
            </Contnet>  
        </MainContainer>
    )
}

export default connect(Products);

const MainContainer = styled.div`

`
const PostImage = styled.div`
   width: 400px;
   margin-bottom: 15px;
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
const Contnet = styled.div`
   padding: 0 30px;
   margin: 15px 0px;
   & h1, h2, h3, h4, h5, h6, p {
      word-break: break-word;
   }
   & h1 {
      font-size: 22px;
      font-weight: 600;
   }
   & h2 {
      font-size: 22px;
      font-weight: 600;
   }
   & h3 {
      font-size: 20px;
      font-weight: 600;
   }
   & h4 {
      font-size: 18px;
      font-weight: 600;
   }
   & h5 {
      font-size: 16px;
      font-weight: 600;
   }
   & h6 {
      font-size: 14px;
      font-weight: 600;
   }
   @media (max-width: 450px){
      padding: 15px;
      margin: 0px;
   }
`