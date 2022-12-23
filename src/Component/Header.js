import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import metrics from "../Utils/mertrics";
import { icons } from "../Assets";

export default function Header(props) {
  const { style } = props;
  return (
    <View style={[{ flexDirection: "row" }, style]}>
      <View style={{ flex: 0.75, alignItems: "center", flexDirection: "row" }}>
        <Image
          source={icons.left_arrow}
          style={{
            height: (metrics.screenHeight / 100) * 5,
            width: (metrics.screenWidth / 100) * 5,
            resizeMode: "contain",
            tintColor: "#fff",
            marginLeft: 15,
          }}
        />
      </View>

      <View
        style={{
          flex: 0.25,
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <Image
          source={icons.share}
          style={{
            height: (metrics.screenHeight / 100) * 6.5,
            width: (metrics.screenWidth / 100) * 6.5,
            resizeMode: "contain",
            tintColor: "#fff",
          }}
        />
        <Image
          source={icons.info}
          style={{
            height: (metrics.screenHeight / 100) * 6.5,
            width: (metrics.screenWidth / 100) * 6.5,
            resizeMode: "contain",
            tintColor: "#fff",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    
});
