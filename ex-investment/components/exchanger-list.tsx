import {
  View,
  Text,
  Pressable,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from "react-native";
import Icon from "@/components/icon";

export type Exchanger = {
  id: string;
  destinationCurrency: string;
  exchangeRate: number;
  name: string;
  address: string;
  proximityMeters: number;
  coordinates: Coordinates;
  exchangeRateGrowthRate: number;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export default function ExchangerList({
  exchangers,
  onShowOnMap,
}: {
  exchangers: Exchanger[];
  onShowOnMap: (exchangerId: string) => void;
}) {
  function handleShowOnMap(exchangerId: string) {
    onShowOnMap(exchangerId);
  }

  return (
    <FlatList
      style={{ zIndex: -1 }}
      data={exchangers}
      renderItem={({ item: exchanger }: ListRenderItemInfo<Exchanger>) => (
        <Exchanger exchanger={exchanger} onShowOnMap={handleShowOnMap} />
      )}
      keyExtractor={(exchanger) => exchanger.id}
      ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
    />
  );
}

function Exchanger({
  exchanger: {
    id,
    destinationCurrency,
    exchangeRate,
    exchangeRateGrowthRate,
    name,
    address,
    proximityMeters,
  },
  onShowOnMap,
}: {
  exchanger: Exchanger;
  onShowOnMap: (exchangerId: string) => void;
}) {
  function handleShowOnMap(exchangerId: string) {
    onShowOnMap(exchangerId);
  }

  return (
    <View style={styles.exchanger}>
      <View style={styles.exchangerInfo}>
        <View style={styles.price}>
          <GrowthRateIndicator
            style={{ marginTop: 2, marginRight: 4 }}
            value={exchangeRateGrowthRate}
          />
          <Text
            style={styles.priceText}
          >{`${destinationCurrency} ${exchangeRate}`}</Text>
        </View>
        <View>
          <Text style={[styles.nameText]}>{name}</Text>
          <View style={{ flexDirection: "row", gap: 8 }}>
            <Text style={styles.addressText}>{address}</Text>
            <Text style={styles.proximityText}>
              {formatProximity(proximityMeters)}
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => handleShowOnMap(id)}
        style={styles.showOnMapButton}
      >
        <Icon name="arrow" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  exchanger: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1F212E",
  },
  exchangerInfo: {
    gap: 8,
  },
  price: {
    flexDirection: "row",
  },
  priceText: {
    color: "#fff",
    fontFamily: "muller-bold",
    fontSize: 16,
    lineHeight: 19.2,
    letterSpacing: 0.32,
  },
  nameText: {
    color: "#707382",
    fontFamily: "muller-bold",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    textTransform: "uppercase",
  },
  addressText: {
    color: "#707382",
    fontFamily: "muller",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
  },
  proximityText: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
    color: "#27AE60",
  },
  showOnMapButton: {
    width: 32,
    height: 32,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#12141F",
  },
});

function GrowthRateIndicator({
  value,
  style,
}: {
  value: number;
  style: StyleProp<ViewStyle>;
}) {
  let arrows;
  if (value > 0)
    arrows = Array.from({ length: value }, (_, idx) => (
      <Icon name="arrowUp" size={4} key={idx} />
    ));
  else
    arrows = Array.from({ length: -value }, (_, idx) => (
      <Icon name="arrowDown" size={4} key={idx} />
    ));
  return <View style={style}>{arrows}</View>;
}

function formatProximity(proximityMeters: number) {
  if (proximityMeters < 1000) return `${proximityMeters}m`;
  else return `${(proximityMeters / 1000).toFixed(1)}km`;
}
