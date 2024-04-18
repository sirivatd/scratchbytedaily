import { createTamagui, TamaguiProvider } from "tamagui";
import { config } from "@tamagui/config/v3";
import FirebaseProvider from "./providers/FirebaseProvider";

// Page naviga†ion setup
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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

const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <FirebaseProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Why Splash no work?"
              component={SplashScreen}
              options={{ title: "Please work lottie" }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Welcome" }}
            />
            <Stack.Screen name="LegalDisclosures" component={TestButton} />
            <Stack.Screen name="Profile" component={MyProfile} />
            <Stack.Screen name="Settings" component={MyProfile} />
            <Stack.Screen name="Trophies" component={MyProfile} />
            <Stack.Screen name="GlobalChat" component={MyProfile} />
            <Stack.Screen name="GameCenter" component={MyProfile} />
            <Stack.Screen name="Inventory" component={MyProfile} />
            <Stack.Screen name="Store" component={MyProfile} />
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
