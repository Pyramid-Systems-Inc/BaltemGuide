import {View, Text, StyleSheet} from "react-native";
import React from "react";
import {OnboardingData} from "@/data/onboardingData";
import {SharedValue} from "react-native-reanimated";
import Dot from "./dot";

type Props = {
    data: OnboardingData[];
    x: SharedValue<number>;
}
export default function pagination({data,x}: Props) {
    return (
        <View style={styles.paginationContiner}>
            {data.map((_,index) => {
                return <Dot key={index} index={index} x={x}/>
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    paginationContiner: {
        flexDirection: 'row',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});