import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AuthProvider from './services/contexts/AuthContext';
import Routing from './services/router/Routing';
//import reportWebVitals from './reportWebVitals';

/**
 * Handles dependencies and it translates de components into the html file
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<Routing />
			</AuthProvider>
		</Router>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
