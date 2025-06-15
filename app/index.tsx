import {View, FlatList, StyleSheet, ViewToken} from 'react-native';
import React from 'react';
import Animated, {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import data, {WelcomeScreenData} from "../data/welcomeScreenData";
import RenderItem from "../components/renderItem";
import PageIndicator from "../components/pageIndicator";
import CustomButton from "../components/customButton";

export default function WelcomeScreen() {
    const router = useRouter();
    /**
 * Reference to the FlatList component for animated operations.
 * @type {React.RefObject<FlatList<WelcomeScreenData>>}
 */
const flatListRef = useAnimatedRef<FlatList<WelcomeScreenData>>();

/**
 * Shared value for horizontal scroll position.
 * @type {import('react-native-reanimated').SharedValue<number>}
 */
const x = useSharedValue(0);

/**
 * Shared value for the current index of the FlatList.
 * @type {import('react-native-reanimated').SharedValue<number>}
 */
const flatListIndex = useSharedValue(0);
    const onViewableItemsChanged =  ({viewableItems}: { viewableItems: ViewToken[] }) => {
        if (viewableItems[0].index !== null) {
            flatListIndex.value = viewableItems[0].index!;
        }
    }
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })


  return (
    <SafeAreaView style={styles.HigherView}>
        <View style={styles.MainView}>
        <Animated.FlatList
            ref={flatListRef}
            onScroll={onScroll}
            data={data}
            renderItem={({item,index})=>{
                return <RenderItem item={item} index={index} x={x}/>
            }}
            keyExtractor={(item) => item.id.toString()}
            scrollEventThrottle={16}
            horizontal={true}
            bounces={false}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{
                minimumViewTime: 300,
                viewAreaCoveragePercentThreshold: 10,
            }}
        />
      </View>
        <View style={styles.BottomView}>
            <PageIndicator
                data={data}
                x={x}
            />
             <CustomButton
                flatListRef={flatListRef}
                flatListIndex={flatListIndex}
                dataLength={data.length}
                x={x}
                onPrimaryBtnPress={() => router.push('/signIn')}
             />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    HigherView: {
        flex: 1,
        backgroundColor: '#fff',
    },
    MainView: {
    flex: 1,
    },
    BottomView: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        marginHorizontal: 20,
        paddingVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});