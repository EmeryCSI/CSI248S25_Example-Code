import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import MemoScreen from "./screens/MemoScreen";
import RefScreen from "./screens/RefScreen";
import ParamsScreen from "./screens/ParamsScreen";
import DetailsScreen from "./screens/DetailsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Ref" component={RefScreen} />
        <Tab.Screen name="Memo" component={MemoScreen} />
        <Tab.Screen name="Params" component={ParamsScreen} />
        <Tab.Screen name="Details" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
