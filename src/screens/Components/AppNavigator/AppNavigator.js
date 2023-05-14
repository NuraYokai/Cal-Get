import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

import Home from "../../Home/screens/Home";
import Calories from "../../Calorie/screens/Calories";
import Transactions from "../../Transactions/screens/Transactions";
import Settings from "../../Settings/screens/Settings";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeTabIcon({ focused, color, size }) {
  return (
    <Ionicons
      name={focused ? "home" : "home-outline"}
      size={size}
      color={color}
    />
  );
}

function TransactionsTabIcon({ focused, color, size }) {
  return (
    <Ionicons
      name={focused ? "cash" : "cash-outline"}
      size={size}
      color={color}
    />
  );
}

function CalorieTabIcon({ focused, color, size }) {
  return (
    <Ionicons
      name={focused ? "fast-food" : "fast-food-outline"}
      size={size}
      color={color}
    />
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: TransactionsTabIcon,
        }}
      />
      <Tab.Screen
        name="Calorie"
        component={Calories}
        options={{
          tabBarIcon: CalorieTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator

      drawerStyle={styles.drawerStyle}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen
        name="Transactions & Calories"
        component={TabNavigator}
      />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: "#f2f2f2",
    width: "70%",
  },
  drawerContainer: {
    flex: 1,
    paddingTop: 30,
  },
  drawerHeader: {
    backgroundColor: "#2C3E50",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerHeaderText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  drawerContent: {
    padding: 20,
  },
  drawerText: {
    fontSize: 16,
  },
  drawerContentContainerStyle: {
    marginTop: -30,
  },

});

export default DrawerNavigator;
