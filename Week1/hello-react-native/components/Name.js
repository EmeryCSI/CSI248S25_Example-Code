import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";
//I want a label that says enter first name
//input for firstname
//I want a label that says enter last name
//input for lastname
//Button that when clicked pops up first + last name

export default function Name() {
  //whatever variables change and are displayed in the UI = state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const buttonHandler = () => {
    alert(`Hello ${firstName} ${lastName}`);
  };
  return (
    <View>
      <Text>Enter your first name:</Text>
      <TextInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <Text>Enter your last name:</Text>
      <TextInput
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <Button onPress={buttonHandler} title="Show full name"></Button>
      <Text>
        {firstName} {lastName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
