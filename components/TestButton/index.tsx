import { createContext, useContext, useEffect } from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { ref, set, onValue, getDatabase } from "firebase/database";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./firebaseConfig.js";
import { useFirebase } from '../../App.tsx';

const TestButton = () => {
const database = useFirebase();
  const writeTestData = () => {
    const dbRef = ref(database, "test-data");
    set(dbRef, { value: "mutating db through context" });
  };

  return (
      <View style={styles.container}>
        <Text>CALIBRATION</Text>
        <Text>by fake software</Text>
        <Button
          onPress={writeTestData}
          title='Test Firebase db integration'
          color="red"
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

export default TestButton;
