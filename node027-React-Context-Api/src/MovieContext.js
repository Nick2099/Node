import React, {useState, createContext} from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Die Hard',
            price: '10$',
            id: 123
        },
        {
            name: 'Star Wars',
            price: '11$',
            id: 234
        },
        {
            name: 'From Dusk till Dawn',
            price: '9$',
            id: 345
        }
    ]);
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
};