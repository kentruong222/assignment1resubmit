import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Entypo } from "@expo/vector-icons";

import Home from "./screens/Home";
import { Modal } from "react-native";
import ModalView from "./screens/Modal";
import ContactList from "./screens/List";
import ClickCircle from "./screens/Click";


const Drawer = createDrawerNavigator();
const RootTab = createBottomTabNavigator();


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Modal" component={ModalView} />
      <Drawer.Screen name="Contact List" component={ContactList} />
      <Drawer.Screen name="Circle Click" component={ClickCircle} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
