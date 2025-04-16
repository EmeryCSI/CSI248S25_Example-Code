import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FetchingData from "./screens/fetchingData";
import UpdatingData from "./screens/updatingData";
import AsyncOperations from "./screens/asyncOperations";
import TimerInterval from "./screens/timerInterval";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="FetchingData"
          component={FetchingData}
          options={{ title: "Fetching Data" }}
        />
        <Tab.Screen
          name="UpdatingData"
          component={UpdatingData}
          options={{ title: "Updating Data" }}
        />
        <Tab.Screen
          name="AsyncOperations"
          component={AsyncOperations}
          options={{ title: "Async Operations" }}
        />
        <Tab.Screen
          name="TimerInterval"
          component={TimerInterval}
          options={{ title: "Timer Interval" }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
