import React from 'react'
import { connect } from 'frontity';
import Categories from './categories';
import LatestPost from './latest-post';
import Faqs from './faqs';
import Testimonial from './Testimonial';

const Sidebar = () => {
    return (
        <div>
            <Categories />
            <LatestPost />
            <Faqs />
            <Testimonial />
        </div>
    )
}

export default connect(Sidebar);
