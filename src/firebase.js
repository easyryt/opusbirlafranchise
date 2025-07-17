import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCVv7FMNTXmN7HOmvHDATtPXhRHv3-_DHU",
  authDomain: "opusbirlafranchise.firebaseapp.com",
  projectId: "opusbirlafranchise",
  storageBucket: "opusbirlafranchise.firebasestorage.app",
  messagingSenderId: "1085811829047",
  appId: "1:1085811829047:web:f710df699e86294c5b12b2",
  measurementId: "G-DZG3NN6T8J",
  databaseURL:"https://opusbirlafranchise-default-rtdb.firebaseio.com"
};

export const app =  initializeApp(firebaseConfig);