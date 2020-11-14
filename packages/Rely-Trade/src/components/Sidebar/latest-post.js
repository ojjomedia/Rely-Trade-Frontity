import React from 'react';
import { connect, styled } from 'frontity';
import { Image } from 'react-bootstrap';
import PostImage from '../../img/Post_img.jpg'
import TitleSection from './section-title';

const LatestPost = ({ state }) => {
    const { primary } = state.theme.colors;
    const { light } = state.theme.colors.gray;
    return (
        <Section border={light}>
            <TitleBox bg={primary}>
                <TitleSection>
                    Latest Post
                </TitleSection>
            </TitleBox>
            <ImageBox>
                <PostImg src={PostImage} />
            </ImageBox>
            <Body>
                <PostTilte>Lorem ipsum dolor sit amet</PostTilte>
                <PostContent>Set up your deals of the day, clearance sales, end-of-season offers, early bird discounts, members-only offers, and festive campaigns in minutes.</PostContent>
            </Body>
        </Section>
    )
}

export default connect(LatestPost);

const Section = styled.div`
    margin-bottom: 35px;
    border: 1px solid;
    border-color: ${(props) => props.border};
`
const TitleBox = styled.div`
    border-bottom: 3px solid;
    border-color: ${(props) => props.bg};
`
const ImageBox = styled.div`
    width: 100%;
    height: 210px;
    overflow: hidden;
`
const PostImg = styled(Image)`
    width: 100%;
`
const Body = styled.div`
    padding: 20px;
`
const PostTilte = styled.h3`
    font-size: 16px;
    margin-bottom: 5px;
`
const PostContent = styled.p`
    font-size: 14px;
`