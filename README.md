# React Native Mobilenet App

Testing Tensorflow.js adapter for React Native to enable on-device computing capabilities with the Mobilenet Pre-trained model.

![working](/media/screenshot.png)

## Resources:

- [Image Classification on React Native with TensorFlow.js and MobileNet](https://heartbeat.fritz.ai/image-classification-on-react-native-with-tensorflow-js-and-mobilenet-48a39185717c) - Tutorial for this project
- [React Native](https://github.com/facebook/react-native) - A framework for building native apps with React
- [tfjs-react-native](https://github.com/tensorflow/tfjs/tree/master/tfjs-react-native) - Platform Adapter for React Native
- [@tensorflow-models/mobilenet](https://github.com/tensorflow/tfjs-models) - Pre-trained TensorFlow.js models

## Important:

~Picking an image from the gallery is limited by the tfjs fetch request - [Read More](https://github.com/amandeepmittal/mobilenet-tfjs-expo/issues/1)~

<details>
  <summary>Fixed by @https://github.com/toketas</summary>
  
  Now it can fetch Local Images!
  ![working](/media/initial.gif)
</details>

## Available Scripts:

In the project directory, you can run: `yarn android`

The App will open on Simulator or device connected with adb.

Generate a keystore with this [guide](https://facebook.github.io/react-native/docs/signed-apk-android) in the android\app directory, and run:

`./gradlew clean` and then `./gradlew assembleRelease` to generate apk.

---
