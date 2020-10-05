import StarRateIcon from '@material-ui/icons/StarRate';
import React from 'react';
import classes from './Product.module.css';

function Product({title, price, rating, image}) {
    return (
        <div className = {classes.product}>
            <div className = {classes.product__detail}>
    <p>{title}</p>
                <p className = {classes.product__price}>
                    <small>$</small>
    <strong>{price}</strong>
                </p>
                <div className = {classes.product__rating}>
                    {Array(rating).fill().map((_, i) =>(<p><StarRateIcon className = {classes.rating__star}/></p>))}
    
                </div>
            </div>
            <img className = {classes.product__image} src={image} alt="can't load"/>
            <button className = {classes.product__button}>Add to cart</button>
        </div>
    )
}

export default Product
