import React from 'react';
import { connect, styled } from 'frontity';
import { Col, Container, Row } from 'react-bootstrap';
import { SiGooglemaps } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import SocialIcon from '../Social-icon';

const Top = () => {
    return (
        <Section>
            <Container>
                <Row>
                    <Col lg={6}>
                        <SocialIcon />
                    </Col>
                    <Col lg={6} className="text-right">
                        <SiGooglemaps className="map" data-toggle="tooltip" data-placement="top" title="Your Location input here..." />
                        <MdEmail className="email" data-toggle="tooltip" data-placement="top" title="Your Email Here..." />
                    </Col>
                </Row>
            </Container>
        </Section>
    )
}

export default connect(Top);

const Section = styled.div`
    padding: 2px 0px 7px 0px;
    border-bottom: 1px solid #dddddd;

    & svg {
        width: 20px;
        height: auto;
        margin-right: 10px;
        color: #444444;
    }
    & svg:last-child{
        margin-right: 0px;
    }
`
