import { StyleSheet, Text, View, Button } from "react-native";
import { useState, useEffect } from "react";

export default function updatingData() {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://v2.jokeapi.dev/joke/Any?safe-mode");
      const data = await response.json();
      console.log(data);
      if (data.type === "single") {
        setJoke({
          setup: null,
          delivery: data.joke,
        });
      } else if (data.type === "twopart") {
        setJoke({ setup: data.setup, delivery: data.delivery });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchJoke();
  }, []);
  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loading}>Loading joke...</Text>
        <Button
          title="Get New Joke"
          onPress={fetchJoke}
          style={styles.button}
        />
      </View>
    );
  }

  if (joke) {
    return (
      <View style={styles.container}>
        {joke.setup && <Text style={styles.setup}>{joke.setup}</Text>}
        <Text style={styles.delivery}>{joke.delivery}</Text>
        <Button
          title="Get New Joke"
          onPress={fetchJoke}
          style={styles.button}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>No joke available</Text>
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
