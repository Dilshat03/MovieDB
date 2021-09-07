import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("")
    const history = useHistory()
    const searchInput = (e) => {
        setSearch(e.target.value)
    }
    const handleSearch = () => {
        if (search.trim()){
            history.push(`/browse/${search}`)
        }

    }
    return (
        <div>
            <div className="search">
                <input onKeyPress={el=>{if(el.key==='Enter')handleSearch()}} type="text" className='search-input' onChange={searchInput}/>
                <button onClick={handleSearch} className="link-search">SEARCH</button>
            </div>
        </div>
    );
};

export default Search;