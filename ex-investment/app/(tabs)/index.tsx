import { useState } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Tabs } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import DropDownPicker from "react-native-dropdown-picker";
import { UserAvatar, ExchangerList, Icon } from "@/components";
import type { Exchanger } from "@/components/exchanger-list";

export default function ExchangeScreen() {
  const [selectedViewIndex, setSelectedViewIndex] = useState(1);
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
  const [sourceCurrencyPickerOpen, setSourceCurrencyPickerOpen] =
    useState(false);
  const [sourceCurrency, setSourceCurency] = useState("usd");
  const [destinationCurrencyPickerOpen, setDestinationCurrencyPickerOpen] =
    useState(false);
  const [destinationCurrency, setDestinationCurency] = useState("usdt");
  const [items, setItems] = useState([
    { label: "USD", value: "usd", icon: () => <Icon name="usd" /> },
    {
      label: "USDT",
      value: "usdt",
      icon: () => <Icon name="usdt" />,
    },
  ]);

  function handleShowOnMap() {}

  function switchCurrencies() {
    setSourceCurency(destinationCurrency);
    setDestinationCurency(sourceCurrency);
  }

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
      <View style={styles.screen}>
        <View style={styles.filter}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <DropDownPicker
              open={sourceCurrencyPickerOpen}
              value={sourceCurrency}
              items={items}
              setOpen={setSourceCurrencyPickerOpen}
              setValue={setSourceCurency}
              setItems={setItems}
              style={styles.picker}
              containerStyle={{
                width: "auto",
              }}
              labelStyle={styles.pickerLabelText}
              placeholderStyle={styles.pickerLabelText}
              ArrowUpIconComponent={() => <Icon name="dropdown" />}
              ArrowDownIconComponent={() => <Icon name="dropdown" />}
              dropDownContainerStyle={{
                borderColor: "#494D61",
                backgroundColor: "#12141F",
              }}
              listItemLabelStyle={styles.pickerLabelText}
              itemSeparator={true}
              itemSeparatorStyle={{
                backgroundColor: "#494D61",
              }}
            />
            <Pressable onPress={switchCurrencies}>
              <Icon name="switch" />
            </Pressable>
            <DropDownPicker
              open={destinationCurrencyPickerOpen}
              items={items}
              setItems={setItems}
              value={destinationCurrency}
              setValue={setDestinationCurency}
              setOpen={setDestinationCurrencyPickerOpen}
              style={styles.picker}
              containerStyle={{
                width: "auto",
              }}
              labelStyle={styles.pickerLabelText}
              placeholderStyle={styles.pickerLabelText}
              dropDownContainerStyle={{
                borderColor: "#494D61",
                backgroundColor: "#12141F",
              }}
              listItemLabelStyle={styles.pickerLabelText}
              itemSeparator={true}
              itemSeparatorStyle={{
                backgroundColor: "#494D61",
              }}
              ArrowUpIconComponent={() => <Icon name="dropdown" />}
              ArrowDownIconComponent={() => <Icon name="dropdown" />}
            />
          </View>
          <Pressable
            style={{
              width: 48,
              height: 48,
              borderRadius: 48,
              borderWidth: 1,
              borderColor: "#494D61",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Icon name="filter" />
          </Pressable>
        </View>
        <ExchangerList exchangers={exchangers} onShowOnMap={handleShowOnMap} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#12141F",
  },
  filter: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  picker: {
    width: 120,
    paddingHorizontal: 8,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#494D61",
    backgroundColor: "#12141F",
  },
  pickerLabelText: {
    color: "#fff",
    fontFamily: "muller",
    fontSize: 12,
    lineHeight: 14.4,
    letterSpacing: 0.24,
    textTransform: "uppercase",
  },
});
