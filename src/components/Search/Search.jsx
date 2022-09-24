import { useState } from "react";


const Search =({search,setSearch})=>{
    const searchHandler =(e)=>{
        setSearch(e.target.value)
    }

    return(
        <div>
            <input onChange={searchHandler} value={search} placeholder={'Type here to search'} />
        </div>
    )
}

export default Search;