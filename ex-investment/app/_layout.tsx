import { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
  useColorScheme,
  Dimensions,
} from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Link, SplashScreen, Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { useFonts } from "expo-font";
import Icon from "@/components/icon";
import { UserAvatar } from "@/components";

export { ErrorBoundary } from "expo-router";
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)/exchange",
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

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Drawer
        drawerContent={(props) => <DrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            width: Dimensions.get("window").width,
          },
        }}
      >
        <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
      </Drawer>
    </ThemeProvider>
  );
}

function DrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView style={styles.drawer} {...props}>
      <Pressable
        style={styles.panel}
        onPress={() => props.navigation.closeDrawer()}
      >
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <UserAvatar />
          <View>
            <Text style={styles.usernameText}>tradaniac007</Text>
            <Text style={styles.uidText}>UID: 23508320230572396723</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
          <Icon name="copy" />
          <Icon name="forward" />
        </View>
      </Pressable>
      <View style={{ gap: 8, padding: 16 }}>
        <View style={styles.section}>
          <DrawerItem
            label="Rating"
            style={[
              styles.item,
              { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
            ]}
            labelStyle={styles.label}
            icon={() => <Icon style={styles.icon} name="forward" />}
            onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
            label="Activity"
            style={styles.item}
            labelStyle={styles.label}
            icon={() => <Icon style={styles.icon} name="forward" />}
            onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
            label="Notifications"
            style={[
              styles.item,
              {
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              },
            ]}
            labelStyle={styles.label}
            icon={() => <Icon style={styles.icon} name="forward" />}
            onPress={() => props.navigation.closeDrawer()}
          />
        </View>
        <ImageBackground
          source={require("@/assets/images/portfolio-drawer-item-bg.png")}
          imageStyle={styles.portfolioBg}
        >
          <DrawerItem
            label="Buy Portfolio"
            style={[styles.item, styles.portfolio]}
            labelStyle={[styles.label, styles.portfolioLabel]}
            icon={() => <Icon style={styles.icon} name="portfolioContour" />}
            onPress={() => props.navigation.closeDrawer()}
          />
        </ImageBackground>
        <View style={styles.section}>
          <DrawerItem
            label="Verification"
            style={[
              styles.item,
              { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
            ]}
            labelStyle={styles.label}
            icon={() => <Icon style={styles.icon} name="forward" />}
            onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
            label="Security"
            style={styles.item}
            labelStyle={styles.label}
            icon={() => <Icon style={styles.icon} name="forward" />}
            onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
            label="Preferences"
            style={[
              styles.item,
              {
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              },
            ]}
            labelStyle={styles.label}
            icon={() => <Icon style={styles.icon} name="forward" />}
            onPress={() => props.navigation.closeDrawer()}
          />
        </View>
        <View style={styles.section}>
          <DrawerItem
            label="Support Center"
            style={[
              styles.item,
              { backgroundColor: "none" },
              { borderTopLeftRadius: 8, borderTopRightRadius: 8 },
            ]}
            labelStyle={styles.label}
            icon={() => <Icon style={styles.icon} name="forward" />}
            onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
            label="Referral"
            style={[styles.item, { backgroundColor: "none" }]}
            labelStyle={styles.label}
            icon={() => <Icon style={styles.icon} name="forward" />}
            onPress={() => props.navigation.closeDrawer()}
          />
          <DrawerItem
            label="About"
            style={[
              styles.item,
              { backgroundColor: "none" },
              {
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              },
            ]}
            labelStyle={styles.label}
            icon={() => <Icon style={styles.icon} name="forward" />}
            onPress={() => props.navigation.closeDrawer()}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: "#12141F",
  },
  panel: {
    padding: 16,
    backgroundColor: "#1F212E",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  usernameText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "muller-bold",
    lineHeight: 19.2,
    letterSpacing: 0.32,
  },
  uidText: {
    color: "#707382",
    fontSize: 10,
    fontFamily: "muller",
    lineHeight: 12,
    letterSpacing: 0.2,
  },
  section: {
    gap: 1,
  },
  item: {
    marginHorizontal: 0,
    marginVertical: 0,
    padding: 8,
    borderRadius: 0,
    backgroundColor: "#1F212E",
  },
  icon: {
    alignSelf: "center",
    position: "absolute",
    right: 5,
  },
  label: {
    right: 32,
    color: "#fff",
    fontSize: 12,
    fontFamily: "muller",
    lineHeight: 14.4,
    letterSpacing: 0.24,
  },
  portfolioBg: {
    resizeMode: "cover",
    borderRadius: 8,
  },
  portfolio: {
    borderRadius: 8,
    backgroundColor: "none",
  },
  portfolioLabel: {
    color: "#12141F",
    fontFamily: "muller-medium",
  },
});
