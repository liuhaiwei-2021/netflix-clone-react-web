import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useContext } from "react";
import { authentification } from "../scripts/firebase";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
	// Local state
	const [uid, setUID] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		onAuthStateChanged(authentification, (currentUser) => {
			if (currentUser) {
				setUID(currentUser.uid);
				setLoggedIn(true);
			}
		});
	}, []);

	return (
		<AuthContext.Provider value={{ uid, setUID, loggedIn, setLoggedIn }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}

export default AuthContext;
