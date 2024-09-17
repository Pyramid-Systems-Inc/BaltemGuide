import {StyleSheet, useWindowDimensions} from "react-native";
import React from "react";
import Animated, {
    Extrapolation,
    interpolate,
    interpolateColor,
    SharedValue,
    useAnimatedStyle
} from "react-native-reanimated";

type Props = {
    index: number;
    x: SharedValue<number>;
}
export default function dot({index,x}: Props) {
    const {width: SCREEN_WIDTH} = useWindowDimensions();

    const dotAnmimation = useAnimatedStyle(() => {
        const widthAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH],
            [10, 20, 10],
            Extrapolation.CLAMP
        )
        const opacityAnimation = interpolate(
            x.value,
            [
                (index - 1) * SCREEN_WIDTH,
                index * SCREEN_WIDTH,
                (index + 1) * SCREEN_WIDTH],
            [0.5, 1, 0.5],
            Extrapolation.CLAMP
        )
        return {
            width: widthAnimation,
            opacity: opacityAnimation
        }
    });
    const AnimatedColor = useAnimatedStyle(() => {
        const backgroundColor = interpolateColor(
            x.value,
            [
                0,
                SCREEN_WIDTH,
                2 * SCREEN_WIDTH,
            ],
            ['#66c398', '#1e2169', '#F15937'],
        );
        return {
            backgroundColor: backgroundColor,
        }
    });
    return (
        <Animated.View style={[styles.dotContainer, dotAnmimation,AnimatedColor]} />
    );
}

const styles = StyleSheet.create({
    dotContainer:{
        height: 10,
        borderRadius: 5,
        marginHorizontal: 10,
        elevation: 5,
    }
});