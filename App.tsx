import { useEffect } from "react-native";
import { createContext, useContext } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

import { ref, set, onValue, getDatabase } from "firebase/database";
import TestButton from "./components/TestButton";
import FirebaseProvider from "./providers/FirebaseProvider";

const App = () => {
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
