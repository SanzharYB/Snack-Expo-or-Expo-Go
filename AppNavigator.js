import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import MainFeed from "./screens/MainFeed";
import Favorites from "./screens/Favorites";
import MyRecipes from "./screens/MyRecipes";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Main Feed") {
            iconName = "fast-food";
          } else if (route.name === "Favorites") {
            iconName = "heart";
          } else if (route.name === "My Recipes") {
            iconName = "book";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Main Feed" component={MainFeed} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="My Recipes" component={MyRecipes} />
    </Tab.Navigator>
  );
}
