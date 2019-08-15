import * as firebase from "firebase";
import firestore from "firebase/firestore"

const settings = {timestampsInSnapshots: true};

const config = {

}
    //initializing app
firebase.initializeApp(config)
    //importing the settings onto the firestore
firebase.firestore().settings(settings);

export default firebase