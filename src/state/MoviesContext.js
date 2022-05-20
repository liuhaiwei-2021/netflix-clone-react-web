// NPM packages
import React, { createContext, useContext, useState } from "react";

const MoviesContext = createContext(null);

export function MoviesProvider({ children }) {
	const [movies, setMovies] = useState([]);

	const values = { movies, setMovies };

	return <MoviesContext.Provider value={values}>{children}</MoviesContext.Provider>;
}

export function useMovies() {
	return useContext(MoviesContext);
}
