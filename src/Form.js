import React, { useState } from 'react';

export default function Form({ onSubmit }) {
    const [searchInput, setSearchInput] = useState(``);

    const submitHandler = e => {
        e.preventDefault();
        return onSubmit(searchInput);
    };

    return (
        <form onSubmit={submitHandler}>
            <input 
                aria-label="Enter the movie name you are searching for"
                data-testid="search-input"
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Movie Name"
                type="search"
                title="Enter the movie name you are searching for" 
                value={searchInput}
            />
            <input data-testid="search-submit" type="submit" value="Search"/>
        </form>
    )
}