import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ParamsScreen = () => {
  // useNavigation hook gives us access to navigation methods
  // This is how we can navigate between screens
  const navigation = useNavigation();

  // State to store the message we want to pass
  const [message, setMessage] = useState("");

  // Function to handle navigation to Details screen
  // navigation.navigate() takes two arguments:
  // 1. The name of the screen to navigate to ('Details')
  // 2. An object containing the params we want to pass ({ message: ... })
  const handleNavigate = () => {
    navigation.navigate("Details", {
      // If no message is entered, use a default message
      message: message || "No message entered",
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Passing Params Demo</Text>

      {/* TextInput to collect the message we want to pass */}
      <TextInput
        style={styles.input}
        placeholder="Enter a message"
        value={message}
        onChangeText={setMessage}
      />

      {/* Button that triggers navigation with our message */}
      <Button title="Send to Details Screen" onPress={handleNavigate} />

      <View style={styles.section}>
        <Text>Key Points:</Text>
        <Text>• Enter a message above</Text>
        <Text>• Click the button to pass it to Details screen</Text>
        <Text>• The message will appear in the Details screen</Text>
      </View>
    </View>
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
  input: {
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
  },
  section: {
    marginTop: 20,
  },
});

export default ParamsScreen;
