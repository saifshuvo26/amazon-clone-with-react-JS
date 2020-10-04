import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import classes from './Search.module.css';

function Search() {
    return (
        <div className = {classes.search}>
            <input className = {classes.search_input} type="text"/>
            <SearchIcon className = {classes.header__searchicon}/>
        </div>
    )
}

export default Search
