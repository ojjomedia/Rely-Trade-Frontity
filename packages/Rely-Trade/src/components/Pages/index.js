import React from 'react';
import { connect, styled } from 'frontity';

const Pages = ({ state, libraries }) => {
    const data = state.source.get(state.router.link);
    const page = state.source[data.type][data.id];
    const Html2React = libraries.html2react.Component;
    console.log(data);
    return (
        <MainSection className="shadow-sm">
            <h1> { page.title.rendered } </h1>
        </MainSection>
    )
}

export default connect(Pages);

const MainSection = styled.div`
    padding: 40px;
    margin-top: 50px;
    & h1 {
        font-size: 32px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
    }
`