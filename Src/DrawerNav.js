import React from "react";
import List from "./Student/List";
import { createDrawerNavigator } from "@react-navigation/drawer";
import User from "./User/User";
import CustomDrawer from "./CustomDrawer";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={List} />

      <Drawer.Screen name="User" component={User} />
    </Drawer.Navigator>
  );
}
