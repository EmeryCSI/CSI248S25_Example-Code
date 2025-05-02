import React, { useState, useMemo } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MemoScreen = () => {
  const [userId, setUserId] = useState(1);
  const [result, setResult] = useState(null);

  // Regular fetch - runs every time
  const fetchUser = async (id) => {
    console.log("Fetching user data...");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.json();
  };

  // Memoized fetch - only runs when userId changes
  const memoizedUser = useMemo(async () => {
    console.log("Fetching memoized user data...");
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    return response.json();
  }, [userId]);

  const handleFetch = async () => {
    // Regular fetch
    const userData = await fetchUser(userId);

    // Memoized fetch
    const memoizedData = await memoizedUser;

    setResult({
      regular: userData,
      memoized: memoizedData,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useMemo with API Demo</Text>

      <View style={styles.section}>
        <Text>Current User ID: {userId}</Text>
        <Button
          title="Next User"
          onPress={() => setUserId((prev) => (prev % 10) + 1)}
        />
      </View>

      <Button title="Fetch Data" onPress={handleFetch} />

      {result && (
        <View style={styles.section}>
          <Text style={styles.subtitle}>Regular Fetch Result:</Text>
          <Text>Name: {result.regular.name}</Text>
          <Text>Email: {result.regular.email}</Text>

          <Text style={styles.subtitle}>Memoized Fetch Result:</Text>
          <Text>Name: {result.memoized.name}</Text>
          <Text>Email: {result.memoized.email}</Text>
        </View>
      )}

      <View style={styles.section}>
        <Text>Key Points:</Text>
        <Text>• Regular fetch runs every time</Text>
        <Text>• Memoized fetch only runs when userId changes</Text>
        <Text>• Check console logs to see when fetches occur</Text>
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
  section: {
    marginBottom: 15,
  },
  subtitle: {
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default MemoScreen;
