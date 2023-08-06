import * as React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Color } from "../GlobalStyles";

const Splash = () => {
  return (
    <View style={styles.splash}>
      <View style={[styles.splashChild, styles.splashChildPosition]} />
      <Image
        style={[styles.icon1Masked, styles.splashChildPosition]}
        resizeMode="cover"
        source={require("../assets/icon-1-masked1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashChildPosition: {
    position: "absolute",
    overflow: "hidden",
  },
  splashChild: {
    top: 156,
    left: -62,
    width: 500,
    height: 500,
    display: "none",
    backgroundColor: Color.darkBase,
    position: "absolute",
  },
  icon1Masked: {
    height: "24.75%",
    width: "39.73%",
    top: "37.68%",
    right: "30.13%",
    bottom: "37.56%",
    left: "30.13%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  splash: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.darkBase,
  },
});

export default Splash;
