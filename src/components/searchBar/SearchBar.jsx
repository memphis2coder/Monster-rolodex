import React from 'react'

import './SearchBar.css';

export default function SearchBar({placeholder, handleChange}) {
    return (
        <div className="search-container">
            <input
                className="searchBox" 
                type="search" 
                placeholder={placeholder} // this makes it more dynamic
                onChange={handleChange} 
            />
        </div>
    )
}
