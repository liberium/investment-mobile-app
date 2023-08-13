import { Image, StyleSheet, ImageStyle } from "react-native";

export default function UserAvatar({ style }: { style?: ImageStyle }) {
  return (
    <Image
      style={[styles.avatar, style]}
      source={require("@/assets/images/avatar-placeholder.png")}
      resizeMode="cover"
    ></Image>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 4,
  },
});
