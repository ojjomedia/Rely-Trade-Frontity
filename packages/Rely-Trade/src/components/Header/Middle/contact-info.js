import React from 'react'
import { connect, styled } from 'frontity';
import { MdPhoneIphone } from 'react-icons/md';

const ContactInfo = ({ state }) => {
    const { primary } = state.theme.colors;
    return (
        <Main className="d-flex align-items-center">
            <PhoneIcon>
                <MdPhoneIphone color={primary} />
            </PhoneIcon>
            <MainContent>
                <Title>Hotline:</Title>
                <PhoneContent>+880 1779120813<br/>
                +880 1558993231</PhoneContent>
            </MainContent>
        </Main>
    )
}

export default connect(ContactInfo);

const Main = styled.div`
    float: right;
    @media (max-width: 800px){
        float: none;
        justify-content: center;
        margin: 20px 0;
    }
`
const PhoneIcon = styled.div`
    & svg{
        width: 52px;
        height: auto;
    }
`
const MainContent = styled.div`

`
const Title = styled.h3`
    font-size: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 5px;
    color: #666;
`
const PhoneContent = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0px;
    color: #666;
`