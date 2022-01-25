import React from "react";
import { Dimensions, Text, View } from "react-native";

function Header({ left, title, right }) {
  const { width, height } = Dimensions.get("window");

  return (
    <View
      style={{
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        paddingVertical: 16,
      }}
    >
      <View style={{ flex: 1 }}>{left}</View>
      <Text
        style={{
          paddingRight: 16,
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          flex: 1,
        }}
      >
        {title}
      </Text>
      <View style={{ flex: 1 }}>{right}</View>
    </View>
  );
}

export default Header;
