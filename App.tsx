import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Provider } from "react-redux";

import { HeaderMain } from "./src/widgets/HeaderMain";
import { TimerMain } from "widgets/TimerMain";
import { FooterMain } from "widgets/FooterMain";
import { constants } from "shared/constants";
import { store } from "./src/shared/store";

export default function App() {
  //Fonts
  const [fontsLoaded] = useFonts({
    "roboto-mono": require("./assets/fonts/RobotoMono.ttf"),
    "open-sans": require("./assets/fonts/OpenSans.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <StatusBar style="auto" />
        <HeaderMain />
        <TimerMain />
        <FooterMain />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.primaryColor,
  },
});
