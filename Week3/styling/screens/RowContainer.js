import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function RowContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whiteSmoke",
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  box1: {
    flex: 1,
    backgroundColor: "#7f1c1c",
  },
  box2: {
    flex: 2,
    backgroundColor: "#22a032",
  },
  box3: {
    flex: 3,
    backgroundColor: "#3f1c7f",
  },
});
