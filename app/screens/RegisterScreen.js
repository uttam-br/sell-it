import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput.js";
import AppButton from "../components/AppButton.js";

function RegisterScreen(props) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <Screen>
      <AppTextInput icon="account" placeholder="Name" />
      <AppTextInput icon="email" placeholder="Email" />
      <AppTextInput icon="lock" placeholder="Password" />
      <AppButton title="Register" onPress={() => {}} />
    </Screen>
  );
}

export default RegisterScreen;
