import {NavigationContainer} from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons  } from "@expo/vector-icons";
import HomeScreen from '../screens/Home';
import ShopScreen from '../screens/Shop';
import LogoutScreen from '../screens/user/Logout';

const LogoutRoute = () => {

    const Stack = createBottomTabNavigator();

  return (

        <NavigationContainer>

            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={
                    ({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            if(route.name === "Home"){
                                iconName = focused ? "home-variant" : "home-variant-outline"
                            } else {
                                iconName = focused ?  "shopping" : "shopping-outline"
                            }
                            return <MaterialCommunityIcons name={iconName} size={size} color={color} />

                        },
                        tabBarActiveTintColor: "blue",
                        tabBarInactiveTintColor: "grey",
                        headerShown: false,
                    })}
            >
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Shop" component={ShopScreen}/>
                <Stack.Screen name="Logout" component={LogoutScreen}/>
            </Stack.Navigator>

        </NavigationContainer>
  )
}

export default LogoutRoute

const styles = StyleSheet.create({})