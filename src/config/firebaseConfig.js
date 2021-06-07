import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
        apiKey: "AIzaSyAmVUA4ETnMhv_BECyLXZvWrtuRqJDa_YI",
        authDomain: "valik-bb728.firebaseapp.com",
        projectId: "valik-bb728",
        storageBucket: "valik-bb728.appspot.com",
        messagingSenderId: "987460923938",
        appId: "1:987460923938:web:dab5e2cd9891abb6c4107b",
        measurementId: "G-V6NGD6HBXF"
    };
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;

