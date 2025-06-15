import { Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderText from '../components/headerText.js';
import Button from '../components/button.js';
import ProvinceSelector from '../components/provinceSelector.js';
import { useRouter } from 'expo-router';

const SelectProvinceScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="px-7 py-8">
      {/** ============== Header text component =========== */}
      <HeaderText text={"What's your province?"} />

      {/** ============== Select Grades ===================== */}
      <View className="mt-10">
        <ProvinceSelector />
      </View>

      {/** ========= Action button ================== */}
      <View className="mt-[25%]">
        <Button
          primaryBtnText={'Next'}
          onPrimaryBtnPress={() => router.replace('/(tabs)')}
          secondaryBtnText1={''}
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => router.replace('/(tabs)')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectProvinceScreen;