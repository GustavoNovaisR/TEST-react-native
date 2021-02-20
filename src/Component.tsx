import React from "react";

import { StyleSheet, Text, View } from "react-native";
const Component = () => {
  return <Text style={styles.fonte}>Sejam Bem vindos !</Text>;
};
const styles = StyleSheet.create({
  fonte: {
    fontSize: 50,
    color: "#FFF",
    textAlign: "center",
  },
});
export default Component;
