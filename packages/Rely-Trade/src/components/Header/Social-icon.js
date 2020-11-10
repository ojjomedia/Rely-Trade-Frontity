import React from 'react';
import { connect, styled } from 'frontity';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';

const SocialIcon = () => {
    return (
        <Section>
            <FaFacebookSquare className="facebook" />
            <FaTwitterSquare className="twitter" />
            <FaLinkedin className="linkedin" />
            <FaYoutubeSquare className="youtube" />
        </Section>
    )
}

export default connect(SocialIcon);

const Section = styled.div`
    & svg {
        width: 20px;
        height: auto;
        margin-right: 10px;
        color: #444444;
    }
    & svg.facebook {
        color: #4867aa;
    }
    & svg.twitter {
        color: #50abf1;
    }
    & svg.linkedin {
        color: #0077b5;
    }
    & svg.youtube {
        color: #ff0000;
    }
    & svg:last-child{
        margin-right: 0px;
    }
`