import React, { useState } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

const ClickCircle = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.circle} onPress={onPress}>
          <Text style={styles.Text}>Click Here</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {count ? count : null}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  circle: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    marginLeft: 150,
    borderRadius: 100,
    width: 90,
    height: 90
  },
  Text: {
    textAlign: "center",
    paddingTop: 25,
    color: "white"
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF",
    fontSize: 30,
  }
});

export default ClickCircle;