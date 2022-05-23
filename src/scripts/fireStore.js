// NPM packages
import { doc, collection } from "firebase/firestore";
import { addDoc, getDoc, getDocs, setDoc, deleteDoc } from "firebase/firestore";

// Project files
import { fireStore } from "./firebase";

// Methods
// -- Create
export async function createDocument(path, data) {
	let payload = { message: null, error: null, loading: true };

	try {
		const documentPath = collection(fireStore, path);
		await addDoc(documentPath, data);

		payload = { message: "Document created!", error: null, loading: false };
	} catch (error) {
		payload = { message: "created failed", error: error, loading: false };
	}

	return payload;
}

export async function createDocumentWithId(path, id, data) {
	let payload = { message: null, error: null, loading: true };

	try {
		const documentReference = doc(fireStore, path, id);
		await setDoc(documentReference, data);

		payload = { message: `Document with id ${id} created!`, error: null, loading: false };
	} catch (error) {
		payload = { message: "created failed", error: error.message, loading: false };
		console.log(error);
	}

	return payload;
}

// -- Read
export async function readDocument(path, id) {
	const payload = { data: {}, error: null, loading: true };

	try {
		const documentPath = doc(fireStore, path, id);
		const document = await getDoc(documentPath);

		payload.data = document.data();
		payload.loading = false;
		console.log("firestore read document", payload.data);
	} catch (error) {
		payload.error = error;
		payload.loading = false;
	}

	return payload;
}

export async function readCollection(path) {
	const collectionPath = collection(fireStore, path);
	const snapshot = await getDocs(collectionPath);
	const documents = snapshot.docs.map((item) => {
		return { id: item.id, ...item.data() };
	});

	return documents;
}

// -- Update
export async function updateDocument(path, data) {
	const payload = { message: null, error: null, loading: true };

	try {
		const id = data.id;
		const documentPath = doc(fireStore, path, id);
		await setDoc(documentPath, data);

		payload.message = "Succeed modifying document";
		payload.loading = false;
	} catch (error) {
		payload.error = error;
		payload.loading = false;
	}

	return payload;
}

// -- Delete
export async function deleteDocument(path, id) {
	const documentPath = doc(fireStore, path, id);
	await deleteDoc(documentPath);
}
