// NPM Packages
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
	signOut,
} from "firebase/auth";

// Project file
import { authentification } from "./firebase";

// Methods
export async function createUser(email, password) {
	let payload = { data: undefined, error: false };

	try {
		const userCredential = await createUserWithEmailAndPassword(
			authentification,
			email,
			password
		);

		payload.data = userCredential.user.uid;
	} catch (error) {
		payload = { data: error, error: true };
	}

	return payload;
}

export async function loginUser(email, password) {
	let payload = { uid: "", errMessage: "", loading: true };

	try {
		const userCredential = await signInWithEmailAndPassword(authentification, email, password);

		payload.uid = userCredential.user.uid;

		payload.loading = false;
	} catch (error) {
		payload.errMessage = error.message;
		payload.loading = false;
	}

	return payload;
}

export async function recoverUser(email) {
	let payload = { data: undefined, error: false };

	try {
		await sendPasswordResetEmail(authentification, email);
		payload.data = "Email sent";
	} catch (error) {
		payload = { data: error, error: true };
	}

	return payload;
}

export async function logOut() {
	let payload = { data: true, error: false };

	try {
		await signOut(authentification);
		payload.data = false;
	} catch (error) {
		payload = { data: error, error: true };
	}

	return payload;
}
