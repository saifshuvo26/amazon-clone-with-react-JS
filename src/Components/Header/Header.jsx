import React from 'react';
import Basket from './Basket/Basket';
import classes from './Header.module.css';
import Search from './Search/Search';

function Header() {
    return (
        <div className = {classes.header}>
            {/* logo starts */}
            <img className = {classes.header_logo} src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="Can't load logo"/>
            {/* logo end */}

            {/* Search bar starts*/}
            <Search />
            {/* Search bar end*/}

            {/* Header Navbar starts*/}
            <div className = {classes.header__nav}>
                {/* Header navbar option starts */}
                <div className = {classes.options}>
                    <span className = {classes.line__one}>Hello, Guest</span>
                    <span className = {classes.line__two}>Sign In</span>
                </div>
                {/* Header navbar option end */}
                {/* Header navbar option starts */}
                <div className = {classes.options}>
                <span className = {classes.line__one}>Returns</span>
                    <span className = {classes.line__two}>and Orders</span>
                </div>
                {/* Header navbar option end */}
                {/* Header navbar option starts */}
                <div className = {classes.options}>
                <span className = {classes.line__one}>Your</span>
                    <span className = {classes.line__two}>Prime</span>
                </div>
                {/* Header navbar option end */}
            </div>
            {/* Header Navbar end*/}
            
        {/* Basket Componet */}
        <Basket/>
        </div>
    )
}

export default Header
