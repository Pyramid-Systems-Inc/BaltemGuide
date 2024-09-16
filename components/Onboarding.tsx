import {View, StyleSheet, FlatList} from "react-native";
import React from "react";
import Animated, {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from "react-native-reanimated";
import data, {OnboardingData} from "@/data/onboardingData";
import RenderItem from "@/components/RenderItem";

export default function Onboarding() {
    const flatlistref = useAnimatedRef<FlatList<OnboardingData>>();
    const x = useSharedValue(0);

    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })
    return (
        <View style={styles.container}>
            <Animated.FlatList
                ref={flatlistref}
                onScroll={onScroll}
                data={data}
                renderItem={({item,index})=>{
                return <RenderItem item={item} index={index} x={x}/>
            }}
                keyExtractor={item => item.id.toString()}
                scrollEventThrottle={16}
                horizontal={true}
                bounces={false}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})