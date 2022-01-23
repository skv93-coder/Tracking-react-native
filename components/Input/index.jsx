import React from "react";
import { Text, TextInput, View, Dimensions } from "react-native";

function Input() {
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        width: 0.8 * width,
        marginHorizontal: 0.1 * width,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>Email</Text>
      <View style={{ marginTop: 8 }}>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 8,
            height: 0.07 * height,
          }}
        />
      </View>
    </View>
  );
}

export default Input;
