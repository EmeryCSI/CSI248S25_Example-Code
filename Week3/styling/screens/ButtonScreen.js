import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
  ScrollView,
} from "react-native";

const ButtonScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Button Types Tutorial</Text>

      {/* TouchableOpacity Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>1. TouchableOpacity</Text>
        <Text style={styles.description}>
          TouchableOpacity is a wrapper that makes any child component respond
          to touches with a fade effect.
        </Text>

        <TouchableOpacity
          style={[styles.button, styles.touchableOpacity]}
          onPress={() => alert("TouchableOpacity pressed!")}
        >
          <Text style={styles.buttonText}>Basic TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.customTouchableOpacity]}
          activeOpacity={0.5}
          onPress={() => alert("Custom opacity pressed!")}
        >
          <Text style={styles.buttonText}>Custom Opacity (0.5)</Text>
        </TouchableOpacity>
      </View>

      {/* TouchableHighlight Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>2. TouchableHighlight</Text>
        <Text style={styles.description}>
          TouchableHighlight adds a highlight effect when pressed. It requires a
          background color.
        </Text>

        <TouchableHighlight
          style={styles.button}
          underlayColor="lightblue"
          onPress={() => alert("TouchableHighlight pressed!")}
        >
          <Text style={styles.buttonText}>Basic TouchableHighlight</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={[styles.button, styles.customHighlight]}
          underlayColor="lightgreen"
          onPress={() => alert("Custom highlight pressed!")}
        >
          <Text style={styles.buttonText}>Custom Highlight</Text>
        </TouchableHighlight>
      </View>

      {/* Pressable Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>3. Pressable</Text>
        <Text style={styles.description}>
          Pressable is the most flexible component that can detect various press
          states.
        </Text>

        <Pressable
          //If you pass a callback function to the style prop you will get
          //a prop which will tell you if the button is currently pressed.
          style={({ pressed }) => [
            styles.button,
            styles.pressable,
            pressed && styles.pressed,
          ]}
          onPress={() => alert("Pressable pressed!")}
        >
          <Text style={styles.buttonText}>Basic Pressable</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            //These styles will always be applied
            styles.button,
            styles.customPressable,
            //These styles will only be applied when the button is pressed
            pressed && styles.customPressed,
          ]}
          onPress={() => alert("Custom pressable pressed!")}
        >
          <Text style={styles.buttonText}>Custom Pressable</Text>
        </Pressable>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            styles.longPressable,
            pressed && styles.longPressed,
          ]}
          onPress={() => alert("Quick press detected!")}
          onLongPress={() => alert("Long press detected!")}
          delayLongPress={1000}
        >
          <Text style={styles.buttonText}>Long Press Example (1000ms)</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "darkblue",
  },
  description: {
    fontSize: 16,
    marginBottom: 15,
    color: "gray",
  },
  button: {
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  touchableOpacity: {
    backgroundColor: "blue",
  },
  customTouchableOpacity: {
    backgroundColor: "purple",
  },
  customHighlight: {
    backgroundColor: "green",
  },
  pressable: {
    backgroundColor: "red",
  },
  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.98 }],
  },
  customPressable: {
    backgroundColor: "orange",
  },
  customPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.95 }],
  },
  longPressable: {
    backgroundColor: "teal",
  },
  longPressed: {
    opacity: 0.6,
    transform: [{ scale: 0.9 }],
  },
});

export default ButtonScreen;
