import React from 'react'
import { connect, styled } from 'frontity';
import Categories from './categories';
import LatestPost from './latest-post';
import Faqs from './faqs';
import Testimonial from './Testimonial';

const Sidebar = () => {
    return (
        <MainContainer>
            <Categories className="sidebar" />
            {/* <LatestPost /> */}
            <Faqs />
            <Testimonial />
        </MainContainer>
    )
}

export default connect(Sidebar);
const MainContainer = styled.div`
    @media (max-width: 800px){
        & .sidebar {
            display: none;
        }
    }
`
