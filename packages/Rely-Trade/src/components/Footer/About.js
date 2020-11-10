import React from 'react';
import { Image } from 'react-bootstrap';
import Logo from '../../img/Mail_Logo.png';
import { connect, styled } from 'frontity';

const About = () => {
    return (
        <>
            <Img src={Logo} width="200" />
            <Title>Email:</Title>
            <Content>
                info@relytrade.com<br/>
                relytradebd@gmail.com
            </Content>
            <Title>Phone:</Title>
            <Content>
                +880 1779120813<br/>
                +880 1558993231
            </Content>
        </>
    )
}

export default connect(About);

const Img = styled(Image)`
    margin-bottom: 10px;
`

const Title = styled.h4`
    font-size: 16px;
    font-weight: 600;
    color: #7eb942;
`
const Content = styled.p`
    font-size: 14px;
    margin-bottom: 10px;
`