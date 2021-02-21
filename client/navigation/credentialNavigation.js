import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
// import { ShopNavigator, AuthNavigator } from "./ShopNavigator";
import SplashScreen from "../screens/splash/splashPageNew";
import AppNavigation, { AuthNavigator } from "./AppNavigation";
const CredentialNavigation = (props) => {
  const splashView = useSelector((state) => state.splash.splashView);
  const loginCredentials = useSelector((state) => state.auth.isAuthenticated);
  return (
    <NavigationContainer>
      {!splashView && loginCredentials && <AppNavigation />} //Yet to make
      {!splashView && !loginCredentials && <AuthNavigator />}
      {splashView && <SplashScreen />}
    </NavigationContainer>
  );
};
export default CredentialNavigation;
