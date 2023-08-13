import {
  View,
  Text,
  Pressable,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from "react-native";
import Icon from "@/components/icon";
import type { IconName } from "@/components/icon";

export type Signal = {
  id: string;
  asset: CurrencyPair;
  direction: Direction;
  price: number;
  takeProfit: number;
  stopLoss: number;
  status: SignalStatus;
};

enum SignalStatus {
  Inactive = "inactive",
  Processing = "processing",
  Processed = "processed",
  Failed = "failed",
}

type CurrencyPair = {
  base: Currency;
  quote: Currency;
};

export enum Currency {
  USD = "USD",
  BTC = "BTC",
}

enum Direction {
  Sell = "Sell",
  Buy = "Buy",
}

export default function SignalList({
  signals,
  onButtonPress,
}: {
  signals: Signal[];
  onButtonPress: (signalId: string) => void;
}) {
  return (
    <FlatList
      data={signals}
      renderItem={({ item: signal }: ListRenderItemInfo<Signal>) => (
        <Signal signal={signal} onButtonPress={onButtonPress} />
      )}
      keyExtractor={(signal) => signal.id}
      ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
    />
  );
}

function Signal({
  signal: { id, asset, direction, price, takeProfit, stopLoss, status },
  onButtonPress,
}: {
  signal: Signal;
  onButtonPress: (exchangerId: string) => void;
}) {
  const opacity = {
    inactive: 1,
    processing: 1,
    processed: 0.5,
    failed: 0.5,
  }[status];
  const statusText = {
    inactive: "Open",
    processing: "Active",
    processed: "Done",
    failed: "Failed",
  }[status];
  const statusColor = {
    inactive: "#E31212",
    processing: "#5D5FEF",
    processed: "#5D5FEF",
    failed: "#E31212",
  }[status];
  const buttonIconName = {
    inactive: "connect",
    processing: "connected",
    processed: "checkmark",
    failed: "crossmark",
  }[status];

  function handleButtonPress(signalId: string) {
    onButtonPress(signalId);
  }

  return (
    <View style={[styles.signal, { opacity }]}>
      <View style={{ flexDirection: "row", gap: 16 }}>
        <Icon name="bitcoin" />
        <View>
          <Text style={styles.assetText}>
            {asset.base}/{asset.quote}
          </Text>
          <Text style={styles.assetText}>
            {direction} – {price}
          </Text>
        </View>
        <View>
          <Text style={styles.orderText}>TP: {takeProfit}</Text>
          <Text style={styles.orderText}>SL: {stopLoss}</Text>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <Text style={[styles.statusText, { color: statusColor }]}>
          {statusText}
        </Text>
        <Pressable
          onPress={() => handleButtonPress(id)}
          style={[styles.button, { backgroundColor: statusColor }]}
        >
          <Icon name={buttonIconName as IconName} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1F212E",
  },
  assetText: {
    color: "#fff",
    fontFamily: "muller-bold",
    fontSize: 12,
    lineHeight: 14.4,
    letterSpacing: 0.24,
  },
  orderText: {
    color: "#fff",
    fontFamily: "muller-light",
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.2,
  },
  statusText: {
    textAlign: "center",
    fontFamily: "muller-light",
    fontSize: 12,
    lineHeight: 14.4,
    letterSpacing: 0.24,
  },
  button: {
    width: 32,
    height: 32,
    padding: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
