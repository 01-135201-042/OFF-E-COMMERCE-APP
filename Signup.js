import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Signup = () => {
  return (
    <View style={styles.signup}>
      <View style={[styles.mastersMasterButtonMaParent, styles.mastersLayout]}>
        <View style={styles.mastersMasterButtonMa}>
          <View style={[styles.container, styles.containerPosition]}>
            <View style={styles.iconLayout}>
              <Text style={[styles.sfSymbol, styles.symbolFlexBox]}>􀀁</Text>
            </View>
          </View>
          <Text style={[styles.signup1, styles.labelTypo]}>Signup</Text>
        </View>
        <View style={[styles.mastersMasterButtonMa1, styles.mastersBorder]}>
          <View style={[styles.container1, styles.containerPosition]}>
            <View style={[styles.google, styles.iconLayout]}>
              <View style={[styles.google1, styles.google1Position]}>
                <View style={[styles.rectangle, styles.rectanglePosition]} />
                <Image
                  style={[styles.vectorIcon, styles.vectorIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector.png")}
                />
              </View>
            </View>
            <Text style={[styles.label, styles.labelTypo]}>Google</Text>
            <View style={[styles.iconRight1, styles.iconLayout]}>
              <Text style={[styles.sfSymbol1, styles.symbolFlexBox]}>􀀁</Text>
            </View>
          </View>
        </View>
        <View style={[styles.mastersMasterButtonMa2, styles.google1Position]}>
          <View style={[styles.container2, styles.containerPosition]}>
            <View style={[styles.google, styles.iconLayout]}>
              <View style={[styles.google1, styles.google1Position]}>
                <View style={[styles.rectangle1, styles.rectanglePosition]} />
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
            </View>
            <Text style={[styles.label1, styles.labelTypo]}>Facebook</Text>
            <View style={[styles.iconRight2, styles.iconLayout]}>
              <Text style={[styles.sfSymbol1, styles.symbolFlexBox]}>􀀁</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.backIcon}
        resizeMode="cover"
        source={require("../assets/back.png")}
      />
      <Text style={[styles.signUp, styles.labelTypo]}>Sign Up</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.strongTypo]}>Username</Text>
        <View style={styles.usernameChild} />
        <Text style={[styles.estherHoward, styles.rememberMe1Typo]}>
          Esther Howard
        </Text>
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check.png")}
        />
      </View>
      <View style={[styles.emailAddress, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.strongTypo]}>Email Address</Text>
        <View style={styles.usernameChild} />
        <Text style={[styles.estherHoward, styles.rememberMe1Typo]}>
          bill.sanders@example.com
        </Text>
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check.png")}
        />
      </View>
      <View style={styles.rememberMe}>
        <Text style={[styles.rememberMe1, styles.rememberMe1Typo]}>
          Remember me
        </Text>
        <Image
          style={styles.switchesSwitchOn}
          resizeMode="cover"
          source={require("../assets/switches--switch-on.png")}
        />
      </View>
      <View style={[styles.password, styles.usernameLayout]}>
        <Text style={[styles.username1, styles.strongTypo]}>Password</Text>
        <View style={styles.usernameChild} />
        <Text style={[styles.estherHoward, styles.rememberMe1Typo]}>
          HJ@#9783kja
        </Text>
        <Text style={[styles.strong, styles.strongTypo]}>Strong</Text>
      </View>
      <Image
        style={[styles.icon1Masked, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-1-masked.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mastersLayout: {
    width: 335,
    position: "absolute",
  },
  containerPosition: {
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    marginTop: -11,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  symbolFlexBox: {
    justifyContent: "center",
    textAlign: "center",
    color: Color.darkBase,
    fontFamily: FontFamily.headlinesHeadline17,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlinesHeadline17_size,
    left: 0,
    top: 0,
    height: 22,
    width: 22,
    alignItems: "center",
    position: "absolute",
  },
  labelTypo: {
    textAlign: "left",
    fontWeight: "600",
  },
  mastersBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkBase,
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
  google1Position: {
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectanglePosition: {
    borderRadius: Border.br_5xl,
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  usernameLayout: {
    height: 61,
    left: 24,
    width: 335,
    position: "absolute",
  },
  strongTypo: {
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  rememberMe1Typo: {
    fontWeight: "500",
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  sfSymbol: {
    display: "none",
  },
  container: {
    marginLeft: -10.5,
  },
  signup1: {
    marginLeft: -27.5,
    top: 9,
    color: Color.black,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlinesHeadline17_size,
    left: "50%",
  },
  mastersMasterButtonMa: {
    marginLeft: -96.5,
    top: 144,
    shadowColor: "#bd8853",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 193,
    borderRadius: Border.br_3xs,
    bottom: 0,
    left: "50%",
    position: "absolute",
    backgroundColor: Color.darkBase,
  },
  rectangle: {
    backgroundColor: Color.tomato,
  },
  vectorIcon: {
    height: "68.04%",
    width: "66.67%",
    top: "15.98%",
    right: "16.67%",
    bottom: "15.98%",
    left: "16.67%",
  },
  google1: {
    bottom: 0,
    right: 0,
  },
  google: {
    overflow: "hidden",
  },
  label: {
    color: Color.tomato,
    marginLeft: 4,
    textAlign: "left",
    fontWeight: "600",
    fontFamily: FontFamily.headlinesHeadline17,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  sfSymbol1: {
    display: "flex",
  },
  iconRight1: {
    marginLeft: 4,
  },
  container1: {
    marginLeft: -54.5,
  },
  mastersMasterButtonMa1: {
    top: 59,
    borderColor: "#ea4335",
    height: 50,
    left: 0,
    width: 335,
    position: "absolute",
  },
  rectangle1: {
    backgroundColor: Color.cornflowerblue,
  },
  vectorIcon1: {
    height: "66.67%",
    width: "34.62%",
    top: "16.67%",
    right: "34.51%",
    bottom: "16.67%",
    left: "30.87%",
  },
  label1: {
    color: Color.cornflowerblue,
    marginLeft: 4,
    textAlign: "left",
    fontWeight: "600",
    fontFamily: FontFamily.headlinesHeadline17,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  iconRight2: {
    marginLeft: 4,
    display: "none",
  },
  container2: {
    marginLeft: -51.5,
  },
  mastersMasterButtonMa2: {
    bottom: 134,
    borderColor: "#5a7abc",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.darkBase,
  },
  mastersMasterButtonMaParent: {
    marginLeft: -167.5,
    top: 575,
    bottom: 53,
    left: "50%",
    width: 335,
  },
  backIcon: {
    top: 45,
    left: 20,
    width: 45,
    height: 45,
    position: "absolute",
  },
  signUp: {
    height: "3.94%",
    width: "28.53%",
    top: "27.22%",
    left: "35.73%",
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    color: Color.peru,
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  username1: {
    color: Color.gray_100,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    left: 0,
    top: 0,
    fontFamily: FontFamily.interRegular,
  },
  usernameChild: {
    top: 61,
    borderColor: "#e7e8ea",
    borderTopWidth: 1,
    width: 336,
    height: 1,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  estherHoward: {
    top: 29,
    fontSize: FontSize.size_mini,
    lineHeight: 17,
    fontFamily: FontFamily.interMedium,
    color: Color.peru,
  },
  checkIcon: {
    top: 28,
    left: 315,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  username: {
    top: 273,
  },
  emailAddress: {
    top: 435,
  },
  rememberMe1: {
    top: 2,
    fontFamily: FontFamily.manropeMedium,
    color: Color.gray_200,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
  },
  switchesSwitchOn: {
    top: -7,
    left: 305,
    width: 41,
    height: 40,
    position: "absolute",
  },
  rememberMe: {
    top: 528,
    height: 18,
    left: 24,
    width: 335,
    position: "absolute",
  },
  strong: {
    top: 31,
    left: 300,
    fontSize: FontSize.size_2xs,
    lineHeight: 12,
    color: Color.limegreen,
  },
  password: {
    top: 354,
  },
  icon1Masked: {
    height: "17.36%",
    width: "37.6%",
    top: "8%",
    right: "31.2%",
    bottom: "74.63%",
    left: "31.2%",
  },
  signup: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.darkBase,
  },
});

export default Signup;
