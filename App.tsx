import { createContext, useContext } from "react";
import { StyleSheet, Button, Text } from "react-native";

import { ref, set, onValue, getDatabase } from "firebase/database";
import { createTamagui, TamaguiProvider, View } from 'tamagui';
import { config } from '@tamagui/config/v3';

import TestButton from "./components/TestButton";
import FirebaseProvider from "./providers/FirebaseProvider";

// you usually export this from a tamagui.config.ts file
const tamaguiConfig = createTamagui(config)

// make TypeScript type everything based on your config
type Conf = typeof tamaguiConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends Conf {}
}

const App = () => {
  return (
    <TamaguiProvider config={tamaguiConfig}>
    <FirebaseProvider>
      <TestButton />
    </FirebaseProvider>
    </TamaguiProvider>
  );
};

export default App;
