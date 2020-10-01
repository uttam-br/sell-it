import React, { useState } from "react";
import {
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  View,
  Modal,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors.js";
import defaultStyles from "../config/styles.js";
import AppText from "./AppText";
import Screen from "./Screen.js";
import PickerItem from "./PickerItem.js";

function AppPicker({ icon, items, selectedItem, onSelectItem, placeholder }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons style={styles.icon} name={icon} size={30} />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" size={30} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1,
  },
  textInput: defaultStyles.text,
});

export default AppPicker;
