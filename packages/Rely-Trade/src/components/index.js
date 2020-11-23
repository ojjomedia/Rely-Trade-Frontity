import React from 'react';
import Header from './Header';
import { connect, Global, styled } from 'frontity';
import Footer from './Footer';
import globalStyles from './styles/global-styles';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MainPage from './Main';
import Pages from './Pages';
import Page404 from './404';
import Products from './Products';
import LoadingImg from '../img/Loading.gif';
import SearchPage from './Pages/search';
import CategoriesPage from './Products/categories';

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);
    return data.isReady ? (
      <>
        <Global styles={globalStyles(state.theme.colors)} />
        <Header />
        <main>
          <Container>
            <Row>
              <Col lg={3} className="p-0">
                <Sidebar />
              </Col>
              <Col lg={9}>
                {data.isArchive && data.isHome && <MainPage /> }
                {data.isPage && <Pages /> }
                {data.isCategory && <CategoriesPage /> }
                {data.isSearch && <SearchPage /> }
                {data.isPost && <Products /> }
                {data.isProducts && <Pages /> }
                {data.is404 && <Page404 /> }
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </>
    ) : <LoadContainer><Load src={LoadingImg} alt="Loading..." /></LoadContainer>;
  };

export default connect(Root);

const LoadContainer = styled.div`
  display: initial;
`
const Load = styled.img`
  margin: auto;
  width: 3%;
  margin-top: 17%;
  display: block;
`