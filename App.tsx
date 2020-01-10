import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as tf from "@tensorflow/tfjs";

const App: React.FC = () => {
  const [isTfReady, setIsTfReady] = useState(false);

  useEffect(() => {
    (async function mango() {
      await tf.ready();
      setIsTfReady(true);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Text>TF Status: {isTfReady ? "👌" : "⏳"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
