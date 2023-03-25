import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Dimensions, Text, Animated } from "react-native";
import { useAppSelector } from "shared/hooks/ReduxHooks";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsSVG from "shared/assets/SettingsSVG";
import TimerSettingsSVG from "shared/assets/TimerSettingsSVG";
import { constants } from "shared/constants";
import { TimerSettings } from "widgets/TimerSettings/ui";
import { getHeaderTitle } from "@react-navigation/elements";
import { HeaderSettings } from "widgets/HeaderSettings";
import { SettingsSection } from "widgets/SettingsSection";

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
  const Tab = createBottomTabNavigator();

  return (
    <AnimatedView
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height - 65,
        position: "absolute",
        top: 70,
        transform: [{ translateX: animatedValue }],
        backgroundColor: "white",
        zIndex: 99,
      }}
      ref={viewRef}
    >
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#ED4B40",
            tabBarStyle: {
              backgroundColor: constants.primaryColor,
            },
          }}
        >
          <Tab.Screen
            name="Timer"
            component={TimerSettings}
            options={{
              tabBarIcon: ({ color }) => <TimerSettingsSVG color={color} />,
              header: ({ route, options }) => {
                const title = getHeaderTitle(options, route.name);
                return <HeaderSettings title={title} />;
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsSection}
            options={{
              tabBarIcon: ({ color }) => <SettingsSVG color={color} />,
              header: ({ route, options }) => {
                const title = getHeaderTitle(options, route.name);
                return <HeaderSettings title={title} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {},
});
