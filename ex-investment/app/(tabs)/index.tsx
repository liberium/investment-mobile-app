import { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { UserAvatar, ExchangerList } from "@/components";
import type { Exchanger } from "@/components/exchanger-list";

export default function ExchangeScreen() {
  const [selectedViewIndex, setSelectedViewIndex] = useState(0);
  const navigation: any = useNavigation();

  const exchangers: Exchanger[] = [
    {
      id: "1",
      destinationCurrency: "USDT",
      exchangeRate: 1.087,
      name: "ATM Cryptwolf",
      address: "Mainly st. 209/44",
      proximityMeters: 700,
      coordinates: { latitude: 0, longitude: 0 },
      exchangeRateGrowthRate: 3,
    },
    {
      id: "2",
      destinationCurrency: "USDT",
      exchangeRate: 1.07,
      name: "ATM Donglez",
      address: "Bosted st. 19",
      proximityMeters: 1300,
      coordinates: { latitude: 0, longitude: 0 },
      exchangeRateGrowthRate: -1,
    },
  ];

  function handleShowOnMap() {}

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
                values={["MAP", "LIST"]}
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
        <ExchangerList exchangers={exchangers} onShowOnMap={handleShowOnMap} />
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
