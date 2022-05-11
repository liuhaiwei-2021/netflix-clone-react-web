// NPM packages
import { ref } from "firebase/storage";
import { getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";

// Project file
import { cloudStorage } from "./firebase";

// Methods
// -- Create
export async function createFile(filePath, file) {
	const fileReference = ref(cloudStorage, filePath);

	await uploadBytes(fileReference, file); // uploading a file to the server
	return await getDownloadURL(fileReference); // getting the URL
}

// -- Delete
export async function deleteFile(filePath) {
	let payload = { error: null, loading: true };
	try {
		const fileReference = ref(cloudStorage, filePath);

		await deleteObject(fileReference);
		payload = { error: null, loading: false };
	} catch (error) {
		payload = { error: error, loading: false };
	}
	return payload;
}
