// src/environments/firebase.config.ts
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDPZIzAYpKqLD-2KXWMVCpe7hoJnYYCZOI",
  authDomain: "night-crusade-titans-dfbcf.firebaseapp.com",
  databaseURL: "https://night-crusade-titans-dfbcf-default-rtdb.firebaseio.com",
  projectId: "night-crusade-titans-dfbcf",
  storageBucket: "night-crusade-titans-dfbcf.appspot.com",
  messagingSenderId: "147496896650",
  appId: "1:147496896650:web:6b0b87a76807f486ce4573",
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);