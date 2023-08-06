import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Wishlist = () => {
  return (
    <View style={styles.wishlist}>
      <Text style={styles.items}>100 Items</Text>
      <Text style={[styles.inWishlist, styles.editTypo]}>in wishlist</Text>
      <View style={styles.editParent}>
        <Image
          style={styles.editIcon}
          resizeMode="cover"
          source={require("../assets/edit.png")}
        />
        <Text style={[styles.edit, styles.editTypo]}>Edit</Text>
      </View>
      <Image
        style={[styles.backIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/back.png")}
      />
      <Text style={[styles.wishlist1, styles.rs3000Typo]}>Wishlist</Text>
      <View style={[styles.card01, styles.cardLayout]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-568.png")}
        />
        <Text style={[styles.pcSuitGul, styles.pcSuitGulTypo]}>{`2pc suit
Gul Ahmed`}</Text>
        <Text style={[styles.rs3000, styles.tabPosition]}>Rs 3,000</Text>
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart.png")}
        />
      </View>
      <View style={[styles.card02, styles.cardLayout]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-569.png")}
        />
        <Text
          style={[styles.loanShalwarKameez, styles.pcSuitGulTypo]}
        >{`Loan Shalwar Kameez
Maria B`}</Text>
        <Text style={[styles.rs3000, styles.tabPosition]}>Rs 2,500</Text>
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart.png")}
        />
      </View>
      <View style={[styles.card03, styles.cardPosition1]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-5681.png")}
        />
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart.png")}
        />
        <Text style={[styles.pcSuitGul, styles.pcSuitGulTypo]}>{`2pc Loan
Khaadi`}</Text>
        <Text style={[styles.rs3000, styles.tabPosition]}>Rs 2,000</Text>
      </View>
      <View style={[styles.card031, styles.cardPosition]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-5682.png")}
        />
        <Image
          style={[styles.heartIcon, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart.png")}
        />
        <Text style={[styles.pcSuitGul, styles.pcSuitGulTypo]}>{`Training Top
Nike Sport Clash`}</Text>
        <Text style={[styles.rs3000, styles.tabPosition]}>$99</Text>
      </View>
      <View style={[styles.card04, styles.cardPosition1]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-5691.png")}
        />
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart.png")}
        />
        <Text
          style={[styles.loanShalwarKameez, styles.pcSuitGulTypo]}
        >{`3pc Loan
Khaadi`}</Text>
        <Text style={[styles.rs3000, styles.tabPosition]}>Rs 4,500</Text>
      </View>
      <View style={[styles.card041, styles.cardPosition]}>
        <Image
          style={[styles.card01Child, styles.tabPosition]}
          resizeMode="cover"
          source={require("../assets/rectangle-5692.png")}
        />
        <Image
          style={[styles.heartIcon1, styles.heartIconLayout]}
          resizeMode="cover"
          source={require("../assets/heart.png")}
        />
        <Text style={[styles.loanShalwarKameez, styles.pcSuitGulTypo]}>
          Trail Running Jacket Nike Windrunner
        </Text>
        <Text style={[styles.rs3000, styles.tabPosition]}>$99</Text>
      </View>
      <View style={[styles.tab, styles.tabPosition]}>
        <View style={styles.tabChild} />
        <View style={[styles.bag, styles.bagPosition]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
        </View>
        <View style={[styles.wallet, styles.bagPosition]}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
        <View style={[styles.saved, styles.bagPosition]}>
          <Text style={styles.wishlist2}>Wishlist</Text>
        </View>
        <View style={[styles.home, styles.bagPosition]}>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.cartIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/cart.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  editTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_mini,
    textAlign: "left",
  },
  iconLayout: {
    height: 45,
    width: 45,
    top: 45,
    position: "absolute",
  },
  rs3000Typo: {
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
    textAlign: "left",
    color: Color.gray_200,
  },
  cardLayout: {
    height: 257,
    top: 176,
    width: 160,
    position: "absolute",
  },
  tabPosition: {
    left: 0,
    position: "absolute",
  },
  pcSuitGulTypo: {
    lineHeight: 15,
    top: 208,
    fontSize: FontSize.size_2xs,
    left: 0,
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    position: "absolute",
  },
  heartIconLayout: {
    height: 20,
    top: 15,
    width: 20,
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
  bagPosition: {
    justifyContent: "center",
    width: "17.87%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    alignItems: "center",
    position: "absolute",
  },
  items: {
    top: 115,
    textAlign: "left",
    color: Color.gray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    left: 20,
    position: "absolute",
  },
  inWishlist: {
    top: 139,
    fontFamily: FontFamily.interRegular,
    color: Color.lightslategray,
    left: 20,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  editIcon: {
    width: 15,
    height: 15,
    overflow: "hidden",
  },
  edit: {
    marginLeft: 5,
    color: Color.gray_200,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  editParent: {
    top: 117,
    left: 287,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.ghostwhite,
    alignItems: "center",
    padding: Padding.p_3xs,
    flexDirection: "row",
    position: "absolute",
  },
  backIcon: {
    left: 20,
  },
  wishlist1: {
    top: 58,
    left: 155,
    lineHeight: 19,
    fontSize: FontSize.headlinesHeadline17_size,
    fontWeight: "600",
    position: "absolute",
  },
  card01Child: {
    top: 0,
    borderRadius: Border.br_mini,
    height: 203,
    width: 160,
    left: 0,
  },
  pcSuitGul: {
    width: 117,
  },
  rs3000: {
    top: 243,
    fontSize: FontSize.size_smi,
    lineHeight: 14,
    fontFamily: FontFamily.interSemiBold,
    fontWeight: "600",
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
  tabChild: {
    right: "0%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.gray_300,
  },
  vectorIcon: {
    height: 21,
    width: 20,
  },
  bag: {
    right: "29.33%",
    left: "52.8%",
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_10xs,
    justifyContent: "center",
    width: "17.87%",
    flexDirection: "row",
    overflow: "hidden",
  },
  vectorIcon1: {
    height: 19,
    width: 21,
  },
  wallet: {
    right: "5.6%",
    left: "76.53%",
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_10xs,
    width: "17.87%",
    justifyContent: "center",
    overflow: "hidden",
  },
  wishlist2: {
    lineHeight: 12,
    color: Color.mediumslateblue,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  saved: {
    right: "53.07%",
    left: "29.07%",
    width: "17.87%",
    justifyContent: "center",
    padding: Padding.p_3xs,
    flexDirection: "row",
  },
  vectorIcon2: {
    height: 22,
    width: 21,
  },
  home: {
    right: "76.8%",
    left: "5.33%",
    paddingVertical: Padding.p_11xs,
    paddingHorizontal: Padding.p_10xs,
    justifyContent: "center",
    width: "17.87%",
    flexDirection: "row",
    overflow: "hidden",
  },
  tab: {
    top: 732,
    shadowColor: "rgba(29, 30, 32, 0.08)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 375,
    height: 80,
  },
  cartIcon: {
    left: 311,
  },
  wishlist: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.gray_300,
  },
});

export default Wishlist;
