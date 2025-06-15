import { View, Text, Image, Pressable, ImageSourcePropType } from 'react-native';
import React from 'react';
import funnelIcon from '../../assets/images/funnel.png'; // Direct import for type safety

interface SectionHeaderProps {
  title: string;
  onFilterPress: () => void;
  tintColor?: string; // tintColor is optional for Image
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  onFilterPress,
  tintColor,
}) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <Text className="font-exoSemibold text-darkGrayText text-lg capitalize">
        {title}
      </Text>
      <Pressable className="" onPress={onFilterPress}>
        <Image
          source={funnelIcon}
          style={{ width: 28, height: 28 }}
          tintColor={tintColor}
        />
      </Pressable>
    </View>
  );
};

export default SectionHeader;