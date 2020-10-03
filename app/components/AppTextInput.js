import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles.js";

function AppTextInput({ icon, placeholder, ...otherProps }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons style={styles.icon} name={icon} size={30} />
      )}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={defaultStyles.colors.medium}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
    backgroundColor: defaultStyles.colors.light,
    flexDirection: "row",
    width: "100%",
    borderRadius: 50,
  },
  icon: {
    marginRight: 10,
  },
  textInput: defaultStyles.text,
});

export default AppTextInput;
