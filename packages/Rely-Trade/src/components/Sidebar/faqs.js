import React from 'react';
import { connect, styled } from 'frontity';
import TitleSection from './section-title';
import { Accordion, Button, Card } from 'react-bootstrap';

const Faqs = ({ state }) => {
    const { primary } = state.theme.colors;
    const { light } = state.theme.colors.gray;
    return (
        <Section border={light}>
            <TitleBox bg={primary}>
                <TitleSection>
                    FAQs
                </TitleSection>
            </TitleBox>
            <Body>
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Cl ick me!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                Hello! I'm the body
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Body>
        </Section>
    )
}

export default connect(Faqs);

const Section = styled.div`
    margin-bottom: 35px;
    border: 1px solid;
    border-color: ${(props) => props.border};
`
const TitleBox = styled.div`
    border-bottom: 3px solid;
    border-color: ${(props) => props.bg};
`
const Body = styled.div`
    padding: 0px;
`