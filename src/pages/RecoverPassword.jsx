// NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
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
			<p>
				Please write the email you used to created your account so we can send you an email
				with instructions on how to reset and create a new password.
			</p>
			<p>
				<b>🚨 Note:</b>
				Don't forget to check every inbox including the spam folder.
			</p>
			<form onSubmit={onRecover}>
				<InputField setup={form.email} state={[email, setEmail]} />
				<button>Submit</button>
			</form>
			<p>
				Did you remembered your password?
				<Link to="/login">Click here</Link> to go back the login page.
			</p>
		</div>
	);
}
