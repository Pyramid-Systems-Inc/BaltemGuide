import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { images } from '../assets'; // Corrected path
import Button from '../components/button'; // Corrected path
import Input from '../components/input'; // Corrected path
import { EyeIcon } from 'react-native-heroicons/solid';

const { signup } = images;

export default function SignUpScreen() {
  const router = useRouter(); // Changed from useNavigation

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };

  const handleSubmit = () => {
    // Navigate to the next screen with user data
    console.log('user data --> ', userData);
    router.push({ pathname: '/selectGrade', params: { userData: JSON.stringify(userData) } });
  };

  return (
    <SafeAreaView className="flex-1 bg-bgWhite px-8">
      <View className="flex-1 flex justify-around">
        {/** ====================== Image ============================= */}
        <View className="flex-row justify-center mb-[-15%] mt-[-10%]">
          <Image source={signup} style={{ width: 353, height: 235 }} />
        </View>
        {/** ====================== Sign Up inputs ============================= */}
        <View className="flex flex-col w-full items-center justify-center mt-3">
          <Input
            label={'Name'}
            placeholder={'Your name'}
            value={userData.name}
            onChange={(text) => handleInputChange('name', text)}
            Icon={undefined} // Assuming Icon can be undefined if not provided
          />
          <Input
            label={'Email address'}
            placeholder={'name@example.com'}
            value={userData.email}
            onChange={(text) => handleInputChange('email', text)}
            Icon={undefined} // Assuming Icon can be undefined if not provided
          />
          <Input
            label={'Password'}
            placeholder={'**********'}
            Icon={EyeIcon}
            value={userData.password}
            onChange={(text) => handleInputChange('password', text)}
            last
          />
        </View>

        {/** ====== Action button -> Navigation to grade selection screen ======= */}
        <Button
          primaryBtnText={'Sign Up'}
          onPrimaryBtnPress={handleSubmit}
          secondaryBtnText1={'Already have an account?'}
          secondaryBtnText2={'Sign In'}
          onSecondaryBtnPress={() => router.push('/signIn')}
        />
      </View>
    </SafeAreaView>
  );
}