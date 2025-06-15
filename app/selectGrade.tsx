import { Platform, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SubjectPicker from '../components/subjectSelector';
import { locData } from '../assets/data/data';
import HeaderText from '../components/headerText';
import Button from '../components/button';
import { useRouter } from 'expo-router';

const SelectGradeScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="px-7 py-8">
      {/** ============== Header text component =========== */}
      <HeaderText text={"What's your grade?"} />

      {/** ============== Select Grades ===================== */}
      <View className="mt-10">
        {locData.map((grade, index) => (
          <SubjectPicker grades={grade} key={index} />
        ))}
      </View>

      {/** ========= Action button ================== */}
      <View className={Platform.OS === 'ios' ? 'mt-[30%]' : 'mt-[10%]'}>
        <Button
          primaryBtnText={'Next'}
          onPrimaryBtnPress={() => router.push('/selectProvince')}
          secondaryBtnText1={''} // Added to satisfy the component's prop requirements
          secondaryBtnText2={'Skip'}
          onSecondaryBtnPress={() => router.push('/selectProvince')}
        />
      </View>
    </SafeAreaView>
  );
};

export default SelectGradeScreen;