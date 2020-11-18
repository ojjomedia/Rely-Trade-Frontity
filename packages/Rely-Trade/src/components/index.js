import React from 'react';
import Header from './Header';
import { connect, Global } from 'frontity';
import Footer from './Footer';
import globalStyles from './styles/global-styles';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MainPage from './Main';
import Pages from './Pages';
import Page404 from './404';
import Products from './Products';

const Root = ({ state }) => {
    const data = state.source.get(state.router.link);
    return (
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
                {data.isArchive && <MainPage /> }
                {data.isPage && <Pages /> }
                {data.isPost && <Products /> }
                {data.is404 && <Page404 /> }
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </>
    );
  };

export default connect(Root);

