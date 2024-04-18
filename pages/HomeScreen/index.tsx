import { StyleSheet, Text, View } from "react-native";
import { ref, set, onValue } from "firebase/database";
import { Button } from "tamagui";
import { useFirebase } from "./../../providers/FirebaseProvider";
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from "lottie-react-native";

const HomeScreen = ({ navigation }) => {
  const database = useFirebase();
  const writeTestData = () => {
    const dbRef = ref(database, "test-data");
    set(dbRef, { value: "hopefully i fixed that cycle issue" });
  };

  return (
    <View>
        <LottieView
            source={require("../../assets/animations/NightBackground.json")}
            autoPlay
            loop
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

export default HomeScreen;
