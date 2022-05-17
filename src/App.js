//NPM packages
import { Route, Routes } from "react-router-dom";
//Project files
import RequireAuth from "./components/authentication/RequireAuth";
import Unauthorized from "./components/authentication/Unauthorized";
import Layout from "./pages/Layout";
import LogIn from "./pages/LogIn";
import Landing from "./pages/Landing";
import Missing from "./pages/Missing";
import RecoverPassword from "./pages/RecoverPassword";
import SignUp from "./pages/SignUp";
import Modal from "./components/shared/Modal";
import "./styles/App.css";

export default function App() {
	const ROLES = {
		Editor: 2,
		Customer: 1,
	};

	return (
		<>
			<Modal />
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* public routes */}
					<Route path="/" element={<Landing />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/recover" element={<RecoverPassword />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/unauthorized" element={<Unauthorized />} />

					{/* I want to protect these routes */}
					<Route
						element={
							<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Editor]} />
						}></Route>

					<Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}></Route>

					{/* catch all */}
					<Route path="*" element={<Missing />} />
				</Route>
			</Routes>
		</>
	);
}
