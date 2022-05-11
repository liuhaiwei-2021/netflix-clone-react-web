// NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// Properties
const firebaseConfig = {
	apiKey: "AIzaSyASqj7fRdWM-qVByhc1RKlTdlf892i9a38",
	authDomain: "netflix-clone-react-web.firebaseapp.com",
	projectId: "netflix-clone-react-web",
	storageBucket: "netflix-clone-react-web.appspot.com",
	messagingSenderId: "338379182336",
	appId: "1:338379182336:web:63f7ef9c289241c8f1a3e5",
};

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
export const cloudStorage = getStorage(app);
export const authentification = getAuth(app);
