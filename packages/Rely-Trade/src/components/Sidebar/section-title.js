import React from 'react';
import { connect, styled } from 'frontity';

const TitleSection = ({ state, children }) => {
    const { primary } = state.theme.colors;
    const { lighttext } = state.theme.colors.gray;
    return (
        <Title bg={primary}>
            <Titletext color={lighttext}> {children} </Titletext>
        </Title>
    )
}
export default connect(TitleSection);
const Title = styled.div`
    display: inline-block;
    margin-bottom: -2px;
    background-color: ${(props) => props.bg};
    color: #fff;
    border: 0;
    padding: 5px 20px;
    font-size: 18px;
    position: relative;
    &::before{
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-bottom: 38px solid;
    border-color: ${(props) => props.bg};
    border-right: 20px solid transparent;
    z-index: 1;
    right: -20px;
    background-color: transparent !important;
    }
`
const Titletext = styled.h4`

`
