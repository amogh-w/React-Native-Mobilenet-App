import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import * as mobilenet from "@tensorflow-models/mobilenet";

const App: React.FC = () => {
  const [isTfReady, setIsTfReady] = useState(false);
  const [mobilenetModel, setMobilenetModel] = useState(null);

  useEffect(() => {
    (async function mango() {
      await tf.ready();
      setIsTfReady(true);
      try {
        let myModel = await mobilenet.load();
        setMobilenetModel(myModel);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
      <Text>TF Status: {isTfReady ? "👌" : "⏳"}</Text>
      <Text>Mobilenet Model Status: {mobilenetModel ? "👌" : "⏳"}</Text>
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
