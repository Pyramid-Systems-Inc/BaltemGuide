import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {WelcomeScreenData} from "../data/welcomeScreenData";
import {SharedValue} from "react-native-reanimated";
import Dot from './Dot';

type Props = {
    data: WelcomeScreenData[];
    x: SharedValue<number>;
}

export default function PageIndicator({data, x}: Props) {
    return (
        <View style={styles.PageIndicatorStyle}>
            {data.map((_,index) => {
                return <Dot key={index} index={index} x={x}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    PageIndicatorStyle: {
        flexDirection: 'row',
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})