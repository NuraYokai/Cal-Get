import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../../features/signin/signin.screen";
import SignupScreen from "../../features/signup/signup.screen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../authentication/authentication.context";
import Dashboard from "../../features/dashboard/dashboard.screen";

const CreateStackNav = createStackNavigator();

const AuthStackNav = () => {
  return (
    <CreateStackNav.Navigator>
      <CreateStackNav.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <CreateStackNav.Screen
        name="SignUp"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
    </CreateStackNav.Navigator>
  );
};

const AppNav = () => {
  const [state] = useContext(AuthContext);
  return (
    <NavigationContainer>
      {state.token === "" ? <AuthStackNav /> : <Dashboard />}
    </NavigationContainer>
  );
};

export default AppNav;
