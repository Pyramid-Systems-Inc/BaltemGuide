import { Pressable as RNPressable, Text as RNText, View as RNView } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';

const View = styled(RNView);
const Text = styled(RNText);
const Pressable = styled(RNPressable);

interface ButtonProps {
  onPrimaryBtnPress: () => void;
  primaryBtnText: string;
  showSecondaryBtn?: boolean;
  secondaryBtnText1?: string;
  secondaryBtnText2?: string;
  onSecondaryBtnPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  onPrimaryBtnPress,
  primaryBtnText,
  showSecondaryBtn = true,
  secondaryBtnText1,
  secondaryBtnText2,
  onSecondaryBtnPress,
}) => {
  return (
    <View className="flex flex-col items-center gap-8">
      {/** ====================== Main Button ============================= */}
      <Pressable
        onPress={onPrimaryBtnPress}
        className="py-3 bg-bgPurple px-7 rounded-xl w-[267px] max-h-[61px] flex items-center justify-center"
      >
        <Text className="text-xl font-exoSemibold text-center text-bgWhite">
          {primaryBtnText}
        </Text>
      </Pressable>
      {/** ====================== Secondary pressable ============================= */}
      {showSecondaryBtn ? (
        <View className="flex-row justify-center">
          <Text className="text-darkGrayText font-exo text-lg">
            {secondaryBtnText1}{' '}
          </Text>
          <Pressable onPress={onSecondaryBtnPress}>
            <Text className="font-exo text-bgPurple text-lg">
              {secondaryBtnText2}
            </Text>
          </Pressable>
        </View>
      ) : null}
    </View>
  );
};

export default Button;