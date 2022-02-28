import React from "react";

const Card = ( {id, name, email} ) => {
    return (
        <div className="tc grow dib bg-light-red br3 pa3 ma2 mv3 br3 ba bw2 shadow-5">
            <img alt="image" src={`https://robohash.org/`+name+`?200x200`}/>
            <h2>{name}</h2>
            <p>{email}</p>

        </div>
    )
}

export default Card;