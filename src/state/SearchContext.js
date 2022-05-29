// NPM packages
import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext(null);

export function SearchProvider({ children }) {
	const [searchResult, setSearchResult] = useState();

	const values = { searchResult, setSearchResult };

	return <SearchContext.Provider value={values}>{children}</SearchContext.Provider>;
}

export function useSearch() {
	return useContext(SearchContext);
}
