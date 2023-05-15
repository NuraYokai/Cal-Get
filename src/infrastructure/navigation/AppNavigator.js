import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import HomeScreen from "../../screens/home/HomeScreen";
import CaloriesScreen from "../../screens/calorie/CaloriesScreen";
import TransactionScreen from "../../screens/transactions/TransactionScreen";
import SettingScreen from "../../screens/settings/SettingScreen";
import ThemeScreen from "../../screens/theme/ThemeScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const HomeTabIcon = ({ focused, color, size }) => (
  <Ionicons
    name={focused ? "home" : "home-outline"}
    size={size}
    color={color}
  />
);

const TransactionsTabIcon = ({ focused, color, size }) => (
  <Ionicons
    name={focused ? "cash" : "cash-outline"}
    size={size}
    color={color}
  />
);

const CalorieTabIcon = ({ focused, color, size }) => (
  <Ionicons
    name={focused ? "fast-food" : "fast-food-outline"}
    size={size}
    color={color}
  />
);

const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ tabBarIcon: HomeTabIcon }}
    />
    <Tab.Screen
      name="Transactions"
      component={TransactionScreen}
      options={{ tabBarIcon: TransactionsTabIcon }}
    />
    <Tab.Screen
      name="Calorie"
      component={CaloriesScreen}
      options={{ tabBarIcon: CalorieTabIcon }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Drawer.Navigator
    drawerStyle={styles.drawerStyle}
    screenOptions={{ headerShown: true }}
  >
    <Drawer.Screen name="Transactions & Calories" component={TabNavigator} />
    <Drawer.Screen name="Settings" component={SettingScreen} />
    <Drawer.Screen name="Theme" component={ThemeScreen} />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: "#f2f2f2",
    width: "70%",
  },
});

export default AppNavigator;
