// NPM packages
import React, { createContext, useContext, useState } from "react";

const SeriesContext = createContext(null);

export function SeriesProvider({ children }) {
	const [series, setSeries] = useState([]);

	const values = { series, setSeries };

	return <SeriesContext.Provider value={values}>{children}</SeriesContext.Provider>;
}

export function useSeries() {
	return useContext(SeriesContext);
}
