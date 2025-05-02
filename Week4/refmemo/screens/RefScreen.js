import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";

const RefScreen = () => {
  // Example 1: Storing a mutable value that doesn't trigger re-renders
  const renderCount = useRef(0);
  const [inputValue, setInputValue] = useState("");

  // Example 2: Accessing DOM elements
  const inputRef = useRef(null);

  // Example 3: Storing previous value
  const previousValue = useRef("");

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    previousValue.current = inputValue;
  }, [inputValue]);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>useRef Hook Tutorial</Text>

      <View style={styles.section}>
        <Text style={styles.subtitle}>1. Tracking Render Count</Text>
        <Text>This component has rendered {renderCount.current} times</Text>
        <Text>Note: Changing this value doesn't trigger re-renders</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>2. Accessing DOM Elements</Text>
        <TextInput
          ref={inputRef}
          style={styles.input}
          value={inputValue}
          onChangeText={setInputValue}
          placeholder="Type something..."
        />
        <Button title="Focus Input" onPress={focusInput} />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>3. Storing Previous Value</Text>
        <Text>Current Value: {inputValue}</Text>
        <Text>Previous Value: {previousValue.current}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Key Points about useRef:</Text>
        <Text>• useRef returns a mutable ref object</Text>
        <Text>• Changes to .current don't trigger re-renders</Text>
        <Text>• Perfect for storing values that persist between renders</Text>
        <Text>• Commonly used for accessing DOM elements</Text>
        <Text>• Can store any mutable value</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  section: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    padding: 5,
    marginBottom: 5,
  },
});

export default RefScreen;
