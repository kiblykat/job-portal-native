import { Stack } from "expo-router";
// import { useCallback } from "react";
// import useFonts from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync(); -----this is the cause of the white screen error
const Layout = () => {
  // const [fontsLoaded] = useFonts({
  //   DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
  //   DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
  //   DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  // });

  // //similar to useEffect
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) return null;

  return <Stack />;
};

export default Layout;
