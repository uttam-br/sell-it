import React from "react";
import { StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors.js";

const listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Blue jacket for sale",
    price: 1000,
    image: require("../assets/jacket.jpg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card title={item.title} subTitle={item.price} image={item.image} />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 20,
  },
});

export default ListingScreen;
