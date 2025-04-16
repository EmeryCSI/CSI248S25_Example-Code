import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
//The most common use of useEffect is to fetch data from an API
//It is used together with state to display the data in the UI
export default function fetchingData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect() is a function that takes a callback function and a dependency array
  //The callback function is called when the component mounts
  //The dependency array is an array of values that the callback function depends on
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <Text>fetchingData</Text>
      {data.map((item) => (
        <Text key={item.id}>{item.title}</Text>
      ))}
    </View>
  );
}
