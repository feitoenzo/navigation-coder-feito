import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

import ShopNavigator from "./src/navigation/ShopNavigator";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  const [isPortrait, setIsPortrait] = useState(true);

  const statePortrait = () => setIsPortrait(onPortrait);

  const onPortrait = () => {
    const dim = Dimensions.get("screen");
    return dim.height > dim.width;
  };

  useEffect(() => {
    Dimensions.addEventListener("change", statePortrait);
  }, []);

   const [fontsLoaded] = useFonts({
    InstrumentSerif: require("./src/assets/fonts/InstrumentSerif-Regular.ttf"),
  }); 

  if (!fontsLoaded) {
    return null;
  }

  return <ShopNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "black",
  },
});
