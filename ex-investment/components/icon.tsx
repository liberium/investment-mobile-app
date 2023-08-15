import { ReactNode, ComponentType } from "react";
import { View, Image, StyleProp, ViewStyle } from "react-native";
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
  | "copy"
  | "backward"
  | "qr"
  | "menu"
  | "usd"
  | "usdt"
  | "dropdown"
  | "filter"
  | "switch";

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
  backward: Backward,
  qr: Qr,
  menu: Menu,
  usd: Usd,
  usdt: Usdt,
  dropdown: Dropdown,
  filter: Filter,
  switch: Switch,
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

function Backward() {
  return (
    <Svg width="7" height="14" viewBox="0 0 7 14" fill="none">
      <Path d="M6 13L1 7L6 1" stroke="white" strokeLinecap="round" />
    </Svg>
  );
}

function Qr() {
  return (
    <Svg width="13" height="14" viewBox="0 0 13 14" fill="none">
      <Path
        d="M3.77272 12.6833L1.72217 12.6833C1.16988 12.6833 0.722168 12.2356 0.722168 11.6833L0.722168 9.68031M0.722168 4.35344L0.722176 2.00003C0.722177 1.44774 1.16989 1.00003 1.72218 1.00003H3.77272"
        stroke="white"
        strokeLinecap="round"
      />
      <Path
        d="M9.22722 1.31669L11.2778 1.3167C11.8301 1.3167 12.2778 1.76442 12.2778 2.3167L12.2778 4.31969M12.2778 9.64656L12.2778 12C12.2778 12.5523 11.83 13 11.2778 13L9.22722 13"
        stroke="white"
        strokeLinecap="round"
      />
      <Path
        d="M3.40913 7.13489L9.59094 7.13488"
        stroke="white"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function Menu() {
  return (
    <Svg width="15" height="16" viewBox="0 0 15 16" fill="none">
      <Rect x="6.5" y="2" width="2" height="2" rx="1" fill="white" />
      <Rect x="6.5" y="7" width="2" height="2" rx="1" fill="white" />
      <Rect x="6.5" y="12" width="2" height="2" rx="1" fill="white" />
    </Svg>
  );
}

function Usd() {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <Rect width="12" height="12" rx="6" fill="#27AE60" />
      <Path
        d="M6.33083 10H5.51128V8.98723C4.93484 8.92482 4.43108 8.75461 4 8.4766V7.25957C4.5614 7.67943 5.19048 7.88936 5.88722 7.88936C6.20802 7.88936 6.44612 7.84681 6.6015 7.7617C6.7619 7.67092 6.84211 7.5234 6.84211 7.31915C6.84211 7.17163 6.78947 7.04397 6.68421 6.93617C6.58396 6.82837 6.45113 6.74326 6.28571 6.68085C6.1203 6.61277 5.93734 6.54752 5.73684 6.48511C5.53634 6.41702 5.33584 6.34043 5.13534 6.25532C4.93484 6.16454 4.75188 6.05957 4.58647 5.94043C4.42105 5.8156 4.28571 5.64539 4.18045 5.42979C4.0802 5.21418 4.03008 4.96454 4.03008 4.68085C4.03008 4.19858 4.16541 3.81844 4.43609 3.54043C4.70677 3.25674 5.06516 3.08085 5.51128 3.01277V2H6.33083V3.02128C6.86216 3.07801 7.30576 3.21986 7.66165 3.44681V4.6383C7.21554 4.27518 6.67419 4.09929 6.03759 4.11064C5.46617 4.12199 5.18045 4.30638 5.18045 4.66383C5.18045 4.8 5.23058 4.91915 5.33083 5.02128C5.43609 5.11773 5.57143 5.19716 5.73684 5.25957C5.90727 5.32199 6.09273 5.3844 6.29323 5.44681C6.49373 5.50922 6.69173 5.58582 6.88722 5.6766C7.08772 5.76738 7.27068 5.87518 7.43609 6C7.60652 6.11915 7.74185 6.28652 7.84211 6.50213C7.94737 6.71773 8 6.97021 8 7.25957C8 7.8156 7.84712 8.23262 7.54135 8.51064C7.2406 8.78865 6.83709 8.95036 6.33083 8.99575V10Z"
        fill="white"
      />
    </Svg>
  );
}

function Usdt() {
  return (
    <Svg viewBox="0 0 2000 2000" width="12" height="12">
      <Path
        d="M1000,0c552.26,0,1000,447.74,1000,1000S1552.24,2000,1000,2000,0,1552.38,0,1000,447.68,0,1000,0"
        fill="#53ae94"
      />
      <Path
        d="M1123.42,866.76V718H1463.6V491.34H537.28V718H877.5V866.64C601,879.34,393.1,934.1,393.1,999.7s208,120.36,484.4,133.14v476.5h246V1132.8c276-12.74,483.48-67.46,483.48-133s-207.48-120.26-483.48-133m0,225.64v-0.12c-6.94.44-42.6,2.58-122,2.58-63.48,0-108.14-1.8-123.88-2.62v0.2C633.34,1081.66,451,1039.12,451,988.22S633.36,894.84,877.62,884V1050.1c16,1.1,61.76,3.8,124.92,3.8,75.86,0,114-3.16,121-3.8V884c243.8,10.86,425.72,53.44,425.72,104.16s-182,93.32-425.72,104.18"
        fill="#fff"
      />
    </Svg>
  );
}

function Dropdown() {
  return (
    <Svg width="6" height="3" viewBox="0 0 6 3" fill="none">
      <Path
        d="M3 3L0.834936 6.90043e-08L5.16506 4.47556e-07L3 3Z"
        fill="#494D61"
      />
    </Svg>
  );
}

function Filter() {
  return (
    <Svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <Path
        d="M8.0362 0.5L1.9638 0.5C1.14651 0.5 0.674353 1.42721 1.15507 2.08818L3.44509 5.23689C3.5694 5.40781 3.63636 5.61372 3.63636 5.82507L3.63636 8.52657C3.63636 9.34567 4.56721 9.81736 5.22774 9.33296L5.95501 8.79962C6.21188 8.61124 6.36364 8.31176 6.36364 7.99322L6.36364 5.82507C6.36364 5.61372 6.4306 5.40781 6.55491 5.23689L8.84493 2.08818C9.32565 1.42721 8.85349 0.5 8.0362 0.5Z"
        fill="#494D61"
      />
    </Svg>
  );
}

function Switch() {
  return (
    <Svg width="11" height="14" viewBox="0 0 11 14" fill="none">
      <Path
        d="M2.50001 10.4546L2.50001 9.54546C2.5 8.99317 2.94772 8.54545 3.50001 8.54545L5.26582 8.54545C5.69922 8.54545 6.05056 8.19411 6.05056 7.76071C6.05056 7.08151 6.85485 6.72304 7.35995 7.17712L9.67278 9.25633C10.1147 9.65363 10.1147 10.3464 9.67277 10.7437L7.35994 12.8229C6.85484 13.277 6.05056 12.9185 6.05056 12.2393C6.05056 11.8059 5.69922 11.4545 5.26581 11.4546L3.50002 11.4546C2.94774 11.4546 2.50002 11.0069 2.50001 10.4546Z"
        fill="#494D61"
      />
      <Path
        d="M7.99999 3.54543L7.99999 4.45454C8 5.00683 7.55228 5.45455 6.99999 5.45455L5.23418 5.45455C4.80078 5.45455 4.44944 5.80589 4.44944 6.23929C4.44944 6.91849 3.64515 7.27696 3.14005 6.82288L0.827224 4.74367C0.38529 4.34637 0.385291 3.65363 0.827225 3.25633L3.14006 1.17712C3.64516 0.723041 4.44944 1.08151 4.44944 1.76071C4.44944 2.19411 4.80078 2.54545 5.23419 2.54545L6.99998 2.54544C7.55226 2.54544 7.99998 2.99315 7.99999 3.54543Z"
        fill="#494D61"
      />
    </Svg>
  );
}
