import React from "react";
import { getDefinition } from "../actions/getDefinition"

function Search({ setDefinitions }){
    
    async function handleChange(e){
        const word = e.target.value;
        setDefinitions(await getDefinition(word));
    }

    return(
        <input type="search" placeholder="Type in word" className="search" onChange={handleChange}></input>
    )
}

export default Search;