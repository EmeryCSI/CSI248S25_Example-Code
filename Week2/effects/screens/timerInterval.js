import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";

export default function TimerInterval() {
  // State for different timer examples
  const [count, setCount] = useState(0); // Simple counter
  const [seconds, setSeconds] = useState(10); // Countdown timer
  const [isRunning, setIsRunning] = useState(false); // Timer control state

  /**
   * Example 1: Simple Interval Counter
   * This effect runs every 1000ms (1 second) and increments the count
   * The empty dependency array [] means it only runs once when mounted
   * and cleans up when unmounted
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function - important to prevent memory leaks
    return () => clearInterval(interval);
  }, []);

  /**
   * Example 2: Controlled Countdown Timer
   * This effect runs when isRunning changes
   * It starts/stops the countdown based on isRunning state
   * The effect depends on [isRunning] so it re-runs when that changes
   */
  useEffect(() => {
    let interval;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  /**
   * Example 3: One-time Delayed Effect
   * This effect runs once after 3000ms (3 seconds)
   * The empty dependency array means it only runs once when mounted
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("This message appears after 3 seconds!");
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Reset the countdown timer
  const resetTimer = () => {
    setSeconds(10);
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      {/* Example 1: Simple Counter */}
      <View style={styles.section}>
        <Text style={styles.title}>Simple Counter</Text>
        <Text style={styles.timerText}>{count}</Text>
        <Text style={styles.description}>
          This counter increments every second using setInterval
        </Text>
      </View>

      {/* Example 2: Countdown Timer */}
      <View style={styles.section}>
        <Text style={styles.title}>Countdown Timer</Text>
        <Text style={styles.timerText}>{seconds}</Text>
        <View style={styles.buttonContainer}>
          <Button
            title={isRunning ? "Pause" : "Start"}
            onPress={() => setIsRunning(!isRunning)}
          />
          <Button title="Reset" onPress={resetTimer} />
        </View>
        <Text style={styles.description}>
          This timer counts down from 10 seconds and can be controlled
        </Text>
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
  section: {
    marginBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timerText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
});
