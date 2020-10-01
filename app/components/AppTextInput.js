import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors.js";
import defaultStyles from "../config/styles.js";

function AppTextInput({ icon, placeholder }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons style={styles.icon} name={icon} size={30} />
      )}
      <TextInput placeholder={placeholder} style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
    backgroundColor: colors.light,
    flexDirection: "row",
    width: "100%",
    borderRadius: 25,
  },
  icon: {
    marginRight: 10,
  },
  textInput: defaultStyles.text,
});

export default AppTextInput;
