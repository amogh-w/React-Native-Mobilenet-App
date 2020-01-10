import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";
import * as tf from "@tensorflow/tfjs";
import { fetch as tfjsFetch } from "@tensorflow/tfjs-react-native";
import * as mobilenet from "@tensorflow-models/mobilenet";
import * as jpeg from "jpeg-js";

const App: React.FC = () => {
  const [isTfReady, setIsTfReady] = useState(false);
  const [mobilenetModel, setMobilenetModel] = useState(null);
  const [image, setImage] = useState({
    uri: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
  });
  const [predictions, setPredictions] = useState(null);

  // === IMAGE TO TENSOR HELPER ==

  const imageToTensor = rawImageData => {
    const TO_UINT8ARRAY = true;
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY);
    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3);
    let offset = 0; // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset];
      buffer[i + 1] = data[offset + 1];
      buffer[i + 2] = data[offset + 2];
      offset += 4;
    }
    return tf.tensor3d(buffer, [height, width, 3]);
  };

  // === START CLASSIFICATION ==

  const classifyImage = async () => {
    try {
      const response = await tfjsFetch(image.uri, {}, { isBinary: true });
      const rawImageData = await response.arrayBuffer();
      const imageTensor = imageToTensor(rawImageData);
      const predictions = await mobilenetModel.classify(imageTensor);
      console.log(predictions);
      setPredictions(predictions);
    } catch (error) {
      console.log(error);
    }
  };

  // === CLEAR PREDICTIONS ==

  const clearPredictions = () => {
    setPredictions(null);
  };

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
      <Image
        source={{ uri: image.uri }}
        style={{ width: 200, height: 200, margin: 20 }}
      />
      <TextInput
        style={{
          marginBottom: 20,
          width: 200,
          height: 40,
          borderColor: "gray",
          borderWidth: 1
        }}
        onChangeText={text => setImage({ uri: text })}
        value={image.uri}
      />
      <Button
        title="Predict"
        onPress={classifyImage}
        disabled={mobilenetModel ? false : true}
      />
      {predictions ? (
        <View style={styles.predictions}>
          <Text
            style={{
              marginBottom: 20
            }}
          >
            I'm {predictions[0].probability.toFixed(2)}% sure it's a{" "}
            {predictions[0].className.toLowerCase()}
            {", "}
            it might also be a {predictions[1].className.toLowerCase()} or{" "}
            {predictions[2].className.toLowerCase()}
          </Text>
          <Button title="Clear" onPress={clearPredictions} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  predictions: {
    borderColor: "grey",
    borderWidth: 1,
    width: 300,
    padding: 20,
    margin: 20
  }
});

export default App;
