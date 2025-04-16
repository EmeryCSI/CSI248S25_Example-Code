import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";

//lets talk to a crypto api and update the data frequently
//https://api.coinlore.net/api/tickers/
export default function updatingData() {
  const [bitcoinData, setBitcoinData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.coinlore.net/api/tickers/");
      console.log(response);
      const data = await response.json();
      // Find Bitcoin data (symbol: BTC)
      const bitcoin = data.data.find((coin) => coin.symbol === "BTC");
      setBitcoinData(bitcoin);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch initial data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {bitcoinData ? (
        <>
          <Text style={styles.title}>Bitcoin (BTC)</Text>
          <Text style={styles.price}>
            ${parseFloat(bitcoinData.price_usd).toLocaleString()}
          </Text>
          <Text style={styles.change}>
            24h Change: {bitcoinData.percent_change_24h}%
          </Text>
          <Text style={styles.marketCap}>
            Market Cap: $
            {parseFloat(bitcoinData.market_cap_usd).toLocaleString()}
          </Text>
        </>
      ) : (
        <Text>Loading Bitcoin data...</Text>
      )}

      <Button title="Update Data" onPress={fetchData} />
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2196F3",
    marginBottom: 10,
  },
  change: {
    fontSize: 18,
    marginBottom: 5,
  },
  marketCap: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
});
