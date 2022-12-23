import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import metrics from '../Utils/mertrics';
import { icons } from '../Assets';

export default function CartItem(props) {
    const{index,item}=props
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
}

const styles = StyleSheet.create({
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
})