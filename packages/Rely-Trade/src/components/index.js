import React from 'react';
import Header from './Header';
import { connect, Global } from 'frontity';
import Footer from './Footer';
import globalStyles from './styles/global-styles';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MainPage from './Main';

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
                <MainPage />
              </Col>
            </Row>
          </Container>
        </main>
        <Footer />
      </>
    );
  };

export default connect(Root);

