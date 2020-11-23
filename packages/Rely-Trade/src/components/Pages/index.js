import React from 'react';
import { connect, styled } from 'frontity';
import { Col, Container, Row } from 'react-bootstrap';
import Thumbnal from '../Main/thumbnal';
import Link from '../link';

const Pages = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const post = state.source.post;
    const page = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;
    const { primary, text } = state.theme.colors;
    const { light, lighter } = state.theme.colors.gray;
    return (
        <>
        {/* This Sechtion for all pages layout  */}
        {
        data.isPage && data.isPostType &&
            <MainSection>
                <PageTitle className="shadow-sm">
                  <Title> <Html2React html={page.title.rendered} /> </Title>
               </PageTitle>
                <PageContent>
                    {/* <Content> <Html2React html={ page.content.rendered } /> </Content> */}
                </PageContent>
            </MainSection>
        }

        {/* This Sechtion for product page layout  */}
        {
        data.isProducts && <ProductBox>
            <ProduuctTitle className="shadow-sm">
                <Title> <Html2React html={data.name} /> </Title>
            </ProduuctTitle>
            <ProductBox>
                  <Container>
                    <Row>
                    {data.items.map((item, index) => {
                        const post = state.source.post[item.id];
                        const Img = state.theme.thumbnal.showOnList;
                        return(
                        <Col xs lg={3} className="pl-0" key={index}>
                            <ProdcutItem border={light}>
                                <ItemLink href={post.link}>
                                    <ItemImage>
                                        { Img === true && <Thumbnal classAdd="img-height" id={post.featured_media} /> }
                                    </ItemImage>
                                    <ItemContent>
                                        <ProdcutTitle color={text}> { post.title.rendered } </ProdcutTitle>
                                    </ItemContent>
                                </ItemLink>
                            </ProdcutItem>
                        </Col>
                        )
                    })}
                    </Row>
                  </Container>
                  </ProductBox>
        </ProductBox>
        }
        </>
    )
}

export default connect(Pages);

const MainSection = styled.div`
    
`
const PageTitle = styled.div`
    padding: 20px;
    margin-bottom: 35px;
`
const Title = styled.h3`
   font-size: 25px;
   text-align: center;
   text-transform: uppercase;
   font-weight: 700;
   word-break: break-word;
   @media (max-width: 450px){
      font-size: 22px;
   }
`
const PageContent = styled.div`
   & p {
      margin-bottom: 10px;
   }
   & svg {
      font-size: 25px;
   }
`
const ProduuctTitle = styled.div`
    padding: 20px;
    margin-bottom: 35px;
    & h1 {
        font-size: 32px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
    }
`
const ProductBox = styled.div`
    margin-bottom: 50px;
    & .col {
      margin-bottom: 30px;
    }
`
const ProdcutItem = styled.div`
    height: 100%;
    border: 1px solid;
    border-radius: 5px;
    overflow: auto;
    border-color: ${(props) => props.border};
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
`
const ItemLink = styled(Link)`
    
    & :hover {
        text-decoration: none !important;
    }
`
const ItemImage = styled.div`

`
const ItemContent = styled.div`
    padding: 0px 10px;
`
const ProdcutTitle = styled.h3`
    font-size: 14px;
    margin: 0px 0 20px 0;
    text-align: center;
`