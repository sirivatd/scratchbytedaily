import { useEffect } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { ref, set, onValue, getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebaseConfig.js";

const App = () => {
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
  const writeTestData = () => {
    const dbRef = ref(database, "test-data");
    set(dbRef, { value: "lets gooooooooooooo" });
  };
  const listenForChanges = () => {
    const dbRef = ref(database, "test-data");
    onValue(dbRef, (snapshot) => {
      console.log("Data changed:", snapshot.val());
    });
  };

  // Listen for any db changes under test-data
  useEffect(() => {
    listenForChanges();
  }, []);

  return (
    <View style={styles.container}>
      <Text>CALIBRATION</Text>
      <Text>by fake software</Text>
      <Button
        onPress={writeTestData}
        title='Add test data'
        color="#841584"
        accessibilityLabel="Add test data for debugging button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
