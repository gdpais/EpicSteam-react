import React, { useContext, useState, useEffect } from 'react';
//TODO: REMOVE useEffect

//* <-- Context -->

//Authentication Context
const AuthContext = React.createContext();

//* <-- Custom Hooks -->

/**
 * Get the state of authentication
 *
 * It gets the user state defined in {@link AuthProvider} and set as value for {@link AuthContext} and provides it to get the authentication state inside components wrapped by the context
 *
 * @returns {function} useContext of SetAuthContext
 */
export function useAuth() {
	return useContext(AuthContext);
}

//* <-- Provider Class -->

/**
 * Authentication Provider Component
 *
 * Aggregates {@link AuthContext} context and provides it to children
 *
 * @param {Element} children - wrapped components
 * @returns {Element} Context Providers {@link AuthContext}
 */
export default function AuthProvider({ children }) {
	const [auth, setAuth] = useState({});

	//!clg
	useEffect(() => console.log(auth), [auth]); //TODO: REMOVE

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
}
