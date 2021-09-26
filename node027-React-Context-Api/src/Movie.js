import React from "react";

const Movie = ({name, price, id}) => {

    return(
        <div>
            <h2>Name: {name}</h2>
            <h3>Price: {price}</h3>
        </div>
    );
}

export default Movie;