# React Native Mobilenet App (now with Local Images!)

This is a fork from https://github.com/amogh-w/React-Native-Mobilenet-App,
thank you [amogh-w](https://github.com/amogh-w)

Now it can fetch Local Images!

![working](/media/initial.gif)

## Resources:

- [Image Classification on React Native with TensorFlow.js and MobileNet](https://heartbeat.fritz.ai/image-classification-on-react-native-with-tensorflow-js-and-mobilenet-48a39185717c) - Tutorial for this project
- [React Native](https://github.com/facebook/react-native) - A framework for building native apps with React
- [tfjs-react-native](https://github.com/tensorflow/tfjs/tree/master/tfjs-react-native) - Platform Adapter for React Native
- [@tensorflow-models/mobilenet](https://github.com/tensorflow/tfjs-models) - Pre-trained TensorFlow.js models

## Available Scripts:

In the project directory, you can run: `yarn android`

The App will open on Simulator or device connected with adb.

Generate a keystore with this [guide](https://facebook.github.io/react-native/docs/signed-apk-android) in the android\app directory, and run:

`./gradlew clean` and then `./gradlew assembleRelease` to generate apk.

---
