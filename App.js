import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Navigation from "./src/Navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/Utils/store";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}
