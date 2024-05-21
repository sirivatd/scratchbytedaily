import { useEffect } from "react";
import { createTamagui, TamaguiProvider, View } from "tamagui";
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
import RewardsScreen from "./pages/RewardsScreen";
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
        activeColor="#1A708E"
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
        <Tab.Screen
          name="Rewards"
          component={RewardsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="hand-coin" color={color} size={26} />
            )
          }}
        />
        <Tab.Screen
          name="Account"
          component={MyProfile}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            )
          }}
        />
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
          </Stack.Navigator>
        </FirebaseProvider>
      </NavigationContainer>
    </TamaguiProvider>
  );
};

export default App;
