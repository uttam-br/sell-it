import React, { useState } from "react";
import { Switch, StyleSheet, Text, View, TextInput } from "react-native";

const categories = [
  { label: "Furnitute", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={setCategory}
        icon="apps"
        placeholder="Category"
        items={categories}
      />
      <AppTextInput icon="email" placeholder="Email" />
    </Screen>
  );
}
