// NPM packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Project files
import { createDocumentWithId } from "../scripts/fireStore";
import { createUser } from "../scripts/firebaseAuth";
import { useAuth } from "../state/AuthContext";

import form from "../data/signUpForm.json";
import InputField from "../components/shared/InputField";
import "../styles/SignUp.css";

export default function SignUp() {
	//Global state
	const { setUID } = useAuth();

	//Local state
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//properties
	const navigation = useNavigate();

	async function onSignUp(e) {
		e.preventDefault();

		const uid = await createUID().catch(onFail);
		let user;
		if (uid) user = await createDocument(uid).catch(onFail);
		if (user) onSuccess(uid);
	}

	async function createUID() {
		const result = await createUser(email, password);
		const uid = result.data;
		return uid;
	}

	async function createDocument(uid) {
		let user = {
			name: name,
			email: email,
			roles: [1],
			isEditor: false,
			avatar: "https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-avatar-avatars-dreamstale-lineal-dreamstale.png",
		};
		const document = await createDocumentWithId("users", uid, user);

		return document;
	}

	function onSuccess(uid) {
		setUID(uid);
		navigation("/login");
	}

	function onFail(error) {
		alert(error);
	}

	return (
		<div className="sign-up">
			<h1>Sign Up</h1>
			<h2>Start choose your future today!</h2>
			<form onSubmit={onSignUp}>
				<InputField setup={form.name} state={[name, setName]} />
				<InputField setup={form.email} state={[email, setEmail]} />
				<InputField setup={form.password} state={[password, setPassword]} />
				<button className="btn-sign-up">SIGN UP</button>
			</form>
			<p>
				<Link to="/login">
					Do you already have an account? <span className="log-in">Log in</span>
				</Link>
			</p>
		</div>
	);
}
