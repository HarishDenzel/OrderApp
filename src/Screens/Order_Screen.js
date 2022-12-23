import { StyleSheet, Text, View ,ScrollView,Image} from 'react-native'
import React from 'react'
import metrics from '../Utils/mertrics'
export default function Order_Screen() {
  return (
    <View style={{flex:1,backgroundColor:'green'}}>
      <View style={{flex:0.92}}>
<ScrollView style={{flex:1}}>
<Image source={require("../Assets/bg.png")} style={{height:metrics.screenHeight/100*30,width:metrics.screenWidth/100*100}} />

</ScrollView>
      </View>
      <View style={{flex:0.08,backgroundColor:"red"}}>
        
      </View>
     
    </View>
  )
}

const styles = StyleSheet.create({})