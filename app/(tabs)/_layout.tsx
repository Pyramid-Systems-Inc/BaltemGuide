import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs initialRouteName="explore">
      <Tabs.Screen name="home" options={{ title: 'Home' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}