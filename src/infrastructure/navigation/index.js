import { useContext } from "react";
import { AppNavigation } from "./app.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { View, Text } from "react-native";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigation /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
