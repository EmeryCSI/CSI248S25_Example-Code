import { StyleSheet, View, Text } from "react-native";
import React from "react";

export default function GridContainer() {
  return (
    <View style={styles.container}>
      {/* Main grid container */}
      <View style={styles.gridContainer}>
        {/* First row */}
        <View style={styles.row}>
          <View style={[styles.cell, styles.cell1]}>
            <Text style={styles.cellText}>1</Text>
          </View>
          <View style={[styles.cell, styles.cell2]}>
            <Text style={styles.cellText}>2</Text>
          </View>
          <View style={[styles.cell, styles.cell3]}>
            <Text style={styles.cellText}>3</Text>
          </View>
        </View>

        {/* Second row */}
        {/* Adding in line styling overrides the flex value */}
        <View style={[styles.row, { flex: 3 }]}>
          <View style={[styles.cell, styles.cell4]}>
            <Text style={styles.cellText}>4</Text>
          </View>
          <View style={[styles.cell, styles.cell5]}>
            <Text style={styles.cellText}>5</Text>
          </View>
          <View style={[styles.cell, styles.cell6]}>
            <Text style={styles.cellText}>6</Text>
          </View>
        </View>

        {/* Third row */}
        <View style={[styles.row, { flex: 2 }]}>
          <View style={[styles.cell, styles.cell7]}>
            <Text style={styles.cellText}>7</Text>
          </View>
          <View style={[styles.cell, styles.cell8]}>
            <Text style={styles.cellText}>8</Text>
          </View>
          <View style={[styles.cell, styles.cell9]}>
            <Text style={styles.cellText}>9</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // The grid container uses flex: 1 to take remaining space
  // and flexDirection: 'column' to stack rows vertically
  gridContainer: {
    flex: 1,
    flexDirection: "column",
  },
  // Each row is a flex container with flexDirection: 'row'
  // to arrange cells horizontally
  row: {
    flex: 1,
    flexDirection: "row",
  },
  // Each cell takes up equal space (flex: 1)
  // and has consistent styling
  cell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cellText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  // Different colors for each cell to make the grid more visible
  cell1: { backgroundColor: "coral", flex: 3 },
  cell2: { backgroundColor: "turquoise", flex: 1 },
  cell3: { backgroundColor: "skyblue", flex: 4 },
  cell4: { backgroundColor: "lightgreen", flex: 2 },
  cell5: { backgroundColor: "khaki", flex: 3 },
  cell6: { backgroundColor: "rosybrown", flex: 1 },
  cell7: { backgroundColor: "mediumpurple", flex: 2 },
  cell8: { backgroundColor: "dodgerblue", flex: 3 },
  cell9: { backgroundColor: "mediumturquoise", flex: 5 },
});
