// NPM packages
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
	const [user, setUser] = useState(null);

	const storageKey = "user";
	function saveData() {
		const data = JSON.stringify(user);
		localStorage.setItem(storageKey, data);
	}

	useEffect(() => saveData());

	// Methods
	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
	return useContext(UserContext);
}
