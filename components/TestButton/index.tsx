import { StyleSheet, Text, View } from "react-native";
import { ref, set, onValue } from "firebase/database";
import { Button } from "tamagui";
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
      <Text>Bytequest</Text>
      <Button
        onPress={writeTestData}
        color="red"
        accessibilityLabel="Add test data for debugging button"
      >
        Test paper ui integration
      </Button>
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
