import { View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { HeaderBackground, getHeaderTitle } from "@react-navigation/elements";
import { Pressable, useColorScheme } from "react-native";
import { Icon } from "@/components";
import Colors from "@/constants/Colors";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "signals",
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      // initialRouteName="signals"
      screenOptions={({ navigation }) => ({
        tabBarLabelStyle: { textTransform: "uppercase" },
        tabBarActiveTintColor: "#E31212",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          height: 62,
          paddingTop: 8,
          paddingBottom: 20,
          paddingHorizontal: 16,
          backgroundColor: "#12141F",
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        headerStyle: {
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerBackground: () => (
          <HeaderBackground
            style={{
              padding: 16,
              backgroundColor: "#12141F",
              elevation: 0,
              shadowOpacity: 0,
              borderBottomWidth: 0,
            }}
          />
        ),
        headerTitleAlign: "left",
        headerTitleStyle: {
          fontFamily: "muller-bold",
          color: "#fff",
        },
        headerLeft: () => {
          return (
            <Pressable
              onPress={() => {
                navigation.openDrawer();
              }}
              style={{ marginLeft: 16 }}
            >
              <Icon name="hamburger" />
            </Pressable>
          );
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Signals",
          tabBarIcon: ({ focused }) => <Icon name="signals" active={focused} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="exchange"
        options={{
          title: "Exchange",
          tabBarIcon: ({ focused }) => (
            <Icon name="exchange" active={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="screener"
        options={{
          title: "Screener",
          tabBarIcon: ({ focused }) => (
            <Icon name="screener" active={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ focused }) => (
            <Icon name="portfolio" active={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="trading"
        options={{
          title: "Trading",
          tabBarIcon: ({ focused }) => <Icon name="trading" active={focused} />,
        }}
      />
    </Tabs>
  );
}
