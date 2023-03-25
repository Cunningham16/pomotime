import React from "react";
import { View, Text, Animated } from "react-native";
import { Circle, G, Svg } from "react-native-svg";
import { constants } from "shared/constants";
import { useAppSelector, useAppDispatch } from "shared/hooks/ReduxHooks";
import { decreaseCurrentTime } from "widgets/TimerMain";
import { secondsToTimer } from "../lib/secondsToTimer";
import styles from "./styles";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const CircleTimer = () => {
  const { currentTime, typeRound, roundTime, isTimerStarted } = useAppSelector(
    (state) => state.TimerReducer
  );
  const dispatch = useAppDispatch();

  const strokeWidth = 13;
  const radius = 140;
  const halfCircle = radius + strokeWidth;
  const circleCircumference = 2 * Math.PI * radius;

  const circleRef = React.useRef<typeof AnimatedCircle | null>(null);
  const animatedValue = React.useRef(new Animated.Value(0)).current;
  const intervalRef = React.useRef<number>();

  function animation(toValue: number) {
    const maxPerc = (100 * toValue) / (roundTime * 60);
    const strokeDashoffset =
      circleCircumference - (circleCircumference * maxPerc) / 100;
    return Animated.timing(animatedValue, {
      toValue: strokeDashoffset,
      duration: 1000,
      delay: 0,
      useNativeDriver: true,
    }).start();
  }

  React.useEffect(() => {
    if (isTimerStarted) {
      intervalRef.current = window.setInterval(() => {
        dispatch(decreaseCurrentTime());
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isTimerStarted]);

  React.useEffect(() => {
    animation(currentTime);
  }, [currentTime, roundTime]);

  const [colorCircle, setColorCircle] = React.useState<string>(
    constants.workColor
  );
  
  React.useEffect(() => {
    if (typeRound === "WORK") {
      setColorCircle(constants.workColor);
    } else if (typeRound === "SHORT BREAK") {
      setColorCircle(constants.shortBreakColor);
    } else if (typeRound === "LONG BREAK") {
      setColorCircle(constants.longBreakColor);
    }
  }, [typeRound]);

  return (
    <View style={styles.circleView}>
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
            stroke={colorCircle}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCircumference}
            strokeDashoffset={animatedValue}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <View style={styles.textView}>
        <Text style={styles.timerText}>{secondsToTimer(currentTime)}</Text>
        <Text style={styles.titleRound}>{typeRound}</Text>
      </View>
    </View>
  );
};
