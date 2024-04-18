import { useEffect } from "react";
import { createTamagui, TamaguiProvider } from "tamagui";
import { config } from "@tamagui/config/v3";
import FirebaseProvider from "./providers/FirebaseProvider";
import * as ScreenOrientation from "expo-screen-orientation";

// Page naviga†ion setup
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Local imports
import HomeScreen from "./pages/HomeScreen";
import SplashScreen from "./pages/SplashScreen";
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
const Tab = createBottomTabNavigator();

const App = () => {
  const lockOrientation = async () => {
    console.log("locking orientation");
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  };

  useEffect(() => {
    lockOrientation();
  }, []);

  const HomeTabScreen = () => {
    return (
      <Tab.Navigator>
         <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
            <Tab.Screen name="Inventory" component={MyProfile} />
            <Tab.Screen name="Store" component={MyProfile} />
            <Tab.Screen name="Profile" component={MyProfile} />
      </Tab.Navigator>
    );
  }

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <FirebaseProvider>
          <Stack.Navigator>
            <Stack.Screen   
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false, orientation: 'portrait_up' }}
            />
         <Stack.Screen
              name="HomeTabScreen"
              component={HomeTabScreen}
              options={{ title: "Welcome", headerShown: false }}
            />
            <Stack.Screen name="LegalDisclosures" component={TestButton} />
            <Stack.Screen name="Settings" component={MyProfile} />
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
