import React from 'react';
import Header from './Header';
import Title from './page-meta-title';
import { connect, Global, styled, Head } from 'frontity';
import Footer from './Footer';
import globalStyles from './styles/global-styles';
import { Col, Container, Row } from 'react-bootstrap';
import FontFaces from './styles/font-faces';
import Sidebar from './Sidebar';
import MainPage from './Main';
import Pages from './Pages';
import Page404 from './404';
import Products from './Products';
import SearchPage from './Pages/search';
import CategoriesPage from './Products/categories';
import Loading from './loading';

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);
    return(
      <>
        <Global styles={globalStyles(state.theme.colors)} />
        <FontFaces />
        {/* <Title /> */}
        <Head>
          <html lang="en" />
          <meta name="description" content={state.frontity.description} />
        </Head>
        <Header />
        <MainSection>
          <Container>
            <Row>
              <Col lg={3} className="p-0 left_bar">
                <Sidebar />
              </Col>
              <Col lg={9}>
                {data.isFetching && <Loading /> }
                {data.isArchive && data.isHome && <MainPage /> }
                {data.isPage && <Pages /> }
                {data.isCategory && <CategoriesPage /> }
                {data.isSearch && <SearchPage /> }
                {data.isPost && <Products /> }
                {data.isProducts && <Pages /> }
                {data.is404 && <Page404 /> }
              </Col>
              <Col lg={3} className="p-0 bottom_bar_mobile">
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </MainSection>
        <Footer />
      </>
    );
  };

export default connect(Root);
const MainSection = styled.main`
  & .bottom_bar_mobile{
    display: none;
  }
  @media (max-width: 800px){
    & .left_bar{
      display: none;
    }
    & .bottom_bar_mobile{
      display: block;
    }
  }
`

const LoadContainer = styled.div`
  display: initial;
`
const Load = styled.img`
  margin: auto;
  width: 3%;
  margin-top: 17%;
  display: block;
`
