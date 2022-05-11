import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { ModalProvider } from "./state/ModalContext";
import { AuthProvider } from "./state/AuthContext";
import { UserProvider } from "./state/UserContext";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AuthProvider>
			<UserProvider>
				<ModalProvider>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</ModalProvider>
			</UserProvider>
		</AuthProvider>
	</BrowserRouter>
);
