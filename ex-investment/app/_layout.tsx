import { useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Link, SplashScreen, Stack } from "expo-router";
export { ErrorBoundary } from "expo-router";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useFonts } from "expo-font";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    "muller-light": require("../assets/fonts/muller-light.otf"),
    muller: require("../assets/fonts/muller-regular.otf"),
    "muller-medium": require("../assets/fonts/muller-medium.otf"),
    "muller-bold": require("../assets/fonts/muller-bold.otf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  function CustomDrawerContent(props: DrawerContentComponentProps) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
          label="Website"
          onPress={() => props.navigation.closeDrawer()}
        />
        <Link href={"/alpha"} onPress={() => props.navigation.closeDrawer()}>
          Alpha
        </Link>
        <Link href={"/beta"} onPress={() => props.navigation.closeDrawer()}>
          Beta
        </Link>
        <Link href={"/charlie"} onPress={() => props.navigation.closeDrawer()}>
          Charlie
        </Link>
      </DrawerContentScrollView>
    );
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
      </Drawer>
      {/* <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)" />
      </Stack> */}
    </ThemeProvider>
  );
}
