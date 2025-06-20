import { Pressable as RNPressable, Text as RNText, View as RNView } from 'react-native';
import React from 'react';
import { cssInterop } from "nativewind";

cssInterop(RNView, { className: "style" });
cssInterop(RNText, { className: "style" });
cssInterop(RNPressable, { className: "style" });

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
    <RNView className="flex flex-col items-center gap-8">
      {/** ====================== Main Button ============================= */}
      <RNPressable
        onPress={onPrimaryBtnPress}
        className="py-3 bg-bgPurple px-7 rounded-xl w-[267px] max-h-[61px] flex items-center justify-center"
      >
        <RNText className="text-xl font-exoSemibold text-center text-bgWhite">
          {primaryBtnText}
        </RNText>
      </RNPressable>
      {/** ====================== Secondary pressable ============================= */}
      {showSecondaryBtn ? (
        <RNView className="flex-row justify-center">
          <RNText className="text-darkGrayText font-exo text-lg">
            {secondaryBtnText1}{' '}
          </RNText>
          <RNPressable onPress={onSecondaryBtnPress}>
            <RNText className="font-exo text-bgPurple text-lg">
              {secondaryBtnText2}
            </RNText>
          </RNPressable>
        </RNView>
      ) : null}
    </RNView>
  );
};

export default Button;