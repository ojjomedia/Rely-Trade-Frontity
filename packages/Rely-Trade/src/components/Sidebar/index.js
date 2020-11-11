import React from 'react'
import { connect } from 'frontity';
import Categories from './categories';

const Sidebar = () => {
    return (
        <div>
            <Categories />
        </div>
    )
}

export default connect(Sidebar);
