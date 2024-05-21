import { useEffect } from "react";
import { createTamagui, TamaguiProvider } from "tamagui";
import { config } from "@tamagui/config/v3";
import FirebaseProvider from "./providers/FirebaseProvider";
import * as ScreenOrientation from "expo-screen-orientation";

// Page naviga†ion setup
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// Local imports
import HomeScreen from "./pages/HomeScreen";
import SplashScreen from "./pages/SplashScreen";
import SettingsScreen from "./pages/SettingsScreen";
import TestButton from "./components/TestButton";
import MyProfile from "./pages/MyProfile";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config);

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig;
declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends Conf {}
}

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const lockOrientation = async () => {
    console.log("locking orientation");
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP,
    );
  };

  useEffect(() => {
    lockOrientation();
  }, []);

  const HomeTabScreen = () => {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="none"
        labeled
        activeColor="red"
        barStyle={{ backgroundColor: "black", paddingBottom: 48 }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Rewards" component={MyProfile} />
        <Tab.Screen name="Settings" component={MyProfile} />
      </Tab.Navigator>
    );
  };

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <FirebaseProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false, orientation: "portrait_up" }}
            />
            <Stack.Screen
              name="HomeTabScreen"
              component={HomeTabScreen}
              options={{ title: "Welcome", headerShown: false }}
            />
            <Stack.Screen name="LegalDisclosures" component={TestButton} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
            <Stack.Screen name="Trophies" component={MyProfile} />
            <Stack.Screen name="GameCenter" component={MyProfile} />
            <Stack.Screen name="OpenPack" component={MyProfile} />
            <Stack.Screen name="Tutorial" component={MyProfile} />

            {/* Screens required for gameplay */}
            {/* TODO: Maybe extract these into their own stack? */}
            {/* These screens will be different based on whether coop or online was selected */}
            <Stack.Screen name="Lobby" component={MyProfile} />
            <Stack.Screen name="PromptGeneration" component={MyProfile} />
            <Stack.Screen name="OnlineGameRoom" component={MyProfile} />
            <Stack.Screen name="GameReplay" component={MyProfile} />
            <Stack.Screen name="GameResults" component={MyProfile} />
            <Stack.Screen name="GameRewards" component={MyProfile} />
          </Stack.Navigator>
        </FirebaseProvider>
      </NavigationContainer>
    </TamaguiProvider>
  );
};

export default App;
