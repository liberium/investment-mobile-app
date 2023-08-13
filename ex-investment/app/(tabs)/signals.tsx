import { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { UserAvatar, SignalList } from "@/components";
import type { Signal } from "@/components/signal-list";
const signals = [
  {
    id: "1",
    asset: { base: "BTC", quote: "USD" },
    direction: "Sell",
    price: 54315,
    takeProfit: 49872,
    stopLoss: 54984,
    status: "inactive",
  },
  {
    id: "2",
    asset: { base: "BTC", quote: "USD" },
    direction: "Sell",
    price: 54315,
    takeProfit: 49872,
    stopLoss: 54984,
    status: "processing",
  },
  {
    id: "3",
    asset: { base: "BTC", quote: "USD" },
    direction: "Sell",
    price: 54315,
    takeProfit: 49872,
    stopLoss: 54984,
    status: "processed",
  },
  {
    id: "4",
    asset: { base: "BTC", quote: "USD" },
    direction: "Sell",
    price: 54315,
    takeProfit: 49872,
    stopLoss: 54984,
    status: "failed",
  },
];

export default function SignalsScreen() {
  const [selectedViewIndex, setSelectedViewIndex] = useState(0);
  const navigation: any = useNavigation();

  function handleButtonPress(signalId: string) {}

  return (
    <>
      <Tabs.Screen
        options={{
          headerRight: () => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 12,
                marginRight: 16,
              }}
            >
              <SegmentedControl
                values={["CRYPTO", "STOCK"]}
                selectedIndex={selectedViewIndex}
                onChange={(event) => {
                  setSelectedViewIndex(event.nativeEvent.selectedSegmentIndex);
                }}
                style={{ width: 87, height: 24, borderRadius: 4 }}
                tintColor="#5D5FEF"
                backgroundColor="#232634"
                fontStyle={{
                  color: "#fff",
                  fontFamily: "muller-light",
                  fontSize: 8,
                }}
                activeFontStyle={{
                  color: "#fff",
                  fontFamily: "muller-light",
                  fontSize: 8,
                }}
              />
              <Pressable
                onPress={() => {
                  navigation.openDrawer();
                }}
              >
                {({ pressed }) => (
                  <UserAvatar style={{ opacity: pressed ? 0.5 : 1 }} />
                )}
              </Pressable>
            </View>
          ),
        }}
      />
      <View style={styles.container}>
        <SignalList
          signals={signals as Signal[]}
          onButtonPress={handleButtonPress}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#12141F",
  },
});
