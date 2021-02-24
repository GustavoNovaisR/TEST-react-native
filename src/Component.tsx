import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  value: string;
};
const MeuComponente: React.FC<Props> = (props) => {
  return (
    <View style={styles.view} testID='embrulho'>
      <Text style={styles.fonte}>Cante {props.value} com a gente!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  fonte: {
    fontSize: 50,
    color: "#fff",
    textAlign: "center",
  },
  view: {
    flex: 1,
  },
});
export default MeuComponente;
