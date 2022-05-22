// NPM packages
import React, { createContext, useContext, useState } from "react";

const DocumentariesContext = createContext(null);

export function DocumentariesProvider({ children }) {
	const [documentaries, setDocumentaries] = useState([]);

	const values = { documentaries, setDocumentaries };

	return <DocumentariesContext.Provider value={values}>{children}</DocumentariesContext.Provider>;
}

export function useDocumentaries() {
	return useContext(DocumentariesContext);
}
