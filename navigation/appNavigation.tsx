import { AntDesign } from '@expo/vector-icons'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SelectGradeScreen from '../screens/SelectGradeScreen';
import SelectProvinceScreen from '../screens/SelectProvinceScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ClassWorkScreen from "../screens/ClassWorkScreen";
import StreamScreen from "../screens/StreamScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

{
  /** ============== App Navigator =================== */
}
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="SignIn"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="SelectGrade"
          options={{ headerShown: false }}
          component={SelectGradeScreen}
        />
        <Stack.Screen
          name="SelectProvince"
          options={{ headerShown: false }}
          component={SelectProvinceScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /** ============== Bottom Tab Navigator =================== */
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Explore" screenOptions={
        {
            headerShown: false,
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: '#b1b1b1',
            tabBarStyle: {
                backgroundColor: '#ffffff',
                borderTopWidth: 1,
                borderTopColor: '#b1b1b1',
                paddingHorizontal: 20,
                paddingVertical: 5,
                height: 70,
                borderRadius: 20,
                position: 'absolute',
                bottom: 10,
                left: 20,
                right: 20,
                elevation: 0,
                shadowColor: 'transparent',
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0,
                shadowRadius: 0,
                borderWidth: 1,
                borderColor: '#b8b8b8',
                overflow: 'hidden',
            },
        }
    }>

        <Tab.Screen name="home" component={HomeScreen} options={{
            tabBarLabel: 'الصفحة الرئيسية',
            tabBarLabelStyle: {
                fontSize: 10,
                fontFamily: 'Al-R',
            },

            tabBarIcon: ({}) => (
                <AntDesign name="home" size={25} color="black" />
            )
        }} />
        <Tab.Screen name="explore" component={ClassWorkScreen} options={{
            tabBarLabel: 'تصفح',
            tabBarLabelStyle: {
                fontSize: 10,
                fontFamily: 'Al-R'
            },
            tabBarIcon: ({}) => (
                <AntDesign name="search1" size={25} color="black" />
            )
        }} />
        <Tab.Screen name="profile" component={StreamScreen} options={{
            tabBarLabel: 'الملف الشخصي',
            tabBarLabelStyle: {
                fontSize: 10,
                fontFamily: 'Al-R'
            },
            tabBarIcon: ({}) => (
                <AntDesign name="user" size={25} color="black" />
            )
        }} />
    </Tab.Navigator>
  );
}

export default AppNavigation;
