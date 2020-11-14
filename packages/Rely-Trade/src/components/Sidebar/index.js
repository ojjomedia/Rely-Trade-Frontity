import React from 'react'
import { connect } from 'frontity';
import Categories from './categories';
import LatestPost from './latest-post';
import Faqs from './faqs';

const Sidebar = () => {
    return (
        <div>
            <Categories />
            <LatestPost />
            <Faqs />
        </div>
    )
}

export default connect(Sidebar);
