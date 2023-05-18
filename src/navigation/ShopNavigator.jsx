import { StyleSheet, Text, View } from "react-native";

import BreadDetailScreen from "../screens/BreadDetailScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryBreadScreen from "../screens/CategoryBreadScreen";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" styles={styles.container}>
        <Stack.Screen name="Home" component={CategoriesScreen} />
        <Stack.Screen name="Bread" component={CategoryBreadScreen} />
        <Stack.Screen name="Detail" component={BreadDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});
