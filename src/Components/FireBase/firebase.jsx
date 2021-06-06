import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyAlVDfHqNf8QRFKd_39ac2NXyLCgOpfYcg",
    authDomain: "flickr-dev.firebaseapp.com",
    projectId: "flickr-dev",
    storageBucket: "flickr-dev.appspot.com",
    messagingSenderId: "818481952099",
    appId: "1:818481952099:web:944674cbc256bcbf984f56"
})
export const auth = app.auth();
export default app