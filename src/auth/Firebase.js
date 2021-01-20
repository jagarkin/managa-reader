import firebase from "firebase/app";
//import "firebase/firestore";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDTmwsS044fk8LmHSSxB46VSWcYydO7uK4",
  authDomain: "manga-43160.firebaseapp.com",
  projectId: "manga-43160",
  storageBucket: "manga-43160.appspot.com",
  messagingSenderId: "298029583108",
  appId: "1:298029583108:web:cd2879610d42c146d79e51",
});

//export const useStore = app.firestore();

export const auth = app.auth();
export const useGoogleProvider = new firebase.auth.GoogleAuthProvider();
export const useGithubProvider = new firebase.auth.GithubAuthProvider();
export default app;
