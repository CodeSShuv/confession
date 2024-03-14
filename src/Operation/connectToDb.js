import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCHaoja0QZwgRfJvbM407_zRezJdt6C3ck",
  authDomain: "confessions-11a57.firebaseapp.com",
  databaseURL: "https://confessions-11a57-default-rtdb.firebaseio.com",
  projectId: "confessions-11a57",
  storageBucket: "confessions-11a57.appspot.com",
  messagingSenderId: "977981122596",
  appId: "1:977981122596:web:9458d69b6c57f25a2190b1"
  };
  
  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app);
export {database}