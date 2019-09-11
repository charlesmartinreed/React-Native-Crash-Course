# What is React Native?

- Built on React.js, which is a JS library from building User Interfaces
- Since react is platform agnostic and merely creates a virtual DOM that is then used to synchronize UI, state, etc to the visual layer for the platform, things like React Native are possible
- React Native itself is a collection of special React components that are compiled by React to **Native Widgets** for a given platform like _iOS and Android_
- React Native also gives us tools for **Native Platform API** and utilizing **Native Platform Code** for iOS and Android.
- As a result, we ultimately compile our React Native components (our Views are compiled) into native code for our target platform
- Our programming logic, however, is **not** compiled by React Native - it is _hosted on a JavaScript thread within the React Native app_.
- In summary, all of the views are compiled but the JavaScript logic code is run in a virtual machine that is communicating with the native APIs for a platform via a so-called bridge.

# How to create a React Native app

- Two main options - **Expo CLI Quickstart** and **React Native CLI Quickstart**
- [Expo](https://expo.io/) is a third-party service (free) that gives a sort of managed app development system that abstracts away a lot of the complexity of working with React Native. Of course, this means that some of the control you'd have from building a raw React Native app is removed.
- React Native CLI is more power-user means of creating a RN app and is endlessly customizable, but all the setup is on your shoulders. If you need to use native features for a piece of hardware or OS, you'll have to install the necessary SDKs, IDEs, etc.
- You can switch between the two, of course.
