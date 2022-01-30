import React from "react";
import {
  SafeAreaView,
  Platform,
  View,
  StatusBar,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Header from "../../components/Header";
import SafeArea from "../../components/SafeArea";
import Input from "../../components/Input";
function LoginScreen({ navigation }) {
  const { width, height } = Dimensions.get("window");

  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        {/* <Header
          left={
            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <AntDesign name="left" size={24} color="blue" />
              <View style={{ paddingLeft: 4 }}>
                <Text style={{ color: "#057cff", fontSize: 20 }}>SignUp</Text>
              </View>
            </View>
          }
          title="SignIn"
        /> */}
        <View
          style={{
            marginHorizontal: width * 0.05,
            width: width * 0.9,
            marginTop: 24,
          }}
        >
          <Input
            placeholder="Email"
            style={{ backgroundColor: "white" }}
            label="Email"
            key="Email"
          />
        </View>
        <View
          style={{
            marginHorizontal: width * 0.05,
            width: width * 0.9,
            marginTop: 24,
          }}
        >
          <Input
            placeholder="Password"
            style={{ backgroundColor: "white" }}
            label="Password"
            key="Password"
          />
        </View>
        <View
          style={{
            marginHorizontal: width * 0.05,
            width: width * 0.9,
            marginTop: 24,
          }}
        >
          <Text
            style={{
              color: "white",
              backgroundColor: "black",
              padding: 24,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Sign in
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: width * 0.05,
            width: width * 0.9,
          }}
        >
          <Text
            style={{
              color: "black",
              paddingVertical: 4,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Don'nt have an account?{" "}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile", { name: "Jane" });
          }}
        >
          <View
            style={{
              marginHorizontal: width * 0.05,
              width: width * 0.9,
            }}
          >
            <Text
              style={{
                color: "#057cff",
                paddingVertical: 4,
                textAlign: "center",
                fontSize: 20,
              }}
            >
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeArea>
  );
}

export default LoginScreen;
