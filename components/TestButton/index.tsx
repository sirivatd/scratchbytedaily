import { StyleSheet, Button, Text, View } from "react-native";
import { ref, set, onValue } from "firebase/database";
import { useFirebase } from "./../../providers/FirebaseProvider";

const TestButton = () => {
  const database = useFirebase();
  const writeTestData = () => {
    const dbRef = ref(database, "test-data");
    set(dbRef, { value: "hopefully i fixed that cycle issue" });
  };

  return (
    <View style={styles.container}>
      <Text>CALIBRATION</Text>
      <Text>by fake software</Text>
      <Button
        onPress={writeTestData}
        title="Test Firebase db integration"
        color="red"
        accessibilityLabel="Add test data for debugging button"
      />
    </View>
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

export default TestButton;
