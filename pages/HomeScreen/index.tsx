import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ref, set, onValue } from "firebase/database";
import { Button } from "tamagui";
import { useFirebase } from "./../../providers/FirebaseProvider";
import Icon from "react-native-vector-icons/Ionicons";
import LottieView from "lottie-react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const HomeScreen = ({ navigation }) => {
    const [orientation, setOrientation] = useState(1);

  const database = useFirebase();
  const writeTestData = () => {
    const dbRef = ref(database, "test-data");
    set(dbRef, { value: "hopefully i fixed that cycle issue" });
  };

  const lockOrientation = async () => {
    console.log("locking orientation");
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
    const o = await ScreenOrientation.getOrientationAsync();
    setOrientation(o);
  };

  useEffect(() => {
    lockOrientation();
  }, []);

return (
    <View style={{ flex: 1 }}>
        <LottieView
            style={{ flex: 1 }}
            source={require("../../assets/animations/NightBackground.json")}
            autoPlay
            loop
            speed={0.25}
            resizeMode="cover"
        />
        <View style={{ position: "absolute", height: 200, left: 0, right: 0, top: '10%', flex: 1, paddingLeft: 10, paddingRight: 10 }}>
            <Image
                source={require("../../assets/img/calibration_full_logo_white.png")}
                style={{ width: '100%', flex: 1, resizeMode: 'contain'}}
            />
        </View>
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
