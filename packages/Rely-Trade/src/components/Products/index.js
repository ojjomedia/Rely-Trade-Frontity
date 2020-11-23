import React from 'react';
import { connect, styled } from 'frontity';
import Thumbnal from '../Main/thumbnal';
import { Col, Container, Row } from 'react-bootstrap';
import Link from '../link';

const Products = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const Img = state.theme.thumbnal.showOnPost;
    // Get the html2react component.
    const Html2React = libraries.html2react.Component;
    const { primary, text } = state.theme.colors;
    return (
        <MainContainer>
            <Container>
               <Row className="align-items-center">
                  <Col xs lg={6}>
                     <PostImage>
                        {page.format === "standard" &&
                           Img === true && <Thumbnal id={page.featured_media} />
                        }
                     </PostImage>
                  </Col>
                  <Col xs lg={6}>
                     <PostTitle>
                        <Title> <Html2React html={page.title.rendered} /> </Title>
                     </PostTitle>
                     <Button href="/contact-us" bg={primary} color={text}>Contact Now</Button>
                  </Col>
                  <Col xs lg={12} className="mt-4">
                     <DescBar>
                        <DescBarTitle color={primary}>Description</DescBarTitle>
                     </DescBar>
                     <Contnet>
                        <Html2React html={page.content.rendered} />
                     </Contnet>  
                  </Col>
               </Row>
            </Container>
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
const Button  = styled(Link)`
   font-size: 16px;
   font-weight: 600;
   padding: 15px 30px;
   color: #fff !important;
   background: ${(props) => props.bg};
   border: none;
   text-transform: uppercase;
   transition: all ease-in-out .3s;

   & :hover {
   color: ${(props) => props.color} !important;
   }
`
const PostTitle = styled.div`

`
const DescBar = styled.div`
   padding: 10px;
   border-bottom: 1px solid #ddd;
   margin-bottom: 15px;
`
const DescBarTitle = styled.h2`
   font-size: 20px;
   font-weight: 700;
   text-transform: uppercase;
   color: ${(props) => props.primary} !important;
`
const Title = styled.h2`
   font-size: 28px;
   font-weight: bold;
   margin-bottom: 25px;
   word-break: break-word;
   @media (max-width: 450px){
      font-size: 18px;
      padding: 0 20px 0 20px;
   }
`
const Contnet = styled.div`
   padding: 0 20px;
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