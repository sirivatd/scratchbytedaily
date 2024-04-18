import { StyleSheet, Text, View } from "react-native";
import { ref, set, onValue } from "firebase/database";
import { Button } from "tamagui";
import { useFirebase } from "./../../providers/FirebaseProvider";
import Icon from 'react-native-vector-icons/Ionicons';
import LottieView from "lottie-react-native";

const SplashScreen = ({ navigation }) => {
  const database = useFirebase();
  const writeTestData = () => {
    const dbRef = ref(database, "test-data");
    set(dbRef, { value: "hopefully i fixed that cycle issue" });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', margin: 0 }}>
        <LottieView
            style={{ width: '100%', height: '100%' }}
            source={require("../../assets/animations/SplashTransition.json")}
            autoPlay
            loop={false}
            resizeMode="cover"
            onAnimationFinish={() => navigation.navigate('Home')}
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

export default SplashScreen;
