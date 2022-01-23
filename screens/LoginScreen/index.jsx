import React from "react";
import { SafeAreaView, Platform, View, StatusBar } from "react-native";
import Input from "../../components/Input";
function LoginScreen() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f2f2f2",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ flex: 1, backgroundColor: "#f2f2f2" }}>
        <Input />
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
