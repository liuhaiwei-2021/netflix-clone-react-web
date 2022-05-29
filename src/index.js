import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { ModalProvider } from "./state/ModalContext";
import { AuthProvider } from "./state/AuthContext";
import { UserProvider } from "./state/UserContext";
import { SeriesProvider } from "./state/SeriesContext";
import { MoviesProvider } from "./state/MoviesContext";
import { DocumentariesProvider } from "./state/DocumentariesContext";
import { SearchProvider } from "./state/SearchContext";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AuthProvider>
			<UserProvider>
				<SeriesProvider>
					<DocumentariesProvider>
						<MoviesProvider>
							<SearchProvider>
								<ModalProvider>
									<Routes>
										<Route path="/*" element={<App />} />
									</Routes>
								</ModalProvider>
							</SearchProvider>
						</MoviesProvider>
					</DocumentariesProvider>
				</SeriesProvider>
			</UserProvider>
		</AuthProvider>
	</BrowserRouter>
);
