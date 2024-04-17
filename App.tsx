import { useEffect } from "react-native";
import { createContext, useContext } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import { ref, set, onValue, getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebaseConfig.js";
import TestButton from "./components/TestButton";
import FirebaseProvider from "./providers/FirebaseProvider";

// // Create a Firebase context
// const FirebaseContext = createContext(null);
// // Create a Firebase provider component
// const FirebaseProvider = ({ children }) => {
//   const app = initializeApp(firebaseConfig);
//   const database = getDatabase(app);

//   return (
//     <FirebaseContext.Provider value={database}>
//       {children}
//     </FirebaseContext.Provider>
//   );
// };

// // Create a custom hook to access the database instance
// export const useFirebase = () => {
//   const database = useContext(FirebaseContext);

//   if (!database) {
//     throw new Error("Firebase instance not initialized");
//   }

//   return database;
// };

const App = () => {
  // const database = useFirebase();
  //   const writeTestData = () => {
  //     const dbRef = ref(database, "test-data");
  //     set(dbRef, { value: "lets gooooooooooooo" });
  //   };
  //   const listenForChanges = () => {
  //     const dbRef = ref(database, "test-data");
  //     onValue(dbRef, (snapshot) => {
  //       console.log("Data changed:", snapshot.val());
  //     });
  //   };

  //   // Listen for any db changes under test-data
  //   useEffect(() => {
  //     listenForChanges();
  //   }, []);

  return (
    <FirebaseProvider>
      <TestButton />
    </FirebaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
