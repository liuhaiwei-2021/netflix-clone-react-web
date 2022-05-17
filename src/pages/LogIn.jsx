// NPM packages
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

// Project files
import { loginUser } from "../scripts/firebaseAuth";
import { useAuth } from "../state/AuthContext";
import { useUser } from "../state/UserContext";
import { readDocument } from "../scripts/fireStore";

import form from "../data/loginForm.json";
import InputField from "../components/shared/InputField";
import "../styles/LogIn.css";
import LoginWrapperBackground from "../components/login/LoginWrapperBackground";

export default function LogIn() {
	//Global state
	const { setUID, setLoggedIn } = useAuth();
	const { setUser } = useUser();

	// Local state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//properties
	const navigation = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	// Method
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
								<div className="login-remember-me">
									<input
										type="checkbox"
										name="rememberMe"
										id="bxid_rememberMe_true"
									/>
									<label htmlFor="bxid_rememberMe_true">
										<span className="login-remember-me-label-text">
											Remember me
										</span>
									</label>
								</div>
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
						<p className="term-of-use">
							<span>
								This page is protected by Google reCAPTCHA to ensure you're not a
								bot. Learn more.
							</span>
						</p>
					</div>
				</div>
			</div>
			<div className="site-footer-wrapper"></div>
		</div>
	);
}
