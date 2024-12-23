import React from "react";
import './styles/shop.css'
import Footer from '../../components/Footer'

function ShopContent() {
    return (
        <div id="shopLayout">
            <div id="shopBanner"></div>
            <div id="shopItems"></div>
            <Footer/>
        </div>
    );
}

export default ShopContent;