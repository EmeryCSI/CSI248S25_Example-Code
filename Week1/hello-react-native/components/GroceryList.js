import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
} from "react-native";
import { useState } from "react";

export default function GroceryList() {
  //make a groceryList and add to state
  const [groceries, setGroceries] = useState(["Milk", "Eggs", "Bread"]);
  const [newGrocery, setNewGrocery] = useState("");
  function groceryHandler() {
    if (!newGrocery) {
      alert("You must type in a grocery");
      return;
    }
    const newArray = [...groceries, newGrocery];
    setGroceries(newArray);
    setNewGrocery("");
  }
  //this is a componenet
  //item and index will be passed to this component via props
  function renderGrocery({ item, index }) {
    return (
      <View>
        <Text>
          {item} {index}
        </Text>
      </View>
    );
  }
  return (
    <View>
      <Text>GroceryList</Text>
      <FlatList
        data={groceries}
        //   we pass a component to be rendered for each item in the array
        renderItem={renderGrocery}
        keyExtractor={(item, index) => index.toString()}
      />
      <View>
        <Text>Enter an item to add to the list</Text>
        {/* Take the last 10 minutes - Add an input and a button
        When button is clicked add item to the grocerlist. If input is empty
        Do not add item to grocerylist */}
        <TextInput
          value={newGrocery}
          onChangeText={setNewGrocery}
          placeholder="New Item"
        />
        <Button onPress={groceryHandler} title="Add Grocery" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
