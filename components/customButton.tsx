import {
    StyleSheet,
    FlatList,
    TouchableWithoutFeedback,
    useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
    AnimatedRef,
    interpolateColor,
    SharedValue,
    useAnimatedStyle,
    withSpring, withTiming
} from "react-native-reanimated";
import {OnboardingData} from "@/data/onboardingData";

type props = {
    dataLength: number;
    flatListIndex: SharedValue<number>;
    flatListRef: AnimatedRef<FlatList<OnboardingData>>;
    x: SharedValue<number>;
}
export default function customButton({flatListRef,flatListIndex,dataLength,x}: props) {
    const {width: SCREEN_WIDTH} = useWindowDimensions();
    const animatedButtonSize = useAnimatedStyle(() => {

        return {
            width: flatListIndex.value === dataLength - 1
                ? withSpring(140)
                : withSpring(60),
            height: 60,
        }
    });

    const animatedButtonTranslateOpacity = useAnimatedStyle(() => {
        return {
            width: 30,
            height: 30,
            opacity: flatListIndex.value === dataLength - 1
                ? withTiming(0)
                : withTiming(1),
            transform: [
                {
                    translateX: flatListIndex.value === dataLength - 1
                        ? withTiming(100)
                        : withTiming(0),
                }
            ]
        }
    });


    const animatedStartTranslateOpacity = useAnimatedStyle(() => {
        return {
            opacity: flatListIndex.value === dataLength - 1
                ? withTiming(1)
                : withTiming(0),
            transform: [
                {
                    translateX: flatListIndex.value === dataLength - 1
                        ? withTiming(0)
                        : withTiming(-100),
                }
            ]
        }
    });

    const animatedButtonColor = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            x.value,
            [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH],
            ['#66c398', '#1e2169', '#F15937'],
        );
        return {
            backgroundColor: backgroundColor,
        }
    });
    return (
        <TouchableWithoutFeedback
            onPress={() => {
              if (flatListIndex.value < dataLength - 1){
                flatListRef.current?.scrollToIndex({index: flatListIndex.value + 1});
              }
              else {
                  console.log('Go To LoginPage');

              }
            }}
        >
            <Animated.View style={[styles.container, animatedButtonColor,animatedButtonSize]}>
                <Animated.Text style={[styles.textButton,animatedStartTranslateOpacity]}>أبدء</Animated.Text>
                <Animated.Image
                    source={require('../assets/images/ArrowIcon.png')}
                    style={[styles.buttonImage, animatedButtonTranslateOpacity]}/>
            </Animated.View>
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
    textButton: {
        color: 'white',
        fontSize: 16,
        position: 'absolute',
        fontFamily: 'Al-B',
    }
});