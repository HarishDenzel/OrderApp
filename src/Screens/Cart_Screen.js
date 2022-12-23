import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  BackHandler,
  Platform,
  FlatList,
  Modal,
  Text,
} from "react-native";
import { icons } from "../Assets";
import metrics from "../Utils/mertrics";
import Header from "../Component/Header";
import CartItem from "../Component/CartItem";
export default function Cart_Screen() {
  let data = [
    {
      id: 0,
      name: "Guac de la Costa",
      sub: "tortillas de mals, fruit de la passion,manago",
      rate: "$7",
      qty: 0,
    },
    {
      id: 1,
      name: "Chicharron y Cerveza",
      sub: "citron vert / Corona sauce",
      rate: "$7",
      qty: 0,
    },
  ];
  const renderItem = (item, index) => {
    return (
      <View
        key={index}
        style={{
          flex: 1,
          flexDirection: "row",
          padding: 20,
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          borderBottomWidth: 0.5,
          borderBottomColor: "grey",
          
        }}
      >
        <View style={{ flex: 0.05, alignItems: "center" }}>
          <Image
            source={require("../Assets/d.png")}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          />
          <Image
            source={require("../Assets/n.png")}
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
              margin: 5,
            }}
          />
        </View>

        <View style={{ flex: 0.7, paddingLeft: 10, flexDirection: "column" }}>
          <Text style={styles.headsubText}>{item.name}</Text>
          <Text style={styles.subText}>{item.sub}</Text>
          <Text style={{ color: "#DFCDAD", fontWeight: "600", padding: 3 }}>
            $7
          </Text>
        </View>

        <View style={{ flex: 0.2, height: "100%", justifyContent: "center" }}>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              borderColor: "#DFCDAD",
              borderWidth: 2,
            }}
          >
            <Text style={{ color: "#000", fontWeight: "600", paddingLeft: 3 }}>
              {"  "}-
            </Text>

            <Text
              style={{
                color: "#000",
                fontWeight: "600",
                paddingHorizontal: 20,
              }}
            >
              1
            </Text>

            <Text style={{ color: "#000", fontWeight: "600", padding: 3 }}>
              +{"  "}
            </Text>
          </View>
          <Image
            source={require("../Assets/chat.png")}
            style={{
              height: 20,
              width: 20,
              resizeMode: "contain",
              marginTop: 20,
              alignSelf: "flex-end",
            }}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
    <View style={{flex:0.92}}>
    <Header style={{ height: (metrics.screenHeight / 100) * 6.5,width:'100%',backgroundColor: "#081A26",
}} />
    <View style={styles.costView}>

        <View style={styles.box}>
          <Text style={styles.costtx}>Total Cost</Text>
          <Text style={styles.cost}>$36.00</Text>
        </View>
      </View>
      <View style={{flex:0.7}}>
        <Text style={{ padding: 5, color: "#000" }}>Review order</Text>
        <View style={{flex:0.6}}>
        <FlatList
          data={data}
          renderItem={({ item, index }) =>{
            return(
            <CartItem 
            item={item}
            index={index} 

            />
            )
          }}
          keyExtractor={(item) => item.id}
        />
        </View>
        <View style={{flex:0.4}}>
        <Text
          style={{
            padding: 5,
            color: "#000",
            alignSelf: "flex-end",
            textDecorationLine: "underline",
          }}
        >
          Show more
        </Text>
        <Text style={{ padding: 5, color: "#000" }}>Delivery Options</Text>
        <View style={{ alignItems:'center',flexDirection: "row",justifyContent:'space-around',paddingHorizontal:metrics.screenWidth/100*15 ,}}>
          <Image
            source={icons.dinning}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          />
          <Text style={{ padding: 5, color: "#000" }}>Dine-in</Text>
          <Image
            source={icons.uncheck}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          />
          <Image
            source={icons.van}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          />
          <Text style={{ padding: 5, color: "#000" }}>Take way</Text>
          <Image
            source={icons.check}
            style={{ height: 20, width: 20, resizeMode: "contain" }}
          />
        </View>
        </View>
       
        
      </View>
    </View>
    
      <TouchableOpacity style={styles.footer_con}>
      
        <Text style={styles.footer_text}>{"PLACE ORDER"}</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  costView: {
    backgroundColor: "#081A26",
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  headsubText: {
    color: "#000",
    padding: 3,
  },
  subText: {
    color: "#000",
    padding: 3,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    paddingHorizontal: 35,
  },
  costtx: {
    color: "#DFCDAD",
    fontWeight: "600",
  },
  cost: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 5,
    color: "#000",
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
