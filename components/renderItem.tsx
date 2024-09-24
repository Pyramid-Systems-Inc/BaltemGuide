import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {WelcomeScreenData} from "../data/welcomeScreenData";
import LottieView from "lottie-react-native";
import {useWindowDimensions} from 'react-native';
import Animated, {Extrapolation, interpolate, SharedValue, useAnimatedStyle} from "react-native-reanimated";


type Props = {
    item: WelcomeScreenData;
    index: number;
    x: SharedValue<number>;
}
export default function RenderItem({item, index, x}: Props) {
    const {width: SCREEN_WIDTH} = useWindowDimensions();

    const lottieAnimationStyle = useAnimatedStyle(() => {
        const translateAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH],
            [200, 0, -200],
            Extrapolation.CLAMP
        )
        return {
            transform: [{translateY: translateAnimation}]
        }
    });

    const circleAnmimation = useAnimatedStyle(() => {
        const scale = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH],
            [1, 4, 4],
            Extrapolation.CLAMP
        );
        return {
            transform: [{scale:scale}]
        }
    });
    return (
        <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
            <View style={styles.circleContainer}>
                <Animated.View style={[
                    {
                        width:SCREEN_WIDTH,
                        height:SCREEN_WIDTH,
                        backgroundColor:item.backgroundColor,
                        borderRadius: SCREEN_WIDTH/2,

                    },
                    {
                        ...circleAnmimation
                    }

                ]}/>
            </View>
            <Animated.View style={lottieAnimationStyle}>
                <LottieView
                    source={item.animation}
                    style={{width: SCREEN_WIDTH * 0.9, height:SCREEN_WIDTH*0.9}}
                    autoPlay
                    loop
                />
            </Animated.View>
            <Text style={[styles.itemText, {color: item.textColor}]}>{item.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 100,
    },
    itemText: {
        fontSize: 44,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
        marginHorizontal: 20,
    },
    circleContainer: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'flex-end',
    }
})