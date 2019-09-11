import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

// react hooks in use here, to carry state on a functional component
export default function App() {
  const [outputText, setOutputText] = useState(
    "Open up App.js to start working on your app!"
  );
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button
        title="Change Text"
        onPress={() => setOutputText("The text has changed!")}
      />
    </View>
  );
}

// note that styling is done with JavaScript, RN just uses CSS-like property names
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
