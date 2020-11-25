import React from 'react'
import { connect } from 'frontity';
import Iframe from 'react-iframe'

const Map = () => {
    return (
        <>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7296.88013505122!2d90.39434837699662!3d23.874009038114192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x67a035651a89fe5e!2sRELY%20TRADE%20-%20(All%20types%20of%20Industrial%2C%20Commercial%2C%20Medical%2C%20Agricultural%2C%20Aquacultural%20Machinery%20%26%20Equipment%20Supplier%20in%20Bangladesh)!5e0!3m2!1sen!2sbd!4v1606301512206!5m2!1sen!2sbd"
            width="100%"
            height="200"
            id="myId"
            className="footer-map"
            style="border:0;" />
        </>
    )
}

export default connect(Map);
