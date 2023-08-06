import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Signin = () => {
  return (
    <View style={styles.signin}>
      <View style={styles.mastersMasterButtonMaParent}>
        <View style={styles.mastersMasterButtonMa}>
          <View style={[styles.container, styles.containerPosition]}>
            <View style={styles.iconLayout}>
              <Text style={[styles.sfSymbol, styles.symbolFlexBox]}>􀀁</Text>
            </View>
          </View>
          <Text style={[styles.login, styles.loginTypo]}>Login</Text>
        </View>
        <View style={styles.mastersMasterButtonMa1}>
          <View style={[styles.container1, styles.containerPosition]}>
            <View style={[styles.google, styles.iconLayout]}>
              <View style={styles.google1}>
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
        <View style={styles.mastersMasterButtonMa2}>
          <View style={[styles.container2, styles.containerPosition]}>
            <View style={[styles.google, styles.iconLayout]}>
              <View style={styles.google1}>
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
      <Image
        style={[styles.signinChild, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/group-26.png")}
      />
      <Image
        style={[styles.icon1Masked, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/icon-1-masked.png")}
      />
      <Text style={[styles.signIn, styles.loginTypo]}>Sign In</Text>
      <View style={[styles.username, styles.usernameLayout]}>
        <Text style={styles.username1}>Username</Text>
        <View style={styles.usernameChild} />
        <Text style={[styles.estherHoward, styles.estherHowardTypo]}>
          Esther Howard
        </Text>
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check.png")}
        />
      </View>
      <View style={styles.rememberMe}>
        <Text style={styles.rememberMe1}>Remember me</Text>
        <Image
          style={styles.switchesSwitchOn}
          resizeMode="cover"
          source={require("../assets/switches--switch-on.png")}
        />
      </View>
      <View style={[styles.password, styles.usernameLayout]}>
        <Text style={styles.username1}>Password</Text>
        <View style={styles.usernameChild} />
        <Text style={[styles.estherHoward, styles.estherHowardTypo]}>
          HJ@#9783kja
        </Text>
        <Text style={styles.strong}>Strong</Text>
      </View>
      <Text style={[styles.forgotPassword, styles.estherHowardTypo1]}>
        Forgot password?
      </Text>
      <Text style={styles.byConnectingYourContainer}>
        <Text style={styles.byConnectingYourAccountCon}>
          <Text style={styles.byConnectingYour}>
            By connecting your account confirm that you agree with our
          </Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={[styles.termAndCondition, styles.estherHowardTypo]}>
          Term and Condition
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
    height: 22,
    width: 22,
    alignItems: "center",
    top: 0,
    position: "absolute",
  },
  loginTypo: {
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
  rectanglePosition: {
    borderRadius: Border.br_5xl,
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelTypo: {
    fontWeight: "600",
    marginLeft: 4,
    textAlign: "left",
    fontFamily: FontFamily.headlinesHeadline17,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlinesHeadline17_size,
  },
  usernameLayout: {
    height: 61,
    left: 23,
    width: 335,
    position: "absolute",
  },
  estherHowardTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  estherHowardTypo1: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  sfSymbol: {
    display: "none",
  },
  container: {
    marginLeft: -10.5,
  },
  login: {
    marginLeft: -21.5,
    top: 9,
    textAlign: "left",
    color: Color.black,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: FontSize.headlinesHeadline17_size,
    fontFamily: FontFamily.interSemiBold,
    left: "50%",
  },
  mastersMasterButtonMa: {
    borderRadius: Border.br_3xs,
    bottom: 0,
    top: 0,
    width: 193,
    left: "50%",
    marginLeft: -96.5,
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
    right: 0,
    left: 0,
    bottom: 0,
    top: 0,
    position: "absolute",
  },
  google: {
    overflow: "hidden",
  },
  label: {
    color: Color.tomato,
    marginLeft: 4,
    textAlign: "left",
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
    top: -100,
    height: 50,
    width: 335,
    left: -71,
    display: "none",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.darkBase,
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
  },
  iconRight2: {
    marginLeft: 4,
    display: "none",
  },
  container2: {
    marginLeft: -51.5,
  },
  mastersMasterButtonMa2: {
    top: -159,
    right: -71,
    bottom: 149,
    left: -71,
    display: "none",
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.darkBase,
  },
  mastersMasterButtonMaParent: {
    top: 719,
    bottom: 53,
    shadowColor: "#bd8853",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 193,
    left: "50%",
    marginLeft: -96.5,
    position: "absolute",
  },
  backIcon: {
    top: 45,
    left: 20,
    width: 45,
    height: 45,
    position: "absolute",
  },
  signinChild: {
    height: "11.08%",
    width: "23.2%",
    top: "11.08%",
    right: "38.4%",
    bottom: "77.83%",
    left: "38.4%",
    display: "none",
  },
  icon1Masked: {
    height: "17.36%",
    width: "37.6%",
    top: "7.64%",
    right: "30.4%",
    bottom: "75%",
    left: "32%",
  },
  signIn: {
    height: "3.94%",
    width: "28.53%",
    top: "27.22%",
    left: "35.73%",
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    color: Color.peru,
    textAlign: "left",
  },
  username1: {
    color: Color.gray_100,
    fontFamily: FontFamily.interRegular,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  usernameChild: {
    top: 61,
    borderStyle: "solid",
    borderColor: "#e7e8ea",
    borderTopWidth: 1,
    width: 336,
    height: 1,
    left: 0,
    position: "absolute",
  },
  estherHoward: {
    top: 29,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
    color: Color.peru,
    left: 0,
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
    top: 277,
  },
  rememberMe1: {
    top: 2,
    fontFamily: FontFamily.manropeMedium,
    color: Color.gray_200,
    fontWeight: "500",
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    left: 0,
    position: "absolute",
  },
  switchesSwitchOn: {
    top: -7,
    left: 305,
    width: 41,
    height: 40,
    position: "absolute",
  },
  rememberMe: {
    top: 506,
    height: 18,
    left: 23,
    width: 335,
    position: "absolute",
  },
  strong: {
    top: 31,
    left: 300,
    fontSize: FontSize.size_2xs,
    lineHeight: 12,
    color: Color.limegreen,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
  },
  password: {
    top: 358,
  },
  forgotPassword: {
    top: 449,
    left: 231,
    color: "#a71408",
    fontFamily: FontFamily.interRegular,
  },
  byConnectingYour: {
    color: Color.peru,
  },
  text: {
    color: "#8f959e",
  },
  byConnectingYourAccountCon: {
    fontFamily: FontFamily.interRegular,
  },
  termAndCondition: {
    color: Color.black,
  },
  byConnectingYourContainer: {
    top: 655,
    left: 28,
    lineHeight: 18,
    width: 326,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    position: "absolute",
  },
  signin: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.darkBase,
  },
});

export default Signin;
