import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import * as mobilenet from "@tensorflow-models/mobilenet";

const App: React.FC = () => {
  const [isTfReady, setIsTfReady] = useState(false);
  const [mobilenetModel, setMobilenetModel] = useState(null);
  const [image, setImage] = useState({
    uri: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
  });

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
      <Image source={{ uri: image.uri }} style={{ width: 200, height: 200 }} />
      <TextInput
        style={{ width: 200, height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setImage({ uri: text })}
        value={image.uri}
      />
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
