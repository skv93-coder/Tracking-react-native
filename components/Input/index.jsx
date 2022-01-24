import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  TextInput,
  View,
  Dimensions,
  StyleSheet,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";

const { width, height } = Dimensions.get("window");

function Input(props) {
  const [isFocused, setIsFocused] = useState(false);
  const focusAnim = useRef(new Animated.Value(0)).current;
  const inputRef = useRef(null);

  const { style, onBlur, onFocus, value, label, errorText, ...restOfProps } =
    props;

  let color = isFocused ? "#080F9C" : "#B9C4CA";
  if (errorText) {
    color = "#B00020";
  }

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  }, [isFocused, focusAnim, value]);

  return (
    <View style={style}>
      <TextInput
        onBlur={(event) => {
          setIsFocused(false);
          onBlur?.(event);
        }}
        onFocus={(event) => {
          setIsFocused(true);
          onFocus?.(event);
        }}
        style={[styles.input, style]}
        {...restOfProps}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
        <Animated.View
          style={[
            styles.labelContainer,
            {
              top: focusAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [24, -6],
              }),
            },
          ]}
        >
          <Animated.Text
            style={{
              fontSize: focusAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [16, 12],
              }),
              color,
            }}
          >
            {label}
            {errorText ? "*" : ""}
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    padding: 24,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
  },
  labelContainer: {
    position: "absolute",
    left: 16,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  error: {
    marginTop: 4,
    marginLeft: 12,
    color: "#B00020",
  },
});
