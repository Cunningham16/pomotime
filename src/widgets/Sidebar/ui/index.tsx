import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Dimensions, Text, Animated } from "react-native";
import { useAppSelector } from "shared/hooks/ReduxHooks";

const AnimatedView = Animated.createAnimatedComponent(View);

export const Sidebar = () => {
  const { isOpenSidebar } = useAppSelector((state) => state.headerReducer);

  const viewRef = useRef<typeof AnimatedView | null>();
  const animatedValue = useRef(
    new Animated.Value(Dimensions.get("window").width)
  ).current;

  const animateSidebar = () => {
    if (isOpenSidebar) {
      return Animated.timing(animatedValue, {
        toValue: 0,
        duration: 400,
        delay: 0,
        useNativeDriver: true,
      }).start();
    } else {
      return Animated.timing(animatedValue, {
        toValue: -Dimensions.get("window").width,
        duration: 400,
        delay: 0,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    animateSidebar();
  }, [isOpenSidebar]);

  return (
    <AnimatedView
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 65,
        position: "absolute",
        top: 70,
        transform: [{ translateX: animatedValue }],
        backgroundColor: 'white',
        zIndex: 99,
      }}
      ref={viewRef}
    >
      <Text>Hello world</Text>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
