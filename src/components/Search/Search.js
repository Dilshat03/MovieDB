import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("")
    const history = useHistory()
    const searchInput = (e) => {
        setSearch(e.target.value)

    }
    const handleSearch = () => {
        setSearch('')
        if (search.trim()){
            history.push(`/browse/${search}`)
        }

    }
    return (
        <div>
            <div className="search d-flex justify-content-end">
                <input onKeyPress={el=>{if(el.key==='Enter')handleSearch()}} type="text" className='search-input rounded-pill' onChange={searchInput} value={search}/>
                <button onClick={handleSearch} className="btn btn-danger  btn-header   btn-search  ">SEARCH</button>
            </div>
        </div>
    );
};

export default Search;