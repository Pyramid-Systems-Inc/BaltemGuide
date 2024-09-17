import {
    View,
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    Image,
    useWindowDimensions,
} from "react-native";
import React from "react";
import {AnimatedRef, interpolate, interpolateColor, SharedValue, useAnimatedStyle} from "react-native-reanimated";
import {OnboardingData} from "@/data/onboardingData";
import {Link} from "expo-router";

type props = {
    dataLength: number;
    flatListIndex: SharedValue<number>;
    flatListRef: AnimatedRef<FlatList<OnboardingData>>;
    x: SharedValue<number>;
}
export default function customButton({flatListRef,flatListIndex,dataLength,x}: props) {
    const {width: SCREEN_WIDTH} = useWindowDimensions();

    const animatedButtonColor = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(

        )
    });
    return (
        <TouchableWithoutFeedback
            onPress={() => {
              if (flatListIndex.value < dataLength - 1){
                flatListRef.current?.scrollToIndex({index: flatListIndex.value + 1});
              }
              else {
                  //console.log('Go To LoginPage');
                  <Link replace={true} href={'/home'}/>
              }
            }}
        >
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/ArrowIcon.png')}
                    style={styles.buttonImage}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        padding: 20,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        width: 60,
        height: 60,
    },
    buttonImage: {
        position: 'absolute',
        width: 40,
        height: 40,
    },
});