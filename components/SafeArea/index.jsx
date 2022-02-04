import React from "react";
import { Platform, SafeAreaView, StatusBar } from "react-native";

function SafeArea({ children }) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#ffffff",
        flex: 1,
        // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {children}
    </SafeAreaView>
  );
}

export default SafeArea;
