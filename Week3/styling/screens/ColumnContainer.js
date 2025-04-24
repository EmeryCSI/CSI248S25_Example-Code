import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function ColumnContainer() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {/* First container takes up 1/6 of the space */}
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.text}>1/6</Text>
        </View>

        {/* Second container takes up 2/6 of the space */}
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.text}>2/6</Text>
        </View>

        {/* Third container takes up 3/6 of the space */}
        <View style={[styles.box, styles.box3]}>
          <Text style={styles.text}>3/6</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  box1: {
    flex: 1, // Takes up 1/6 of the space
    backgroundColor: "coral",
  },
  box2: {
    flex: 2, // Takes up 2/6 of the space
    backgroundColor: "turquoise",
  },
  box3: {
    flex: 3, // Takes up 3/6 of the space
    backgroundColor: "rosybrown",
  },
});
