import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AsyncOperations() {
  // State for AsyncStorage operations
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");
  const [counter, setCounter] = useState(0);

  /**
   * Example 1: Loading Data on Mount
   * Loads saved data when component mounts
   */
  useEffect(() => {
    const loadData = async () => {
      try {
        const [savedName, savedCounter] = await Promise.all([
          AsyncStorage.getItem("name"),
          AsyncStorage.getItem("counter"),
        ]);
        if (savedName) setSavedName(savedName);
        if (savedCounter) setCounter(parseInt(savedCounter));
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  /**
   * Example 2: Auto-Saving Data
   * Saves counter whenever it changes
   */
  useEffect(() => {
    const saveCounter = async () => {
      try {
        await AsyncStorage.setItem("counter", counter.toString());
      } catch (error) {
        console.error("Error saving counter:", error);
      }
    };

    saveCounter();
  }, [counter]);

  // Save name manually
  const saveName = async () => {
    try {
      await AsyncStorage.setItem("name", name);
      setSavedName(name);
      setName("");
    } catch (error) {
      console.error("Error saving name:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Saved Name: {savedName || "No name saved"}</Text>
      <Text>Counter: {counter}</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter name"
        style={styles.input}
      />
      <Button title="Save Name" onPress={saveName} />

      <View style={styles.buttonRow}>
        <Button title="-" onPress={() => setCounter((prev) => prev - 1)} />
        <Button title="+" onPress={() => setCounter((prev) => prev + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 10,
    width: 200,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
});
