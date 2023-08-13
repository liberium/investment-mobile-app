import { Pressable } from "react-native";
import { Tabs } from "expo-router";
import { HeaderBackground } from "@react-navigation/elements";
import { Icon } from "@/components";

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "signals",
};

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="signals"
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
        name="signals"
        options={{
          title: "Signals",
          tabBarIcon: ({ focused }) => <Icon name="signals" active={focused} />,
        }}
      />
      <Tabs.Screen
        name="index"
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
