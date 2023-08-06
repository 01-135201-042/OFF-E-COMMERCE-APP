import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Menu = () => {
  return (
    <View style={styles.menu}>
      <View style={[styles.bg, styles.bgLayout]}>
        <View style={styles.text}>
          <Text style={[styles.hello, styles.helloTypo]}>Hello</Text>
          <Text style={[styles.welcomeToOff, styles.search1Typo]}>
            Welcome to OFF.
          </Text>
        </View>
        <View style={[styles.search, styles.searchFlexBox]}>
          <Image
            style={[styles.searchIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/search.png")}
          />
          <Text style={[styles.search1, styles.search1Typo]}>Search...</Text>
        </View>
        <Image
          style={styles.voiceIcon}
          resizeMode="cover"
          source={require("../assets/voice.png")}
        />
        <View style={[styles.chooseBrand, styles.chooseBrandPosition]}>
          <Text style={[styles.viewAll, styles.rs2500Layout]}>View All</Text>
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
          <Text style={[styles.chooseBrand1, styles.zahraBatoolTypo]}>
            Choose Brand
          </Text>
          <View style={[styles.fila, styles.filaLayout]}>
            <View style={[styles.filaChild, styles.filaLayout]} />
            <View style={[styles.nikeItem, styles.itemLayout]} />
            <Text style={[styles.gul, styles.gulTypo]}>Mari</Text>
          </View>
        </View>
        <View style={[styles.newArraival, styles.chooseBrandPosition]}>
          <Text style={[styles.viewAll, styles.rs2500Layout]}>View All</Text>
          <Text style={[styles.chooseBrand1, styles.zahraBatoolTypo]}>
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
            <Text style={[styles.rs2500, styles.rs2500Layout]}>Rs 2,500</Text>
            <Image
              style={[styles.heartIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/heart.png")}
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
            <Text style={[styles.rs2500, styles.rs2500Layout]}>Rs 3,500</Text>
            <Image
              style={[styles.heartIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/heart.png")}
            />
          </View>
          <View style={[styles.card03, styles.cardPosition]}>
            <Image
              style={styles.card01Child}
              resizeMode="cover"
              source={require("../assets/rectangle-5687.png")}
            />
            <Image
              style={[styles.heartIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/heart.png")}
            />
            <Text
              style={[styles.shalwarKameezKhaadi, styles.shalwarTypo]}
            >{`Training Top
Nike Sport Clash`}</Text>
            <Text style={[styles.rs2500, styles.rs2500Layout]}>$99</Text>
          </View>
          <View style={[styles.card04, styles.cardPosition]}>
            <Image
              style={styles.card01Child}
              resizeMode="cover"
              source={require("../assets/rectangle-5697.png")}
            />
            <Image
              style={[styles.heartIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/heart.png")}
            />
            <Text style={[styles.loanShalwarKameez, styles.shalwarTypo]}>
              Trail Running Jacket Nike Windrunner
            </Text>
            <Text style={[styles.rs2500, styles.rs2500Layout]}>$99</Text>
          </View>
        </View>
        <View style={[styles.tab, styles.bgLayout]}>
          <View style={styles.tabChild} />
          <View style={[styles.bag, styles.bagLayout]}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.heart, styles.bagLayout]}>
            <Image
              style={styles.iconLayout}
              resizeMode="cover"
              source={require("../assets/vector5.png")}
            />
          </View>
          <View style={[styles.wallet, styles.bagLayout]}>
            <Image
              style={styles.vectorIcon2}
              resizeMode="cover"
              source={require("../assets/vector3.png")}
            />
          </View>
          <View style={[styles.home, styles.homeSpaceBlock]}>
            <Text style={[styles.home1, styles.home1Typo]}>Home</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.vectorIcon3}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.cartIcon, styles.btnIconLayout]}
        resizeMode="cover"
        source={require("../assets/cart.png")}
      />
      <Image
        style={styles.menuIcon}
        resizeMode="cover"
        source={require("../assets/menu.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <View style={[styles.blur, styles.bgLayout]} />
      <View style={[styles.sideMenu, styles.sideLayout]}>
        <View style={[styles.sideMenuChild, styles.sideLayout]} />
        <Image
          style={[styles.menuIcon1, styles.btnIconLayout]}
          resizeMode="cover"
          source={require("../assets/menu1.png")}
        />
        <Image
          style={[styles.menuIcon2, styles.btnIconLayout]}
          resizeMode="cover"
          source={require("../assets/menu1.png")}
        />
        <View style={[styles.profile, styles.darkPosition]}>
          <Image
            style={[styles.frame11, styles.btnIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-1-1.png")}
          />
          <Text style={[styles.zahraBatool, styles.zahraBatoolPosition]}>
            Zahra Batool
          </Text>
          <Text style={[styles.verifiedProfile, styles.zahraBatoolPosition]}>
            Verified Profile
          </Text>
          <Image
            style={styles.badgeIcon}
            resizeMode="cover"
            source={require("../assets/badge.png")}
          />
          <View style={[styles.ordersWrapper, styles.homeSpaceBlock]}>
            <Text style={[styles.orders, styles.home1Typo]}>3 Orders</Text>
          </View>
        </View>
        <View style={[styles.ai, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.onBtnItemLayout]}
            resizeMode="cover"
            source={require("../assets/info-circle.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Account Information
          </Text>
        </View>
        <View style={[styles.dark, styles.darkPosition]}>
          <View style={[styles.dark1, styles.aiSpaceBlock]}>
            <Image
              style={[styles.infoCircleIcon, styles.onBtnItemLayout]}
              resizeMode="cover"
              source={require("../assets/sun.png")}
            />
            <Text style={[styles.accountInformation, styles.search1Typo]}>
              Dark Mode
            </Text>
          </View>
          <View style={[styles.onBtn, styles.btnIconLayout]}>
            <View style={[styles.onBtnChild, styles.btnIconLayout]} />
            <Image
              style={[styles.onBtnItem, styles.onBtnItemLayout]}
              resizeMode="cover"
              source={require("../assets/ellipse-774.png")}
            />
          </View>
        </View>
        <View style={[styles.pass, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.onBtnItemLayout]}
            resizeMode="cover"
            source={require("../assets/lock.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Password
          </Text>
        </View>
        <View style={[styles.order, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.onBtnItemLayout]}
            resizeMode="cover"
            source={require("../assets/bag.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Order
          </Text>
        </View>
        <View style={[styles.mc, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.onBtnItemLayout]}
            resizeMode="cover"
            source={require("../assets/wallet.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            My Cards
          </Text>
        </View>
        <View style={[styles.wish, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.onBtnItemLayout]}
            resizeMode="cover"
            source={require("../assets/heart2.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Wishlist
          </Text>
        </View>
        <View style={[styles.settings, styles.darkPosition]}>
          <Image
            style={[styles.infoCircleIcon, styles.onBtnItemLayout]}
            resizeMode="cover"
            source={require("../assets/setting.png")}
          />
          <Text style={[styles.accountInformation, styles.search1Typo]}>
            Settings
          </Text>
        </View>
        <View style={[styles.logoutParent, styles.aiSpaceBlock]}>
          <Image
            style={[styles.infoCircleIcon, styles.onBtnItemLayout]}
            resizeMode="cover"
            source={require("../assets/logout.png")}
          />
          <Text style={[styles.logout, styles.gulTypo]}>Logout</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bgLayout: {
    width: 375,
    position: "absolute",
  },
  helloTypo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.gray_200,
  },
  search1Typo: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
  },
  searchFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  chooseBrandPosition: {
    width: 335,
    left: 20,
    position: "absolute",
  },
  rs2500Layout: {
    lineHeight: 14,
    fontSize: FontSize.size_smi,
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
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  nikeLayout: {
    width: 98,
    height: 50,
    position: "absolute",
  },
  zahraBatoolTypo: {
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.gray_200,
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
    fontSize: FontSize.size_2xs,
    top: 208,
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
  bagLayout: {
    width: "17.87%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  homeSpaceBlock: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  home1Typo: {
    lineHeight: 12,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  btnIconLayout: {
    width: 45,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sideLayout: {
    width: 300,
    position: "absolute",
    height: 812,
  },
  darkPosition: {
    width: 260,
    left: 20,
    position: "absolute",
  },
  zahraBatoolPosition: {
    left: 60,
    textAlign: "left",
    position: "absolute",
  },
  aiSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: 0,
    width: 260,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  onBtnItemLayout: {
    width: 25,
    height: 25,
  },
  hello: {
    fontSize: FontSize.size_9xl,
    letterSpacing: -0.2,
    lineHeight: 31,
    textAlign: "left",
    color: Color.gray_200,
  },
  welcomeToOff: {
    marginTop: 5,
    color: Color.lightslategray,
    fontFamily: FontFamily.interRegular,
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
    color: Color.lightslategray,
    fontFamily: FontFamily.interRegular,
  },
  search: {
    width: 275,
    padding: Padding.p_mini,
    backgroundColor: Color.whitesmoke,
    borderRadius: Border.br_3xs,
    top: 73,
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  voiceIcon: {
    left: 305,
    width: 50,
    height: 50,
    top: 73,
    position: "absolute",
  },
  viewAll: {
    left: 286,
    top: 3,
    color: Color.lightslategray,
    fontFamily: FontFamily.interRegular,
    textAlign: "left",
    position: "absolute",
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
    color: Color.gray_200,
    position: "absolute",
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
    color: Color.gray_200,
    position: "absolute",
  },
  nike: {
    left: 125,
    top: 34,
  },
  chooseBrand1: {
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
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
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    left: 0,
    position: "absolute",
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
    position: "absolute",
    overflow: "hidden",
  },
  heart: {
    right: "53.07%",
    left: "29.07%",
    padding: Padding.p_10xs,
    position: "absolute",
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
    position: "absolute",
    overflow: "hidden",
  },
  home1: {
    color: Color.mediumslateblue,
  },
  home: {
    right: "76.8%",
    left: "5.33%",
    width: "17.87%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
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
    left: 0,
  },
  bg: {
    top: 110,
    height: 805,
    left: 0,
  },
  vectorIcon3: {
    top: 307,
    left: 30,
    width: 30,
    height: 14,
    position: "absolute",
  },
  cartIcon: {
    top: 45,
    left: 309,
    height: 45,
  },
  menuIcon: {
    top: 44,
    width: 46,
    height: 46,
    left: 20,
    position: "absolute",
  },
  vectorIcon4: {
    height: "2.96%",
    width: "5.07%",
    top: "37.19%",
    right: "52%",
    bottom: "59.85%",
    left: "42.93%",
  },
  vectorIcon5: {
    height: "1.48%",
    width: "8.8%",
    top: "37.81%",
    right: "21.33%",
    bottom: "60.71%",
    left: "69.87%",
  },
  blur: {
    left: 21,
    backgroundColor: "rgba(29, 30, 32, 0.2)",
    top: 7,
    height: 812,
  },
  sideMenuChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.darkBase,
    width: 300,
  },
  menuIcon1: {
    top: 39,
    height: 45,
    left: 20,
  },
  menuIcon2: {
    top: 52,
    left: 18,
    display: "none",
    height: 45,
  },
  frame11: {
    borderRadius: 50,
    height: 45,
    top: 0,
    left: 0,
  },
  zahraBatool: {
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.gray_200,
    top: 3,
  },
  verifiedProfile: {
    top: 28,
    lineHeight: 14,
    fontSize: FontSize.size_smi,
    color: Color.lightslategray,
    fontFamily: FontFamily.interRegular,
  },
  badgeIcon: {
    top: 27,
    left: 152,
    width: 15,
    height: 15,
    position: "absolute",
  },
  orders: {
    color: Color.lightslategray,
  },
  ordersWrapper: {
    left: 194,
    borderRadius: 5,
    top: 7,
    backgroundColor: Color.whitesmoke,
  },
  profile: {
    top: 120,
    height: 45,
  },
  infoCircleIcon: {
    height: 25,
    overflow: "hidden",
  },
  accountInformation: {
    marginLeft: 10,
    fontFamily: FontFamily.interRegular,
    color: Color.gray_200,
  },
  ai: {
    top: 245,
    left: 20,
  },
  dark1: {
    top: 0,
    left: 0,
  },
  onBtnChild: {
    borderRadius: 30,
    backgroundColor: "#d6d6d6",
    height: 25,
    top: 0,
    left: 0,
  },
  onBtnItem: {
    top: 2,
    height: 25,
    left: 0,
    position: "absolute",
  },
  onBtn: {
    top: 10,
    left: 215,
    height: 25,
  },
  dark: {
    top: 195,
    height: 45,
  },
  pass: {
    top: 295,
    left: 20,
  },
  order: {
    top: 345,
    left: 20,
  },
  mc: {
    top: 395,
    left: 20,
  },
  wish: {
    top: 445,
    left: 20,
  },
  settings: {
    top: 495,
    paddingTop: Padding.p_3xs,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    alignItems: "center",
    flexDirection: "row",
  },
  logout: {
    color: "#ff5757",
    marginLeft: 10,
  },
  logoutParent: {
    top: 687,
    left: 20,
  },
  sideMenu: {
    left: -2,
    top: 7,
  },
  menu: {
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
    backgroundColor: Color.darkBase,
  },
});

export default Menu;
