import { View, Text, FlatList, Animated, ViewToken } from "react-native";
import { styles } from "./styles";

import slides from "../../../slides";
import { OnboardingItem } from "./onboardingItem/index";
import { useRef, useState } from "react";
import { Paginator } from "../paginator";
import { NextButton } from "../nextButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<FlatList | null>(null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index || 0);
      }
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = async () => {
    if(slideRef.current && currentIndex < slides.length - 1) {
      slideRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      try {
        await AsyncStorage.setItem('@viewedOnboarding', 'true');
      } catch (err) {
        console.log('Error @setItem: ', err);
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <FlatList
          data={slides}
          renderItem={({ item }) => <OnboardingItem item={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>

      <Paginator data={slides} scrollX={scrollX} />
      <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)}/>
    </View>
  );
}
