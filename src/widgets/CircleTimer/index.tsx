import React, { useEffect } from "react";
import { View, Text, Animated, StyleSheet, Dimensions } from "react-native";
import { Circle, G, Svg } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircleTimer = ({ time = 1500, title = "WORK" }) => {
  const strokeWidth = 13;
  const radius = 140;
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  const circleRef = React.useRef<typeof AnimatedCircle | null>(null);
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const [percents, setPercents] = React.useState(1500);

  function animation(toValue: number) {
    const maxPerc = (100 * toValue) / time;
    const strokeDashoffset =
      circleCircumference - (circleCircumference * maxPerc) / 100;
    return Animated.timing(animatedValue, {
      toValue: strokeDashoffset,
      duration: 500,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }

  React.useEffect(() => {
    setInterval(() => {
      setPercents(percents - 1);
    }, 1000);
  }, []);

  React.useEffect(() => {
    animation(percents);
  }, [percents]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={"#fff"}
            strokeWidth={3}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={"#fff"}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={animatedValue}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <View
        style={{
          flex: 1,
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>{secondsToTimer(percents)}</Text>
        <Text>WORK</Text>
      </View>
    </View>
  );
};

function secondsToTimer(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const paddedMinutes = String(minutes).padStart(2, "0");
  const padddedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${paddedMinutes}:${padddedSeconds}`;
}
