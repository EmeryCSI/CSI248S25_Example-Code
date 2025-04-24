import { StyleSheet, View, Text } from "react-native";
import React from "react";
//Create a horizontal row of 4 boxes where the first box takes up
//half of the screen. The second box takes of half of the remaining space
//The 3rd and 4th box split the remaining space evenly

export default function ColumnContainer() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.text}>1/2</Text>
      </View>

      <View style={[styles.box, styles.box2]}>
        <Text style={styles.text}>1/4</Text>
      </View>

      <View style={[styles.box, styles.box3]}>
        <Text style={styles.text}>1/8</Text>
      </View>

      <View style={[styles.box, styles.box4]}>
        <Text style={styles.text}>1/8</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Arrange children horizontally
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  box1: {
    flex: 4,
    backgroundColor: "coral",
  },
  box2: {
    flex: 2,
    backgroundColor: "turquoise",
  },
  box3: {
    flex: 1,
    backgroundColor: "rosybrown",
  },
  box4: {
    flex: 1,
    backgroundColor: "seagreen",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
