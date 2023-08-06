import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.bg, styles.bgPosition]}>
        <View style={styles.text}>
          <Text style={styles.hello}>Hello</Text>
          <Text style={[styles.welcomeToOff, styles.search1Clr]}>
            Welcome to OFF.
          </Text>
        </View>
        <View style={styles.search}>
          <Image
            style={[styles.searchIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/search.png")}
          />
          <Text style={[styles.search1, styles.search1Clr]}>Search...</Text>
        </View>
        <View style={[styles.voice, styles.voiceLayout]}>
          <View style={[styles.voiceChild, styles.voiceLayout]} />
        </View>
        <View style={[styles.chooseBrand, styles.chooseBrandPosition]}>
          <Text style={[styles.viewAll, styles.rs2500Typo]}>View All</Text>
          <View style={[styles.adidas, styles.adidasLayout]}>
            <View style={[styles.adidasChild, styles.adidasLayout]} />
            <View style={[styles.adidasItem, styles.itemLayout]} />
            <Text style={[styles.khaadi, styles.gulTypo]}>Khaadi</Text>
          </View>
          <View style={[styles.nike, styles.nikeLayout]}>
            <View style={[styles.nikeChild, styles.nikeLayout]} />
            <View style={[styles.nikeItem, styles.itemLayout]} />
            <Text style={[styles.gul, styles.gulTypo]}>Gul</Text>
          </View>
          <Text style={[styles.chooseBrand1, styles.gulTypo]}>
            Choose Brand
          </Text>
          <View style={[styles.fila, styles.filaLayout]}>
            <View style={[styles.filaChild, styles.filaLayout]} />
            <View style={[styles.nikeItem, styles.itemLayout]} />
            <Text style={[styles.gul, styles.gulTypo]}>Mari</Text>
          </View>
        </View>
        <View style={[styles.newArraival, styles.chooseBrandPosition]}>
          <Text style={[styles.viewAll, styles.rs2500Typo]}>View All</Text>
          <Text style={[styles.chooseBrand1, styles.gulTypo]}>
            New Arraival
          </Text>
          <View style={[styles.card01, styles.cardLayout]}>
            <Image
              style={styles.card01Child}
              resizeMode="cover"
              source={require("../assets/rectangle-5686.png")}
            />
            <Text
              style={[styles.shalwarKameezKhaadi, styles.shalwarTypo]}
            >{`Shalwar Kameez
Khaadi`}</Text>
            <Text style={[styles.rs2500, styles.rs2500Typo]}>Rs 2,500</Text>
            <Image
              style={[styles.heartIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/heart1.png")}
            />
          </View>
          <View style={[styles.card02, styles.cardLayout]}>
            <Image
              style={styles.card01Child}
              resizeMode="cover"
              source={require("../assets/rectangle-5696.png")}
            />
            <Text
              style={[styles.loanShalwarKameez, styles.shalwarTypo]}
            >{`Loan Shalwar Kameez
Khaadi`}</Text>
            <Text style={[styles.rs2500, styles.rs2500Typo]}>Rs 3,500</Text>
            <Image
              style={[styles.heartIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/heart1.png")}
            />
          </View>
          <View style={[styles.card03, styles.cardPosition]}>
            <Image
              style={styles.card01Child}
              resizeMode="cover"
              source={require("../assets/rectangle-5687.png")}
            />
            <Image
              style={[styles.heartIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/heart1.png")}
            />
            <Text
              style={[styles.shalwarKameezKhaadi, styles.shalwarTypo]}
            >{`Training Top
Nike Sport Clash`}</Text>
            <Text style={[styles.rs2500, styles.rs2500Typo]}>$99</Text>
          </View>
          <View style={[styles.card04, styles.cardPosition]}>
            <Image
              style={styles.card01Child}
              resizeMode="cover"
              source={require("../assets/rectangle-5697.png")}
            />
            <Image
              style={[styles.heartIcon, styles.iconLayout1]}
              resizeMode="cover"
              source={require("../assets/heart1.png")}
            />
            <Text style={[styles.loanShalwarKameez, styles.shalwarTypo]}>
              Trail Running Jacket Nike Windrunner
            </Text>
            <Text style={[styles.rs2500, styles.rs2500Typo]}>$99</Text>
          </View>
        </View>
        <View style={[styles.tab, styles.bgPosition]}>
          <View style={styles.tabChild} />
          <View style={[styles.bag, styles.bagPosition]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.heart, styles.bagPosition]}>
            <Image
              style={styles.iconLayout1}
              resizeMode="cover"
              source={require("../assets/vector5.png")}
            />
          </View>
          <View style={[styles.wallet, styles.bagPosition]}>
            <Image
              style={styles.vectorIcon2}
              resizeMode="cover"
              source={require("../assets/vector1.png")}
            />
          </View>
          <View style={[styles.home1, styles.bagPosition]}>
            <Text style={styles.home2}>Home</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.cartIcon, styles.cartIconLayout]}
        resizeMode="cover"
        source={require("../assets/cart.png")}
      />
      <Image
        style={[styles.cartIcon1, styles.cartIconLayout]}
        resizeMode="cover"
        source={require("../assets/cart1.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.iconSearch, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-icon-search.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  search1Clr: {
    color: Color.lightslategray,
    fontFamily: FontFamily.interRegular,
  },
  iconLayout1: {
    height: 20,
    width: 20,
  },
  voiceLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  chooseBrandPosition: {
    width: 335,
    left: 20,
    position: "absolute",
  },
  rs2500Typo: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  adidasLayout: {
    width: 115,
    height: 50,
    left: 0,
    position: "absolute",
  },
  itemLayout: {
    height: 40,
    width: 40,
    backgroundColor: Color.gray_300,
    top: 5,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  gulTypo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.gray_200,
    position: "absolute",
  },
  nikeLayout: {
    width: 98,
    height: 50,
    position: "absolute",
  },
  filaLayout: {
    width: 91,
    height: 50,
    position: "absolute",
  },
  cardLayout: {
    height: 257,
    width: 163,
    top: 34,
    position: "absolute",
  },
  shalwarTypo: {
    lineHeight: 15,
    top: 208,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.gray_200,
    left: 0,
    position: "absolute",
  },
  cardPosition: {
    top: 306,
    height: 257,
    width: 163,
    position: "absolute",
  },
  bagPosition: {
    width: "17.87%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  cartIconLayout: {
    height: 45,
    width: 45,
    top: 45,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  hello: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
  },
  welcomeToOff: {
    marginTop: 5,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  text: {
    justifyContent: "center",
    left: 20,
    top: 0,
    position: "absolute",
  },
  searchIcon: {
    overflow: "hidden",
  },
  search1: {
    marginLeft: 10,
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  search: {
    width: 275,
    padding: Padding.p_mini,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_3xs,
    top: 73,
    left: 20,
    position: "absolute",
  },
  voiceChild: {
    backgroundColor: Color.mediumslateblue,
    borderRadius: Border.br_3xs,
    height: 50,
    width: 50,
    top: 0,
    left: 0,
  },
  voice: {
    left: 305,
    height: 50,
    width: 50,
    top: 73,
  },
  viewAll: {
    top: 3,
    left: 286,
    color: Color.lightslategray,
    fontFamily: FontFamily.interRegular,
  },
  adidasChild: {
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_3xs,
    top: 0,
  },
  adidasItem: {
    left: 5,
  },
  khaadi: {
    left: 55,
    top: 17,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
  },
  adidas: {
    top: 34,
  },
  nikeChild: {
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  nikeItem: {
    left: 6,
  },
  gul: {
    left: 56,
    top: 17,
    fontWeight: "500",
    lineHeight: 17,
    fontSize: FontSize.size_mini,
  },
  nike: {
    left: 125,
    top: 34,
  },
  chooseBrand1: {
    fontSize: FontSize.headlinesHeadline17_size,
    lineHeight: 19,
    fontWeight: "500",
    top: 0,
    left: 0,
  },
  filaChild: {
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
  },
  fila: {
    left: 233,
    top: 34,
  },
  chooseBrand: {
    top: 143,
    height: 84,
  },
  card01Child: {
    borderRadius: Border.br_mini,
    height: 203,
    width: 163,
    top: 0,
    left: 0,
    position: "absolute",
  },
  shalwarKameezKhaadi: {
    width: 117,
  },
  rs2500: {
    top: 243,
    color: Color.gray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_smi,
    left: 0,
  },
  heartIcon: {
    top: 15,
    left: 128,
    position: "absolute",
    overflow: "hidden",
  },
  card01: {
    left: 0,
  },
  loanShalwarKameez: {
    width: 136,
  },
  card02: {
    left: 172,
  },
  card03: {
    left: 0,
  },
  card04: {
    left: 172,
  },
  newArraival: {
    top: 242,
    height: 563,
  },
  tabChild: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.darkBase,
  },
  vectorIcon: {
    height: 21,
    width: 20,
  },
  bag: {
    right: "29.33%",
    left: "52.8%",
    paddingHorizontal: Padding.p_10xs,
    paddingVertical: Padding.p_11xs,
    flexDirection: "row",
    width: "17.87%",
    overflow: "hidden",
  },
  heart: {
    right: "53.07%",
    left: "29.07%",
    padding: Padding.p_10xs,
    overflow: "hidden",
  },
  vectorIcon2: {
    width: 21,
    height: 19,
  },
  wallet: {
    right: "5.6%",
    left: "76.53%",
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_10xs,
    overflow: "hidden",
  },
  home2: {
    lineHeight: 12,
    color: Color.mediumslateblue,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  home1: {
    right: "76.8%",
    left: "5.33%",
    padding: Padding.p_3xs,
    flexDirection: "row",
    width: "17.87%",
  },
  tab: {
    top: 622,
    shadowColor: "rgba(29, 30, 32, 0.08)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    height: 80,
  },
  bg: {
    top: 110,
    height: 805,
  },
  vectorIcon3: {
    top: 307,
    left: 30,
    width: 30,
    height: 14,
    position: "absolute",
  },
  cartIcon: {
    left: 309,
  },
  cartIcon1: {
    left: 260,
  },
  vectorIcon4: {
    height: "2.89%",
    width: "5.73%",
    top: "6.93%",
    right: "21.93%",
    bottom: "90.18%",
    left: "72.33%",
  },
  menuIcon: {
    top: 44,
    width: 46,
    height: 46,
    left: 20,
    position: "absolute",
  },
  vectorIcon5: {
    height: "2.96%",
    width: "5.07%",
    top: "37.19%",
    right: "52%",
    bottom: "59.85%",
    left: "42.93%",
  },
  vectorIcon6: {
    height: "1.48%",
    width: "8.8%",
    top: "37.81%",
    right: "21.33%",
    bottom: "60.71%",
    left: "69.87%",
  },
  iconSearch: {
    height: "3.94%",
    width: "8.53%",
    top: "23.68%",
    right: "7.67%",
    bottom: "72.38%",
    left: "83.8%",
  },
  home: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.darkBase,
  },
});

export default Home;
