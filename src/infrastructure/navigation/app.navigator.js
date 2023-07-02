import { MaterialIcons } from "@expo/vector-icons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { CredentialtScreen } from "../../features/credentials/screen/credentials.screen";
import { Settings } from "../../features/credentials/screen/settings.screen";
import { Add } from "../../features/credentials/screen/add.screen";

const Tab = createMaterialBottomTabNavigator();

const TAB_ICON = {
  Credentials: "verified-user",
  Settings: "admin-panel-settings",
  Add: "add",
};

export const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialIcons name={iconName} size={24} color={color} />
    ),
  };
};

export const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={createScreenOptions}
      shifting={true}
      tabBarColor={{ backgroundColor: "red" }}
      activeColor="#ffffff"
      inactiveColor="#cccccc"
      initialRouteName="Credentials"
      barStyle={{
        backgroundColor: "#5282BD",
        Color: "#cccccc",
        tabBarActiveBackgroundColor: "#fff",
      }}
      tabBarActiveBackgroundColor="#ffffff"
    >
      <Tab.Screen name="Credentials" component={CredentialtScreen} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};
