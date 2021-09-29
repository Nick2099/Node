import React, {useContext} from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext); //setMovies can be removed//
    return(
        <div>
            <h3>Movies</h3>
            <p>Number of movies: {movies.length}</p>
        </div>
    );
}

export default Nav;