import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import List from "./Student/List";
import Sadd from "./Student/Sadd";
import Uadd from "./User/Uadd";
import Supdate from "./Student/Supdate";
import Uupdate from "./User/Uupdate";
import DrawerNav from "./DrawerNav";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="DrawerNav"
            component={DrawerNav}
          />

          <Stack.Screen name="Home" component={List} />
          <Stack.Screen name="Add Student" component={Sadd} />
          <Stack.Screen name="Edit Student" component={Supdate} />
          <Stack.Screen name="Add User" component={Uadd} />
          <Stack.Screen name="Edit User" component={Uupdate} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Router;
