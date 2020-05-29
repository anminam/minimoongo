import React from 'react';

const Search = () => {
    return (
        <div id="search" className="container__search">
            <form>
                <div className="wapper__search">
                    <input type="text"></input>
                </div>
                <button type="submit" className="search-button">
                    <span role="img" aria-label="찾기">🔍</span>
                </button>
            </form>
        </div>
    )
}

export default Search;