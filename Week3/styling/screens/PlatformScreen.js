import React from "react";
//The platoform library is used to check the platform of the device
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

const PlatformScreen = () => {
  return (
    <View style={styles.container}>
      {/* Platform.OS can be used to conditionally render components */}
      {Platform.OS === "ios" ? (
        <Text style={styles.iosText}>This text only shows on iOS</Text>
      ) : (
        <Text style={styles.androidText}>This text only shows on Android</Text>
      )}

      {/* Platform.select allows you to choose different styles based on platform */}
      <View style={styles.platformBox}>
        <Text style={styles.platformText}>
          This box has different styles on iOS and Android
        </Text>
      </View>

      {/* Platform.Version can be used to check specific OS versions */}
      <Text style={styles.versionText}>
        {Platform.OS} version: {Platform.Version}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // Platform.select for different padding based on platform
    paddingTop: Platform.select({
      ios: 20,
      android: StatusBar.currentHeight,
    }),
    backgroundColor: "#f5f5f5",
  },
  iosText: {
    fontSize: 18,
    color: "#007AFF", // iOS blue
    textAlign: "center",
    margin: 10,
  },
  androidText: {
    fontSize: 18,
    color: "#2196F3", // Material Design blue
    textAlign: "center",
    margin: 10,
  },

  platformBox: {
    // Different styles for different platforms
    ...Platform.select({
      ios: {
        backgroundColor: "lightgray",
        borderRadius: 10,
        padding: 15,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        backgroundColor: "lightgray",
        borderRadius: 4,
        padding: 15,
        margin: 20,
        elevation: 5,
      },
    }),
  },
  platformText: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  versionText: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});

export default PlatformScreen;
