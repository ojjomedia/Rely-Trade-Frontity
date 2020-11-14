import React from 'react';
import { connect, styled } from 'frontity';
import TitleSection from './section-title';

const Testimonial = ({ state }) => {
    const { primary } = state.theme.colors;
    const { light } = state.theme.colors.gray;
    return (
        <MainSection border={light}>
            <TitleBox bg={primary}>
                <TitleSection> Testimonial </TitleSection>
            </TitleBox>
        </MainSection>
    )
}

export default connect(Testimonial);

const MainSection = styled.div`
    margin-bottom: 35px;
    border: 1px solid;
    border-color: ${(props) => props.border};
`
const TitleBox = styled.div`
    border-bottom: 3px solid;
    border-color: ${(props) => props.bg};
`