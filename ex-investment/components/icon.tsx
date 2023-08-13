import { ReactNode, ComponentType } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import Svg, { Circle, Path, Rect } from "react-native-svg";

export type IconName =
  | "signals"
  | "exchange"
  | "screener"
  | "portfolio"
  | "trading"
  | "hamburger"
  | "arrow"
  | "arrowUp"
  | "arrowDown"
  | "bitcoin"
  | "connect"
  | "connected"
  | "crossmark"
  | "checkmark"
  | "forward"
  | "portfolioContour"
  | "copy";

const iconNameMap: {
  [key in IconName]: ComponentType<{
    active?: boolean;
  }>;
} = {
  signals: Signals,
  exchange: Exchange,
  screener: Screener,
  portfolio: Portfolio,
  trading: Trading,
  hamburger: Hamburger,
  arrow: Arrow,
  arrowUp: ArrowUp,
  arrowDown: ArrowDown,
  bitcoin: Bitcoin,
  connect: Connect,
  connected: Connected,
  crossmark: Crossmark,
  checkmark: Checkmark,
  forward: Forward,
  portfolioContour: PortfolioContour,
  copy: Copy,
};

export default function Icon({
  name,
  size,
  active = false,
  style,
}: {
  name: keyof typeof iconNameMap;
  size?: number;
  active?: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  const Icon = iconNameMap[name];

  return (
    <View
      style={[
        {
          width: size ?? 24,
          height: size ?? 24,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <Icon active={active} />
    </View>
  );
}

function Signals({ active }: { active?: boolean }): ReactNode {
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

function Exchange({ active }: { active?: boolean }): ReactNode {
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

function Screener({ active }: { active?: boolean }): ReactNode {
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

function Portfolio({ active }: { active?: boolean }): ReactNode {
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

function Trading({ active }: { active?: boolean }): ReactNode {
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

function Hamburger(): ReactNode {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" fill="#12141F">
      <Path d="M1 2.66666H16" stroke="white" strokeLinecap="round" />
      <Path d="M1 8H16" stroke="white" strokeLinecap="round" />
      <Path d="M1 13.3333H16" stroke="white" strokeLinecap="round" />
    </Svg>
  );
}

function Arrow(): ReactNode {
  return (
    <Svg width="11" height="12" viewBox="0 0 11 12" fill="none">
      <Path
        d="M10.5221 6.84317L1.2555 11.8959C0.487736 12.3145 -0.309681 11.3889 0.121344 10.5793L2.30758 6.47336C2.46343 6.18067 2.46343 5.81933 2.30758 5.52664L0.121345 1.42066C-0.309681 0.611148 0.487736 -0.31449 1.2555 0.104137L10.5221 5.15684C11.1593 5.50424 11.1593 6.49576 10.5221 6.84317Z"
        fill="#494D61"
      />
    </Svg>
  );
}

function ArrowUp(): ReactNode {
  return (
    <Svg width="5" height="4" viewBox="0 0 5 4" fill="none">
      <Path d="M2.5 0L4.66506 3.75L0.334936 3.75L2.5 0Z" fill="#27AE60" />
    </Svg>
  );
}

function ArrowDown(): ReactNode {
  return (
    <Svg width="5" height="4" viewBox="0 0 5 4" fill="none">
      <Path d="M2.5 4L0.334936 0.25L4.66506 0.25L2.5 4Z" fill="#E31212" />
    </Svg>
  );
}

function Bitcoin(): ReactNode {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="white"
      />
      <Path
        d="M7.87075 17.5V5.66H13.0387C13.7961 5.66 14.4414 5.79333 14.9748 6.06C15.5081 6.32667 15.9134 6.684 16.1908 7.132C16.4788 7.58 16.6227 8.07067 16.6227 8.604C16.6227 9.148 16.5214 9.596 16.3188 9.948C16.1268 10.3 15.8921 10.5773 15.6148 10.78C15.3481 10.972 15.1028 11.1053 14.8788 11.18V11.292C15.1561 11.3667 15.4654 11.5107 15.8068 11.724C16.1588 11.9373 16.4627 12.2413 16.7188 12.636C16.9748 13.02 17.1028 13.5213 17.1028 14.14C17.1028 14.6947 16.9694 15.2333 16.7027 15.756C16.4361 16.268 16.0148 16.6893 15.4388 17.02C14.8628 17.34 14.1001 17.5 13.1508 17.5H7.87075ZM12.7507 7.5H10.0468V10.588H12.7507C13.3694 10.588 13.8174 10.4333 14.0948 10.124C14.3721 9.81467 14.5107 9.452 14.5107 9.036C14.5107 8.63067 14.3721 8.27333 14.0948 7.964C13.8174 7.65467 13.3694 7.5 12.7507 7.5ZM12.9108 12.252H10.0468V15.66H12.9108C13.6147 15.66 14.1268 15.4893 14.4468 15.148C14.7668 14.8067 14.9268 14.4067 14.9268 13.948C14.9268 13.5 14.7668 13.1053 14.4468 12.764C14.1268 12.4227 13.6147 12.252 12.9108 12.252Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.20312 6V4H11.2031V6H9.20312Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.20312 19V16H11.2031V19H9.20312Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5085 6V4H14.5085V6H12.5085Z"
        fill="white"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5085 19V16H14.5085V19H12.5085Z"
        fill="white"
      />
    </Svg>
  );
}

function Connect() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M6 4V4C3.79086 4 2 5.79086 2 8V8C2 10.2091 3.79086 12 6 12V12"
        stroke="white"
      />
      <Path
        d="M10 12V12C12.2091 12 14 10.2091 14 8V8C14 5.79086 12.2091 4 10 4V4"
        stroke="white"
      />
      <Path d="M6 8H10" stroke="white" strokeLinecap="round" />
    </Svg>
  );
}

function Connected() {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path
        d="M8 4V4C5.79086 4 4 5.79086 4 8V8C4 10.2091 5.79086 12 8 12V12"
        stroke="white"
      />
      <Path
        d="M8 12V12C10.2091 12 12 10.2091 12 8V8C12 5.79086 10.2091 4 8 4V4"
        stroke="white"
      />
      <Path d="M9 8H7" stroke="white" strokeLinecap="round" />
      <Path d="M8 9L8 7" stroke="white" strokeLinecap="round" />
    </Svg>
  );
}

function Crossmark() {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Path d="M11 1L1 11" stroke="white" />
      <Path d="M11 11L1 1" stroke="white" />
    </Svg>
  );
}

function Checkmark() {
  return (
    <Svg width="14" height="8" viewBox="0 0 14 8" fill="none">
      <Path
        d="M13.0308 0.500015L6.56843 6.79473C6.16972 7.1831 5.53063 7.17117 5.14668 6.7682L0.969229 2.3837"
        stroke="white"
      />
    </Svg>
  );
}

function Forward() {
  return (
    <Svg width="7" height="13" viewBox="0 0 7 13" fill="none">
      <Path d="M1 1L6 6.5L1 12" stroke="#494D61" strokeLinecap="round" />
    </Svg>
  );
}

function PortfolioContour() {
  return (
    <Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
      <Rect
        x="1"
        y="3.86364"
        width="15"
        height="11.1364"
        rx="2"
        stroke="#12141F"
        strokeWidth="2"
      />
      <Path
        d="M4.86353 3C4.86353 1.89543 5.75896 1 6.86353 1H10.1363C11.2408 1 12.1363 1.89543 12.1363 3V3.63636H4.86353V3Z"
        stroke="#12141F"
        strokeWidth="2"
      />
    </Svg>
  );
}

function Copy() {
  return (
    <Svg width="13" height="16" viewBox="0 0 13 16" fill="none">
      <Path
        d="M12.5 5L12.5 11C12.5 13.2091 10.7091 15 8.5 15L4.5 15"
        stroke="#494D61"
        strokeLinecap="round"
      />
      <Rect x="1" y="0.5" width="9" height="12" rx="1.5" stroke="#494D61" />
    </Svg>
  );
}
