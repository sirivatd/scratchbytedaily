import { useContext } from "react";
import { FirebaseContext } from "./../../providers/FirebaseProvider";

const useFirebase = () => {
  const database = useContext(FirebaseContext);

  if (!database) {
    throw new Error("Firebase instance not initialized");
  }

  return database;
};

export default useFirebase;
