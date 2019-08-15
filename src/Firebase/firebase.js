import * as firebase from "firebase";
import firestore from "firebase/firestore"

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAperwxzQjKh4MpjWCsBJSEvVAGlAGmywM",
    authDomain: "my-amazing-project-14de6.firebaseapp.com",
    databaseURL: "https://my-amazing-project-14de6.firebaseio.com",
    projectId: "my-amazing-project-14de6",
    storageBucket: "my-amazing-project-14de6.appspot.com",
    messagingSenderId: "176236111087",
    // appId: "1:176236111087:web:1f27fa497f57e1b1"
}
    //initializing app
firebase.initializeApp(config)
    //importing the settings onto the firestore
firebase.firestore().settings(settings);

export default firebase