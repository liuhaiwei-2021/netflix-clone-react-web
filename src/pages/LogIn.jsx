// NPM packages
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

// project files
import { loginUser } from "../scripts/firebaseAuth";
import { useAuth } from "../state/AuthContext";
import { useUser } from "../state/UserContext";
import { readDocument } from "../scripts/fireStore";

import form from "../data/loginForm.json";
import InputField from "../components/shared/InputField";
import "../styles/LogIn.css";
import LoginWrapperBackground from "../components/login/LoginWrapperBackground";

export default function LogIn() {
	// global state
	const { setUID, setLoggedIn } = useAuth();
	const { setUser } = useUser();

	// Local state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// properties
	const navigation = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	// Methods
	async function onLogin(e) {
		e.preventDefault();
		const payload = await loginUser(email, password);
		const { uid, errMessage } = payload;
		setUID(uid);
		if (uid) onSucess(uid);
		if (errMessage !== "") onFail(errMessage);
	}

	async function onSucess(uid) {
		const payload = await readDocument("users", uid);

		setUser(payload.data);
		setLoggedIn(true);
		setEmail("");
		setPassword("");
		navigation("/browse");
	}

	function onFail(errMessage) {
		alert(errMessage); //need transform to friend word
	}

	return (
		<div className="login-wrapper">
			<LoginWrapperBackground />
			<div className="nfHeader login-header"></div>
			<div className="login-body">
				<div className="login-content">
					<div className="login-form-main">
						<h1 className="login-title">Sign In</h1>
						<form className="login-form" onSubmit={onLogin}>
							<InputField setup={form.email} state={[email, setEmail]} />
							<InputField setup={form.password} state={[password, setPassword]} />
							<button className="login-button">Sign In</button>
							<div className="login-form-help">
								<Link to="/recover" className="login-help-link">
									Need help?
								</Link>
							</div>
						</form>
					</div>

					<div className="login-form-other">
						<div className="login-signup-now">
							<p>
								New to Netflix?
								<Link to="/signup"> Sign up now.</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="site-footer-wrapper"></div>
		</div>
	);
}
