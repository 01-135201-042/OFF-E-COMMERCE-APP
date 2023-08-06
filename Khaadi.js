import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Khaadi = () => {
  return (
    <View style={styles.khaadi}>
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={styles.cartIcon}
        resizeMode="cover"
        source={require("../assets/cart.png")}
      />
      <View style={[styles.vectorWrapper, styles.sortParentSpaceBlock]}>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector4.png")}
        />
      </View>
      <Text style={[styles.items, styles.itemsFlexBox]}>365 Items</Text>
      <Text style={[styles.availableInStock, styles.sortTypo]}>
        Available in stock
      </Text>
      <View style={[styles.sortParent, styles.sortParentSpaceBlock]}>
        <Image
          style={styles.sortIcon}
          resizeMode="cover"
          source={require("../assets/sort.png")}
        />
        <Text style={[styles.sort, styles.sortTypo]}>Sort</Text>
      </View>
      <View style={[styles.card01, styles.cardLayout]}>
        <Image
          style={[styles.card01Child, styles.rs2500Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-5683.png")}
        />
        <Text
          style={[styles.shalwarKameezKhaadi, styles.shalwarTypo]}
        >{`Shalwar Kameez
Khaadi`}</Text>
        <Text style={[styles.rs2500, styles.rs2500Position]}>Rs 2,500</Text>
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart1.png")}
        />
      </View>
      <View style={[styles.card02, styles.cardLayout]}>
        <Image
          style={[styles.card01Child, styles.rs2500Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-5693.png")}
        />
        <Text
          style={[styles.loanShalwarKameez, styles.shalwarTypo]}
        >{`Loan Shalwar Kameez
Khaadi`}</Text>
        <Text style={[styles.rs2500, styles.rs2500Position]}>Rs 3,500</Text>
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart1.png")}
        />
      </View>
      <View style={[styles.card03, styles.cardPosition1]}>
        <Image
          style={[styles.card01Child, styles.rs2500Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-5684.png")}
        />
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart1.png")}
        />
        <Text
          style={[styles.shalwarKameezKhaadi, styles.shalwarTypo]}
        >{`2pc Loan
Khaadi`}</Text>
        <Text style={[styles.rs2500, styles.rs2500Position]}>Rs 2,000</Text>
      </View>
      <View style={[styles.card031, styles.cardPosition]}>
        <Image
          style={[styles.card01Child, styles.rs2500Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-5685.png")}
        />
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart1.png")}
        />
        <Text
          style={[styles.shalwarKameezKhaadi, styles.shalwarTypo]}
        >{`Training Top
Nike Sport Clash`}</Text>
        <Text style={[styles.rs2500, styles.rs2500Position]}>$99</Text>
      </View>
      <View style={[styles.card04, styles.cardPosition1]}>
        <Image
          style={[styles.card01Child, styles.rs2500Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-5694.png")}
        />
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart1.png")}
        />
        <Text style={[styles.loanShalwarKameez, styles.shalwarTypo]}>{`3pc Loan
Khaadi`}</Text>
        <Text style={[styles.rs2500, styles.rs2500Position]}>Rs 4,500</Text>
      </View>
      <View style={[styles.card041, styles.cardPosition]}>
        <Image
          style={[styles.card01Child, styles.rs2500Position]}
          resizeMode="cover"
          source={require("../assets/rectangle-5695.png")}
        />
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart1.png")}
        />
        <Text style={[styles.loanShalwarKameez, styles.shalwarTypo]}>
          Trail Running Jacket Nike Windrunner
        </Text>
        <Text style={[styles.rs2500, styles.rs2500Position]}>$99</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sortParentSpaceBlock: {
    padding: Padding.p_3xs,
    backgroundColor: Color.ghostwhite,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  itemsFlexBox: {
    textAlign: "left",
    color: Color.gray_200,
  },
  sortTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  cardLayout: {
    height: 257,
    top: 176,
    width: 160,
    position: "absolute",
  },
  rs2500Position: {
    left: 0,
    position: "absolute",
  },
  shalwarTypo: {
    lineHeight: 15,
    fontSize: FontSize.size_2xs,
    top: 208,
    left: 0,
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  heartIconLayout: {
    height: 20,
    width: 20,
    top: 15,
    position: "absolute",
    overflow: "hidden",
  },
  cardPosition1: {
    top: 448,
    height: 257,
    width: 160,
    position: "absolute",
  },
  cardPosition: {
    top: 720,
    height: 257,
    width: 160,
    position: "absolute",
  },
  menuIcon: {
    top: 44,
    width: 46,
    height: 46,
    left: 20,
    position: "absolute",
  },
  cartIcon: {
    left: 310,
    width: 45,
    height: 45,
    top: 45,
    position: "absolute",
  },
  vectorIcon: {
    width: 51,
    height: 24,
  },
  vectorWrapper: {
    left: 157,
    top: 45,
  },
  items: {
    top: 115,
    fontSize: FontSize.headlinesHeadline17_size,
    lineHeight: 19,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  availableInStock: {
    top: 139,
    fontFamily: FontFamily.interRegular,
    color: Color.lightslategray,
    left: 20,
    position: "absolute",
  },
  sortIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  sort: {
    marginLeft: 5,
    color: Color.gray_200,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  sortParent: {
    top: 117,
    left: 284,
    flexDirection: "row",
    alignItems: "center",
  },
  card01Child: {
    top: 0,
    borderRadius: Border.br_mini,
    height: 203,
    width: 160,
    left: 0,
  },
  shalwarKameezKhaadi: {
    width: 117,
  },
  rs2500: {
    top: 243,
    fontSize: FontSize.size_smi,
    lineHeight: 14,
    fontWeight: "600",
    fontFamily: FontFamily.interSemiBold,
    textAlign: "left",
    color: Color.gray_200,
  },
  heartIcon: {
    left: 128,
  },
  card01: {
    left: 20,
  },
  loanShalwarKameez: {
    width: 136,
  },
  heartIcon1: {
    left: 125,
  },
  card02: {
    left: 195,
  },
  card03: {
    left: 20,
  },
  card031: {
    left: 20,
  },
  card04: {
    left: 195,
  },
  card041: {
    left: 195,
  },
  khaadi: {
    backgroundColor: Color.gray_300,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Khaadi;
