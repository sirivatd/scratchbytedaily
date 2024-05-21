/**
 * Inspiration: https://dribbble.com/shots/8257559-Movie-2-0
 *
 */
import React, { useEffect } from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Animated,
  TouchableNativeFeedback,
  Platform,
  SafeAreaView
} from "react-native";
import { Image } from "expo-image";
const { width, height } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";
import Svg, { Rect } from "react-native-svg";
import Probability from './Probability';

const SPACING = 10;
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const Loading = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.paragraph}>Loading...</Text>
  </View>
);

const Backdrop = ({ rewards, scrollX }) => {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: "absolute" }}>
      <FlatList
        data={rewards}
        keyExtractor={(item) => item.key + "-backdrop"}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }

          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [-width, 0],
          });
          return (
            <MaskedView
              style={{ position: "absolute" }}
              maskElement={
                <AnimatedSvg
                  width={width}
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                  style={{ transform: [{ translateX }] }}
                >
                  <Rect x="0" y="0" width={width} height={height} fill="red" />
                </AnimatedSvg>
              }
            >
              <Image
                source={item.backdrop}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: "absolute",
                }}
                contentFit="cover"
                cachePolicy="memory-disk"
              />
            </MaskedView>
          );
        }}
      />
      <LinearGradient
        colors={["rgba(0, 0, 0, 0)", "white"]}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
};

const RewardsList = () => {
  const [rewards, setRewards] = React.useState([{ key: "empty-left" },
  {
    backdrop: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_backdrop.png?alt=media&token=1dec9edd-e2e3-40c4-b901-28ccd1e68304',
    image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_poster.png?alt=media&token=4e66c29e-16bc-4b8d-aecb-88ec19cf677c',
    description: 'Assorted selection of fun stickers.',
    name: "TikTok Sticker",
    probability: '1 out of 5 cards',
  }, 
  {
    backdrop: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_backdrop.png?alt=media&token=1dec9edd-e2e3-40c4-b901-28ccd1e68304',
    image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_poster.png?alt=media&token=4e66c29e-16bc-4b8d-aecb-88ec19cf677c',
    description: 'Cute, soft plushie to collect.',
    name: "Mini Plushie",
    probability: '1 out of 20 cards',
  },
  {
    backdrop: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_backdrop.png?alt=media&token=1dec9edd-e2e3-40c4-b901-28ccd1e68304',
    image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_poster.png?alt=media&token=4e66c29e-16bc-4b8d-aecb-88ec19cf677c',
    description: 'High-quality cotton TikTok brand.',
    name: "TikTok T-Shirt",
    probability: '1 out of 35 cards',
  },
  {
    backdrop: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_backdrop.png?alt=media&token=1dec9edd-e2e3-40c4-b901-28ccd1e68304',
    image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_poster.png?alt=media&token=4e66c29e-16bc-4b8d-aecb-88ec19cf677c',
    description: 'Multiple colors and sizes available.',
    name: "TikTok Hoodie",
    probability: '1 out of 50 cards',
  },
  {
    backdrop: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_backdrop.png?alt=media&token=1dec9edd-e2e3-40c4-b901-28ccd1e68304',
    image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_poster.png?alt=media&token=4e66c29e-16bc-4b8d-aecb-88ec19cf677c',
    description: 'Apple Watch latest version.',
    name: "Apple Watch 9",
    probability: '1 out of 250 cards',
  },
  {
    backdrop: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_backdrop.png?alt=media&token=1dec9edd-e2e3-40c4-b901-28ccd1e68304',
    image: 'https://firebasestorage.googleapis.com/v0/b/qfluence.appspot.com/o/strangers_poster.png?alt=media&token=4e66c29e-16bc-4b8d-aecb-88ec19cf677c',
    description: 'Lunch of your choice with TikTok CEO.',
    name: "Lunch with Shou Chew",
    probability: '1 out of 500 cards',
  },
  { key: "empty-right" }]);
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <Backdrop rewards={rewards} scrollX={scrollX} />
      <StatusBar barStyle="dark-content" />
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={rewards}
        keyExtractor={(item) => item.key}
        horizontal
        bounces={false}
        decelerationRate={Platform.OS === "ios" ? 0 : 0.98}
        renderToHardwareTextureAndroid
        contentContainerStyle={{ alignItems: "center" }}
        snapToInterval={ITEM_SIZE}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
        renderItem={({ item, index }) => {
          if (!item.image) {
            return <View style={{ width: EMPTY_ITEM_SIZE }} />;
          }

          const inputRange = [
            (index - 2) * ITEM_SIZE,
            (index - 1) * ITEM_SIZE,
            index * ITEM_SIZE,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [20, -10, 20],
            extrapolate: "clamp",
          });

          return (
            <TouchableNativeFeedback
              onPress={() => {
                console.log("pressed");
              }}
            >
              <View style={{ width: ITEM_SIZE, position: "relative",  }}>
                <Animated.View
                  style={{
                    marginHorizontal: SPACING,
                    alignItems: "center",
                    transform: [{ translateY }],
                    borderRadius: 34,
                  }}
                >
                  <Image
                    source={item.image}
                    style={styles.posterImage}
                    contentFit="cover"
                  />
                  <View
                    style={{
                      padding: SPACING * 2,
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.90)",
                      position: "absolute",
                      left: 0,
                      right: 0,
                      bottom: 0,
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        color: "white",
                        marginBottom: 5,
                      }}
                      numberOfLines={1}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "lightgray",
                        marginBottom: 10,
                      }}
                      numberOfLines={1}
                    >
                      {item.description}
                    </Text>
                    <Probability probability={item.probability} />
                  </View>
                </Animated.View>
              </View>
            </TouchableNativeFeedback>
          );
        }}
      />
    </SafeAreaView>
  );
};

export default RewardsList;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  posterImage: {
    width: "100%",
    height: ITEM_SIZE * 1.7,
    borderRadius: 24,
    margin: 0,
    resizeMode: "cover",
  },
});
