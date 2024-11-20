import React from "react";
import {View, ScrollView } from "react-native";
import MateriFlexBox from "../(tabs)/MateriFlexBox";
import Position from "../(tabs)/PositionReactNative";

const App = () => {
    return (
      <View>
        <ScrollView>
          {/*<MateriFlexBox/>*/ }
          <Position />
        </ScrollView>
      </View>
    );
  };


  export default App;

