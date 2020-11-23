import React from 'react';
import { connect, styled } from 'frontity';
import TitleSection from './section-title';
import { Accordion, Button, Card } from 'react-bootstrap';
import { FaPlusSquare } from 'react-icons/fa';

const Faqs = ({ state }) => {
    const { primary, text } = state.theme.colors;
    const { light, base } = state.theme.colors.gray;
    return (
        <Section border={light}>
            <TitleBox bg={primary}>
                <TitleSection>
                    FAQs
                </TitleSection>
            </TitleBox>
            <Body>
                <Accordion defaultActiveKey="0">
                    <Item border={light}>
                        <Toggle as={Card.Header} eventKey="0" color={text}>
                        Pellentesque vitae imperdiet in?
                        </Toggle>
                        <ItemBody eventKey="0" color={base}>
                        <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card.Body>
                        </ItemBody>
                    </Item>
                    <Item border={light}>
                        <Toggle as={Card.Header} eventKey="1" color={text}>
                        hendrerit eu nunc massa?
                        </Toggle>
                        <ItemBody eventKey="1" color={base}>
                        <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card.Body>
                        </ItemBody>
                    </Item>
                    <Item border={light}>
                        <Toggle as={Card.Header} eventKey="2" color={text}>
                        Suspendisse feugiat cursus?
                        </Toggle>
                        <ItemBody eventKey="2" color={base}>
                        <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card.Body>
                        </ItemBody>
                    </Item>
                    <Item border={light}>
                        <Toggle as={Card.Header} eventKey="3" color={text}>
                        Finibus ullamcorper eleifend?
                        </Toggle>
                        <ItemBody eventKey="3" color={base}>
                        <Card.Body>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Card.Body>
                        </ItemBody>
                    </Item>
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
const Item = styled(Card)`
    
`
const TitleBox = styled.div`
    border-bottom: 3px solid;
    border-color: ${(props) => props.bg};
`
const Body = styled.div`
    padding: 0px;
`
const Toggle = styled(Accordion.Toggle)`
    width: 100%;
    text-align: left;
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.color} !important;

    & :hover, :focus {
        text-decoration: none;
        box-shadow: none;
        background-color: rgba(0,0,0,.03);
    }
    & svg {
        width: 18px;
        height: auto;
        margin-right: 5px;
    }
`
const ItemBody = styled(Accordion.Collapse)`
    font-size: 14px;
    color: ${(props) => props.color};
    & .card-body {
        padding: 1.25rem 15px 1.25rem 30px;
    }
`