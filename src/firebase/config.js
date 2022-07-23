import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC_MTicgFEQ-c3tIRR5pv-lKZmS6DoQBOk",
    authDomain: "dojopm-13b1e.firebaseapp.com",
    projectId: "dojopm-13b1e",
    storageBucket: "dojopm-13b1e.appspot.com",
    messagingSenderId: "445489197289",
    appId: "1:445489197289:web:73dc280289558d50dd0078"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp, projectStorage}