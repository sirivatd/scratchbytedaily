import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View, Pressable, Image, Modal } from "react-native";
import { ref, set, onValue } from "firebase/database";
import { Button } from "tamagui";
import { useFirebase } from "./../../providers/FirebaseProvider";
import Icon from "react-native-vector-icons/Ionicons";
import LottieView from "lottie-react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const coverImage = require("../../assets/img/cover.png");
const rewardImage = require("../../assets/img/reward.png");

import ScratchCard from "../../components/ScratchCard";
import ScratchView from "../../components/ScratchView";
import ScratchCardPreview from "../../components/ScratchCardPreview.tsx";

const DemoData: Array<ScratchCardCell> = [
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_0.png?alt=media&token=9514f69b-234d-4fed-a655-edbff983cb34',
      isHidden: false,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_0.png?alt=media&token=9514f69b-234d-4fed-a655-edbff983cb34',
      isHidden: false,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_1.png?alt=media&token=bac14c99-1248-4e06-ac38-bda0b9de012c',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_1.png?alt=media&token=bac14c99-1248-4e06-ac38-bda0b9de012c',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_0.png?alt=media&token=9514f69b-234d-4fed-a655-edbff983cb34',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_2.png?alt=media&token=b623cf3c-4f58-4496-9176-7554b4cc7922',
      isHidden: false,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_1.png?alt=media&token=bac14c99-1248-4e06-ac38-bda0b9de012c',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_2.png?alt=media&token=b623cf3c-4f58-4496-9176-7554b4cc7922',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_0.png?alt=media&token=9514f69b-234d-4fed-a655-edbff983cb34',
      isHidden: false,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_0.png?alt=media&token=9514f69b-234d-4fed-a655-edbff983cb34',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_0.png?alt=media&token=9514f69b-234d-4fed-a655-edbff983cb34',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_0.png?alt=media&token=9514f69b-234d-4fed-a655-edbff983cb34',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_0.png?alt=media&token=9514f69b-234d-4fed-a655-edbff983cb34',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_3.png?alt=media&token=0c226772-91ce-4691-a7a9-eb9c3b047eed0',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_0.png?alt=media&token=9514f69b-234d-4fed-a655-edbff983cb34',
      isHidden: true,
      isSelected: false,
  },
  {
      image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bs_part_3.png?alt=media&token=0c226772-91ce-4691-a7a9-eb9c3b047eed',
      isHidden: true,
      isSelected: false,
  },
];

const HomeScreen = ({ navigation }) => {
  const [orientation, setOrientation] = useState(1);
  const [playModalVisible, setPlayModalVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const logoImage = require("../../assets/img/placeholder.png");

  return (
    <View style={{ flex: 1 }}>
      <LottieView
        style={{ flex: 1 }}
        source={require("../../assets/animations/DayBackground.json")}
        autoPlay
        loop
        resizeMode="cover"
      />
      <View
        style={{
          position: "absolute",
          top: "27%",
          left: 15,
          right: 15,
          height: "56%",
        }}
      >
        {/* <ScratchView
        canvasStyles={{
          flex: 1,
        }}
          coverImage='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/tik-tok-channel-background-and-cover-design-template-a9d3d84fde5bcb4431c4a0940feadfbb_screen.jpg?ts=1637025346'
          rewardImage='data:image/jpeg;base64,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'
          imageWidth={300}
          imageHeight={300}
          applyGlow
          onReveal={() => Alert.alert('Revealed!')}
          scaleOnReveal={1.5}
          applyShadowBeneathCover
          borderRadius={16}
        /> */}
        {isPlaying && <ScratchCard data={DemoData} />}
        {!isPlaying && <ScratchCardPreview data={DemoData}/>}
      </View>

      <View
        style={{
          position: "absolute",
          height: 100,
          left: 15,
          right: 15,
          top: "9%",
          paddingLeft: 10,
          paddingRight: 10,
          opacity: 0.7,
          // backgroundColor: "yellow"
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ borderRadius: 12, overflow: 'hidden', width: 350, height: 100}}>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/bytescratch_logo.png?alt=media&token=e9368a54-848e-4ac7-bf0f-6ef61afdc140'
          style={{ width: '100%', height: 100, opacity: 0.9, }}
        />
        </View>

      </View>
      <View
        style={{
          position: "absolute",
          height: "15%",
          left: 0,
          right: 0,
          bottom: 0,
          paddingLeft: 15,
          paddingRight: 10,
          backgroundColor: "#177D9B",
          opacity: 0.9,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
        <Text style={{ color: "white", fontWeight: 'bold' }}>May 21, 2024</Text>
        <Text style={{ color: "white" }}>Check-in location: MTV</Text>
        </View>
        <Button
          style={{ width: "40%" }}
          onPress={() => setIsPlaying(!isPlaying)}
        >
          <Text>{isPlaying ? 'Cancel' : 'Check-in & Play'}</Text>
        </Button>
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
