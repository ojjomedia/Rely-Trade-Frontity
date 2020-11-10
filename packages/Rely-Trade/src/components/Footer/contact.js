import React from 'react';
import { connect, styled } from 'frontity';
import { FaHome } from 'react-icons/fa';
import { Image } from 'react-bootstrap';
import map from '../../img/google-map.png';

const Contact = () => {
    return (
        <>
            <Title>Information</Title>
            <Content>
                <FaHome /> House# 4/C, Road# 7/B, Sector# 09, Uttara, Dhaka-1230.
            </Content>
            <Img src={map} width="100%" height="150" />
        </>
    )
}

export default connect(Contact);

const Title = styled.h3`
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 15px;
    text-transform: uppercase;
`
const Content = styled.p`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
`
const Img = styled(Image)`
    margin-bottom: 15px;
`