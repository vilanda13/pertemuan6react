import React from "react";
import {View, ScrollView } from "react-native";
import ComponentFunctional from './soalno2/ComponentFunctional';
import ClassComponent from './soalno2/ClassComponent';
import Tombol from './soalno3/index';
import DuaLayar from "./soalno5/DuaLayar";

const App = () => {
    return (
      <View>
        <ScrollView>
          <ComponentFunctional />
          <ClassComponent />
          <Tombol />
          <DuaLayar />
        </ScrollView>
      </View>
    );
  };


  export default App;

