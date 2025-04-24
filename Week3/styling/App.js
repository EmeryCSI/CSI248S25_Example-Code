import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ColumnContainer from "./screens/ColumnContainer";
import RowContainer from "./screens/RowContainer";
import GridContainer from "./screens/GridContainer";
import PlatformScreen from "./screens/PlatformScreen";
import ButtonScreen from "./screens/ButtonScreen";
// Create the tab navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "ColumnContainer") {
              iconName = focused ? "swap-vertical" : "swap-vertical-outline";
            } else if (route.name === "RowContainer") {
              iconName = focused
                ? "swap-horizontal"
                : "swap-horizontal-outline";
            } else if (route.name === "GridContainer") {
              iconName = focused ? "grid" : "grid-outline";
            } else if (route.name === "PlatformScreen") {
              iconName = focused ? "logo-react" : "logo-react";
            } else if (route.name === "ButtonScreen") {
              iconName = focused ? "radio-button-on" : "radio-button-off";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "coral",
          tabBarInactiveTintColor: "slategray",
        })}
      >
        <Tab.Screen name="ColumnContainer" component={ColumnContainer} />
        <Tab.Screen name="RowContainer" component={RowContainer} />
        <Tab.Screen name="GridContainer" component={GridContainer} />
        <Tab.Screen name="PlatformScreen" component={PlatformScreen} />
        <Tab.Screen name="ButtonScreen" component={ButtonScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
