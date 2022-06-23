// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcuDelRexa0FCLYodKs2DvdEmMP32JzfY",
    authDomain: "login-react-firebase-project.firebaseapp.com",
    projectId: "login-react-firebase-project",
    storageBucket: "login-react-firebase-project.appspot.com",
    messagingSenderId: "403544547549",
    appId: "1:403544547549:web:36ec872bd30b37cdfdfb34",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
