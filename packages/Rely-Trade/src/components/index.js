import React from 'react';
import Header from './Header';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import { connect, Global, styled } from 'frontity';
import Footer from './Footer';

const Root = ({ state }) => {
    return (
      <>
        <Global styles={bootstrap} />
        <Header />
        <Main> Coming Soon... </Main>
        <Footer />
      </>
    );
  };

export default connect(Root);

const Main = styled.div`
  height: 200px;
  text-align: center;
  font-size: 42px;
  align-items: center;
  display: grid;
  font-weight: 700;
  text-transform: uppercase;
`
