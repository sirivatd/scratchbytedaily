import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View, Pressable, Image, Modal } from "react-native";
import { ref, set, onValue } from "firebase/database";
import { Button } from "tamagui";
import { useFirebase } from "./../../providers/FirebaseProvider";
import Icon from "react-native-vector-icons/Ionicons";
import LottieView from "lottie-react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const HomeScreen = ({ navigation }) => {
  const [orientation, setOrientation] = useState(1);
  const [playModalVisible, setPlayModalVisible] = useState(false);

  const database = useFirebase();

  const writeTestData = () => {
    const dbRef = ref(database, "test-data");
    set(dbRef, { value: "hopefully i fixed that cycle issue" });
  };

  const lockOrientation = async () => {
    console.log("locking orientation");
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP,
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
        source={require("../../assets/animations/DayBackground.json")}
        autoPlay
        loop
        speed={0.25}
        resizeMode="cover"
      />
      <View
        style={{
          position: "absolute",
          top: "5%",
          right: 15,
          backgroundColor: "black",
        }}
      >
        <Button onPress={() => navigation.navigate("Settings")}>
          ?
        </Button>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={playModalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setPlayModalVisible(!playModalVisible);
        }}>
        <View>
          <View>
            <Text>Hello World!</Text>
            <Pressable
              onPress={() => setPlayModalVisible(!playModalVisible)}>
              <Text>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View
        style={{
          position: "absolute",
          height: 200,
          left: 0,
          right: 0,
          top: "5%",
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <Image
          source={require("../../assets/img/calibration_full_logo_white.png")}
          style={{ width: "100%", flex: 1, resizeMode: "contain" }}
        />
      </View>
      <View
        style={{
          position: "absolute",
          height: "15%",
          left: 0,
          right: 0,
          bottom: 0,
          paddingLeft: 10,
          paddingRight: 10,
          backgroundColor: "black",
          opacity: 0.5,
        }}
      >
        <Button
          style={{ width: "30%" }}
          onPress={() => setPlayModalVisible(true)}
        >
          Play
        </Button>
        <Text style={{ color: "white" }}>123 online</Text>
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
