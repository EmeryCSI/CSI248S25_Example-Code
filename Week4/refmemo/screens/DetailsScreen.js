import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const DetailsScreen = () => {
  // useRoute hook gives us access to the current route
  // This includes any params that were passed during navigation
  const route = useRoute();

  // Destructure the message from route.params
  // This is how we access the data that was passed from the previous screen
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      {/* Display the message that was passed from ParamsScreen */}
      <Text style={styles.message}>Message received: {message}</Text>

      <View style={styles.section}>
        <Text>Key Points:</Text>
        {/* route.params contains all the data passed during navigation */}
        <Text>• Params are accessed via route.params</Text>
        <Text>• The message was passed from the Params screen</Text>
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
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
  section: {
    marginTop: 20,
  },
});

export default DetailsScreen;
