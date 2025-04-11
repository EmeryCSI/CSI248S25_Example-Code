import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Name from "./components/Name";
import GroceryList from "./components/GroceryList";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native on the Web</Text>
      {/* <Name /> */}
      <GroceryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
