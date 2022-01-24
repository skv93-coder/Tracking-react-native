import React from "react";
import {
  SafeAreaView,
  Platform,
  View,
  StatusBar,
  Dimensions,
} from "react-native";
import Input from "../../components/Input";
function LoginScreen() {
  const { width, height } = Dimensions.get("window");

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ffffff",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
        <View
          style={{
            marginHorizontal: width * 0.05,
            width: width * 0.9,
            marginTop: 24,
          }}
        >
          <Input
            placeholder="Enter email"
            style={{ backgroundColor: "white" }}
            label="Email"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
