// NPM packages
import { useState } from "react";
//project files
import Header from "../components/shared/Header";
import InputField from "../components/shared/InputField";
import form from "../data/recoverPasswordForm.json";
import { recoverUser } from "../scripts/firebaseAuth";
import "../styles/RecoverPassword.css";

export default function RecoverPassword() {
	// Local state
	const [email, setEmail] = useState("");

	// Method
	async function onRecover(event) {
		event.preventDefault();
		await recoverUser(email);
		alert(`We sent an email to ${email}. Check you spam folder as well.`);
	}

	return (
		<div className="recover-password">
			<Header />
			<h1>Forgot Email/Password</h1>
			<p>How would you like to reset your password?</p>
			<p> We will send you an email with instructions on how to reset your password.</p>

			<form onSubmit={onRecover}>
				<InputField setup={form.email} state={[email, setEmail]} />
				<button className="recover-btn">Email Me</button>
			</form>
		</div>
	);
}
