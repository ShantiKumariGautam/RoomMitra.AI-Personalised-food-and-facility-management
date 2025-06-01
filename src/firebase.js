// src/firebase.js// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIJ3C2Ns6n9EsFFqn1Y1cDaLf2yRYunK0",
  authDomain: "roommitra-a3a79.firebaseapp.com",
  projectId: "roommitra-a3a79",
  storageBucket: "roommitra-a3a79.appspot.com",
  messagingSenderId: "1024905178557",
  appId: "1:1024905178557:web:81416a48dc1ec44597b6d4"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { app, db };
