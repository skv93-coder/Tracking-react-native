import React from "react";
import { Dimensions, View, Text, TouchableOpacity } from "react-native";
import Input from "../../components/Input";
import SafeArea from "../../components/SafeArea";

const { width, height } = Dimensions.get("window");

function SignUpScreen({ navigation }) {
  return (
    <SafeArea>
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginHorizontal: width * 0.05,
            width: width * 0.9,
            marginTop: 24,
          }}
        >
          <Input
            placeholder="Name"
            style={{ backgroundColor: "white" }}
            label="Name"
            key="Name"
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
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", marginRight: 5 }}
          >
            <View>
              <Text
                style={{
                  backgroundColor: "#53927d",
                  textAlign: "center",
                  color: "white",
                  paddingVertical: 8,
                  fontSize: 20,
                }}
              >
                Sign up
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LogIn", { name: "Jane" });
            }}
            style={{ flex: 1, justifyContent: "center", marginRight: 5 }}
          >
            <View>
              <Text
                style={{
                  backgroundColor: "#53927d",
                  textAlign: "center",
                  fontSize: 20,
                  paddingVertical: 8,
                  color: "white",
                }}
              >
                Log in
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeArea>
  );
}

export default SignUpScreen;
/**
 * React 
Next
Redux
React router
Node js
mongoose
 */
