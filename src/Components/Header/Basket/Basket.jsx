import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import React from 'react';
import classes from './Basket.module.css';

function Basket() {
    return (
        <div className = {classes.basket}>
            <ShoppingBasketIcon className = {classes.ShoppingBasketIcon}/>
            <span className = {[classes.line__two, classes.basket__count].join(" ")}> 0</span>
        </div>
    )
}

export default Basket
