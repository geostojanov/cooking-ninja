import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAVFSlv3tsw_e0V-jDe6s8rhMvI6UK54mI",
  authDomain: "cooking-ninja-site-f7884.firebaseapp.com",
  projectId: "cooking-ninja-site-f7884",
  storageBucket: "cooking-ninja-site-f7884.appspot.com",
  messagingSenderId: "566210207509",
  appId: "1:566210207509:web:8a591787107c92d16f531c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }