import { ReactNode, ComponentType } from "react";
import { View } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";

const iconNameMap: {
  [key in
    | "signals"
    | "exchange"
    | "screener"
    | "portfolio"
    | "trading"
    | "hamburger"]: ComponentType<{
    active: boolean;
  }>;
} = {
  signals: Signals,
  exchange: Exchange,
  screener: Screener,
  portfolio: Portfolio,
  trading: Trading,
  hamburger: Hamburger,
};

export default function Icon({
  name,
  active = false,
}: {
  name: keyof typeof iconNameMap;
  active?: boolean;
}) {
  const Icon = iconNameMap[name];

  return (
    <View
      style={{
        width: 24,
        height: 24,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Icon active={active} />
    </View>
  );
}

function Signals({ active }: { active: boolean }): ReactNode {
  return (
    <Svg width="11" height="10" viewBox="0 0 11 10" fill={"#12141F"}>
      <Circle cx="5.5" cy="5" r="1.5" stroke={active ? "#E31212" : "#494D61"} />
      <Circle
        cx="5.5"
        cy="5"
        r="4.5"
        stroke={active ? "#E31212" : "#494D61"}
        fillOpacity={0}
      />
    </Svg>
  );
}

function Exchange({ active }: { active: boolean }): ReactNode {
  return (
    <Svg width="16" height="12" viewBox="0 0 16 12" fill={"#12141F"}>
      <Path
        d="M8.07941 8.66667H4.82647V11L0.75 7.33333L4.82647 3.66667V6L10.6735 6V8.33333L14.75 4.66667L10.6735 1V3.33333L7.42059 3.33333"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Screener({ active }: { active: boolean }): ReactNode {
  return (
    <Svg width="11" height="11" viewBox="0 0 11 11" fill={"#12141F"}>
      <Rect
        x="0.5"
        y="0.5"
        width="10"
        height="7"
        rx="1.5"
        stroke={active ? "#E31212" : "#494D61"}
      />
      <Path
        d="M3 5L3.84402 4.00968C4.14772 3.65334 4.658 3.55542 5.07202 3.77403L5.92798 4.22597C6.342 4.44458 6.85228 4.34666 7.15598 3.99032L8 3"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 10V10C3 9.44772 3.44772 9 4 9H7C7.55228 9 8 9.44772 8 10V10"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Portfolio({ active }: { active: boolean }): ReactNode {
  return (
    <Svg width="12" height="11" viewBox="0 0 12 11" fill={"#12141F"}>
      <Rect
        x="1.25"
        y="3.5"
        width="10"
        height="7"
        rx="1.5"
        stroke={active ? "#E31212" : "#494D61"}
      />
      <Path
        d="M3.75 2V2C3.75 1.44772 4.19772 1 4.75 1H7.75C8.30228 1 8.75 1.44772 8.75 2V2"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.75 6L5.87861 6.85144C6.11702 6.94681 6.38298 6.94681 6.62139 6.85144L8.75 6"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Trading({ active }: { active: boolean }): ReactNode {
  return (
    <Svg width="14" height="10" viewBox="0 0 14 10" fill={"#12141F"}>
      <Rect
        x="10.5"
        y="2"
        width="3"
        height="3"
        rx="0.5"
        stroke={active ? "#E31212" : "#494D61"}
      />
      <Rect
        x="3.5"
        y="7"
        width="3"
        height="3"
        rx="0.5"
        transform="rotate(-180 3.5 7)"
        stroke={active ? "#E31212" : "#494D61"}
      />
      <Rect
        x="8.5"
        y="8"
        width="3"
        height="3"
        rx="0.5"
        transform="rotate(-180 8.5 8)"
        stroke={active ? "#E31212" : "#494D61"}
      />
      <Path
        d="M12 7.5L12 5.5"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 0.5L2 3.5"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 2.5L7 4.5"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 1.5L12 0.5"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7.5L2 9.5"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7 8.5L7 9.5"
        stroke={active ? "#E31212" : "#494D61"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function Hamburger({ active }: { active: boolean }): ReactNode {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" fill="#12141F">
      <Path d="M1 2.66666H16" stroke="white" strokeLinecap="round" />
      <Path d="M1 8H16" stroke="white" strokeLinecap="round" />
      <Path d="M1 13.3333H16" stroke="white" strokeLinecap="round" />
    </Svg>
  );
}
