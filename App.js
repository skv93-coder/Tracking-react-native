import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator();

  const handlePress = (navigation) => {
    navigation.goBack();
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={LoginScreen}
          // options={({ route, navigation }) => {
          //   console.log("route", route);
          //   return {

          // }}
        />
        <Stack.Screen
          options={({ route, navigation }) => {
            return {
              headerLeft: () => (
                <TouchableOpacity onPress={handlePress.bind(null, navigation)}>
                  <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
              ),
            };
          }}
          name="Profile"
          component={SignupScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
