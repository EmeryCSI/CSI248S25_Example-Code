import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";

//lets talk to a crypto api and update the data frequently
//https://api.coinlore.net/api/tickers/
export default function updatingData() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
      const data = await response.json();

      if (data.type === "single") {
        setJoke({
          setup: null,
          delivery: data.joke,
        });
      } else {
        setJoke({
          setup: data.setup,
          delivery: data.delivery,
        });
      }
    } catch (error) {
      console.error("Error fetching joke:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial joke when component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loading}>Loading joke...</Text>
      ) : joke ? (
        <>
          {joke.setup && <Text style={styles.setup}>{joke.setup}</Text>}
          <Text style={styles.delivery}>{joke.delivery}</Text>
        </>
      ) : (
        <Text>No joke available</Text>
      )}

      <Button title="Get New Joke" onPress={fetchJoke} style={styles.button} />
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
  setup: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  delivery: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2196F3",
    marginBottom: 30,
  },
  loading: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});
