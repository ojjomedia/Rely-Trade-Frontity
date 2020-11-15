import React from 'react';
import { connect, styled } from 'frontity';
import TitleSection from './section-title';
import { Col, Image, Row } from 'react-bootstrap';
import UserImg from '../../img/user-image.png';

const Testimonial = ({ state }) => {
    const { primary } = state.theme.colors;
    const { light, base } = state.theme.colors.gray;
    return (
        <MainSection border={light}>
            <TitleBox bg={primary}>
                <TitleSection> Testimonial </TitleSection>
            </TitleBox>
            <Body>
                <Contentbox>
                    <Content color={base}>"Duls aliquam, magna ac fermentum are finibus, orci viverra risus, nan into varius tellus tortor sed eros. Sed Pharetra ante sit amet suscipit arnare"</Content>
                </Contentbox>
                <Row>
                    <ImageBox xs lg={3} className="pr-0">
                        <Image src={UserImg} width="100%" />
                    </ImageBox>
                    <InfoBox xs lg={9}>
                        <Name color={primary}>Mr. Hasan Ali</Name>
                        <Possession color={base}>Web designer</Possession>
                    </InfoBox>
                </Row>
            </Body>
            <Bottom bg={light} />
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
const Body = styled.div`
    padding: 15px 20px;
    
`
const Contentbox = styled.div`
    margin-bottom: 25px;
`
const Content = styled.p`
    font-size: 14px;
    font-style: italic;
    color: ${(props) => props.color};
`
const ImageBox = styled(Col)`

`
const InfoBox = styled(Col)`

`
const Name = styled.h4`
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.color};
`
const Possession = styled.h5`
    font-size: 14px;
    color: ${(props) => props.color};
`
const Bottom = styled.div`
    background-color: ${(props) => props.bg};
    height: 35px;
`