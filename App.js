// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Trombinoscope from "./app/screens/Trombinoscope";
import TrombinoscopeDetails from "./app/screens/TrombinoscopeDetails";

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator screenOptions={{}}>
    <Stack.Screen name="Trombinoscope" component={Trombinoscope} />
    <Stack.Screen
      name="details"
      component={TrombinoscopeDetails}
      options={({ route }) => ({
        title: route.params.member.name,
      })}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
