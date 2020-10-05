import React from 'react';
import Product from '../Product card/Product';
import classes from './Home.module.css';

function Home() {
    return (
        <div className = {classes.home}>
            <div className = {classes.home__container}>
                <img className = {classes.home__banner} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg" alt="loading error"/>
            </div>
            <div className = {classes.product__conatiner}>
            <Product title = 'AmazonBasics Slim Carry On Travel Backpack' price = '67.38' image = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600' rating = {5}/>
            <Product title = 'lorem ipsum dabfd jhdfd ndnf' price = '20.31' image = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F25%2F23%2F28%2F18%2F85d3210c-5479-4b7a-a473-fd807e4ca89c%2FHero2.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600' rating = {5}/>
            </div>
            <div className = {classes.product__conatiner}>
            <Product title = 'AmazonBasics Slim Carry On Travel Backpack' price = '67.38' image = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600' rating = {5}/>
            <Product title = 'lorem ipsum dabfd jhdfd ndnf' price = '20.31' image = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F25%2F23%2F28%2F18%2F85d3210c-5479-4b7a-a473-fd807e4ca89c%2FHero2.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600' rating = {5}/>
            <Product title = 'AmazonBasics Slim Carry On Travel Backpack' price = '67.38' image = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600' rating = {5}/>
            <Product title = 'lorem ipsum dabfd jhdfd ndnf' price = '20.31' image = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F25%2F23%2F28%2F18%2F85d3210c-5479-4b7a-a473-fd807e4ca89c%2FHero2.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600' rating = {5}/>
            
            </div>
            <div className = {classes.product__conatiner}>
            <Product title = 'AmazonBasics Slim Carry On Travel Backpack' price = '67.38' image = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F12%2F00%2F05%2F05%2F910db405-6bd4-4a5d-bce7-c2e3135dc5e6%2F449070_WAntoneta_55908c_killing.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600'/>
            <Product title = 'lorem ipsum dabfd jhdfd ndnf' price = '20.31' image = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F25%2F23%2F28%2F18%2F85d3210c-5479-4b7a-a473-fd807e4ca89c%2FHero2.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600'/>
            <Product title = 'lorem ipsum dabfd jhdfd ndnf' price = '20.31' image = 'https://99designs-start-attachments.imgix.net/alchemy-pictures/2016%2F02%2F25%2F23%2F28%2F18%2F85d3210c-5479-4b7a-a473-fd807e4ca89c%2FHero2.png?auto=format&ch=Width%2CDPR&fm=png&w=600&h=600'/>
            </div>
        </div>
    )
}

export default Home

