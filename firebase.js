import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAiYMqwJRlIXM-KMUUiqlek6kPGeHwNQSA",
    authDomain: "facebook-clone-ed6fe.firebaseapp.com",
    projectId: "facebook-clone-ed6fe",
    storageBucket: "facebook-clone-ed6fe.appspot.com",
    messagingSenderId: "635104857523",
    appId: "1:635104857523:web:2d9f0261f811c281498fc6"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }