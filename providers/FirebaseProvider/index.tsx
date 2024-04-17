import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getDatabase } from "firebase/database";
import firebaseConfig from "./../../firebaseConfig.js";

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  return (
    <FirebaseContext.Provider value={database}>
      {children}
    </FirebaseContext.Provider>
  );
};

export const useFirebase = () => {
  const database = useContext(FirebaseContext);

  if (!database) {
    throw new Error("Firebase instance not initialized");
  }

  return database;
};

export default FirebaseProvider;
