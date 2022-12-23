import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import metrics from "../Utils/mertrics";
import { useTheme } from "@react-navigation/native";
import { icons } from "../Assets";
import { addDataCall } from "../Redux/Action/addDataAction";
import { useDispatch,useSelector } from "react-redux";
import Header from "../Component/Header";
export default function Order_Screen() {
  const response = useSelector((state) => state?.addDatareducer);

  console.log(response,"hello")
  const { colors } = useTheme();
  const dispatch=useDispatch()
  const _Tigger=()=>{
    dispatch(addDataCall("5"))
  }
  return (
    <View style={{ flex: 1 }}>
      
      <View style={{ flex: 0.92 }}>
        <View style={{ flex: 0.6 }}>
          <Image source={require("../Assets/bg.png")} style={styles.bg_img} />
          <Header style={{position:'absolute', height: (metrics.screenHeight / 100) * 6.5,width:'100%'}} />
        </View>
        <View style={styles.float_label}>
          <Text style={{ color: "#000", fontSize: 18, paddingTop: 12 }}>
            {"Inka Restaurant"}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",

              paddingTop: 10,
            }}
          >
            <Image
              source={icons.star}
              style={{
                height: (metrics.screenHeight / 100) * 3,
                width: (metrics.screenWidth / 100) * 3,
                resizeMode: "contain",
              }}
            />
            <Text>{" 5.0(200+) All days : 9.00 AM - 06:00 PM"}</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.phone}
              style={{
                height: (metrics.screenHeight / 100) * 5,
                width: (metrics.screenWidth / 100) * 5,
                resizeMode: "contain",
              }}
            />
            <Text style={{ paddingLeft: 10 }}>
              {"Reach us at : 9879987987978"}
            </Text>
          </View>

          <View
            style={{
              padding: 9,
              backgroundColor: "#000",
              borderRadius: 8,
              top: 10,
            }}
          >
            <Text style={{ color: "#fff" }}>{"BOOK A TABLE"}</Text>
          </View>
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}></View>

          <View style={{ height: (metrics.screenHeight / 100) * 20 }} />
          <View>
            <Text style={{ color: "#000", fontSize: 18, paddingTop: 12 }}>
              {"Starter"}
            </Text>
          </View>
        </ScrollView>
      </View>

      {/* footer */}
      <TouchableOpacity style={styles.footer_con}>
        <Image source={icons.cart} style={styles.footer_img} />
        <Text style={styles.footer_text}>{"VIEW CART ITEM (5 ITEMS)"}</Text>
      </TouchableOpacity>

      {/* float icon */}
      <TouchableOpacity onPress={()=>_Tigger()} style={styles.flot_con}>
        <Image source={icons.food} style={styles.flot_img} />
        <Text style={styles.float_text}>{"MENU"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bg_img: {
    height: (metrics.screenHeight / 100) * 30,
    width: (metrics.screenWidth / 100) * 100,
  },
  float_label: {
    top: (metrics.screenHeight / 100) * 25,
    height: (metrics.screenHeight / 100) * 22,
    width: (metrics.screenWidth / 100) * 90,
    backgroundColor: "#fff",
    position: "absolute",
    alignSelf: "center",
    zIndex: 5,
    flex: 1,
    alignItems: "center",
  },
  flot_con: {
    justifyContent: "center",
    flexDirection: "row",
    position: "absolute",
    backgroundColor: "#dbad74",
    alignItems: "center",
    alignSelf: "center",
    top: (metrics.screenHeight / 100) * 82,
    width: (metrics.screenWidth / 100) * 23,
    borderRadius: 5,
  },
  flot_img: {
    height: (metrics.screenHeight / 100) * 4,
    width: (metrics.screenWidth / 100) * 4,
    resizeMode: "contain",
  },
  float_text: {
    paddingLeft: 5,
    color: "#000",
    fontWeight: "600",
  },
  footer_con: {
    flex: 0.08,
    backgroundColor: "#172430",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  footer_img: {
    height: (metrics.screenHeight / 100) * 5,
    width: (metrics.screenWidth / 100) * 5,
    resizeMode: "contain",
    tintColor: "#fff",
  },
  footer_text: {
    color: "#fff",
    fontSize: 15,
    paddingLeft: 8,
    fontWeight: "400",
  },
});
