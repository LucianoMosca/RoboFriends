import React from "react";


const SearchBox = ({searchfield, changeOcurred}) => {
    return (
        <div className="pa2">
            <input className="pa3 ma2 b--navy bg-light-yellow"
            type="search"
            placeholder="search for a robot"
            onChange={changeOcurred}/>
        </div>
        
    )
}

export default SearchBox;