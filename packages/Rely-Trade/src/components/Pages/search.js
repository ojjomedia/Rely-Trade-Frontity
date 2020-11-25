import React from 'react';
import { connect, styled } from 'frontity';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Thumbnal from '../Main/thumbnal';
import SearchForm from '../Header/Middle/search-form';

const SearchPage = ({ state }) => {
    const data = state.source.get(state.router.link);
    const { text } = state.theme.colors;
    const { light } = state.theme.colors.gray;
    return data.isSearch ? (
        <>
            <ProduuctTitle className="shadow-sm">
                <Title> Search : {data.searchQuery} </Title>
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
                            <ItemImage>
                                { Img === true && <Thumbnal classAdd="img-height" id={post.featured_media} /> }
                            </ItemImage>
                            <ItemContent>
                                <ProdcutTitle color={text}> { post.title.rendered } </ProdcutTitle>
                            </ItemContent>
                        </ProdcutItem>
                    </Col>
                    )
                })}
                {data.items.length === 0 && data.isSearch && (
                <Error className="mt-5 mb-3">
                    <h3> Nothing Found...  😕</h3>
                    <p>Sorry, but nothing matched your search terms. Please try again with some different keywords.</p>
                    <div className="SearchForm_Box">
                        <SearchForm />
                    </div>
                </Error>
                )}
            </Row>
            </Container>
            </ProductBox>
        </>
    ) : <LoadContainer><Load src={LoadingImg} alt="Loading..." /></LoadContainer>;
}

export default connect(SearchPage);

const LoadContainer = styled.div`
  display: initial;
`
const Load = styled.img`
  margin: auto;
  width: 3%;
  margin-top: 17%;
  display: block;
`
const ProductBox = styled.div`
    margin-bottom: 50px;
    & .col {
      margin-bottom: 30px;
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
const ProdcutItem = styled.div`
    height: 100%;
    border: 1px solid;
    border-radius: 5px;
    overflow: auto;
    border-color: ${(props) => props.border};
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075) !important;
`
const ItemImage = styled.div`
`
const ItemContent = styled.div`
`
const ProdcutTitle = styled.h3`
    font-size: 14px;
    margin: 0px 0 20px 0;
    text-align: center;
`
const Error = styled(Col)`
    text-align: center;
    justify-items: center;
    display: grid;
    & h3 {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 7px;
    }
    & p {
        margin-bottom: 30px;
    }
    & .SearchForm_Box {
        width: 60%;
        @media (max-width: 450px){
            width: 100%;
        }
    }
`