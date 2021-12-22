import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeFirebaseApp = () => {
    console.log(firebaseConfig);
    initializeApp(firebaseConfig);
};

export default initializeFirebaseApp;
