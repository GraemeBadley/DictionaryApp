import React from "react";

function Search({ setDefinitions }){
    
    async function handleChange(e){
        const word = e.target.value;
        setDefinitions(await getDefiniton(word));
    }

    return(
        <input type="search" placeholder="Type in word" className="search" onChange={handleChange}></input>
    )
}

const getDefiniton = async (word) => {
    try{
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
        if (response.ok){
            return await response.json();
        }
    }catch(error){
        return null;
    }
}

export default Search;