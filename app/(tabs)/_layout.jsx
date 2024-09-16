import { AntDesign } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#000000',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: '#d3d3d3',
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
            }
        }}>
            <Tabs.Screen name="home" options={{
                tabBarLabel: 'الوصول',
                tabBarLabelStyle: {
                    fontSize: 18,
                    fontFamily: 'Al-R'
                },

                tabBarIcon: ({}) => (
                    <AntDesign name="home" size={25} color="black" />
                )
            }} />
            <Tabs.Screen name="home" options={{
                tabBarLabel: 'الصفحة الرئيسية',
                tabBarLabelStyle: {
                    fontSize: 18,
                    fontFamily: 'Al-R'

                },

                tabBarIcon: ({}) => (
                    <AntDesign name="home" size={25} color="black" />
                )
            }} />
            <Tabs.Screen name="explore" options={{
                tabBarLabel: 'تصفح',
                tabBarLabelStyle: {
                    fontSize: 18,
                    fontFamily: 'Al-R'
                },
                tabBarIcon: ({}) => (
                    <AntDesign name="search1" size={25} color="black" />
                )
            }} />
            <Tabs.Screen name="profile" options={{
                tabBarLabel: 'الملف الشخصي',
                tabBarLabelStyle: {
                    fontSize: 18,
                    fontFamily: 'Al-R'
                },
                tabBarIcon: ({}) => (
                    <AntDesign name="user" size={25} color="black" />
                )
            }} />
        </Tabs >
    )
}

export default TabsLayout