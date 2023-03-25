import React from "react";
import { View, TouchableOpacity } from "react-native";
import { CircleTimer } from "widgets/CircleTimer";
import styles from "./styles";
import { useAppDispatch, useAppSelector } from "shared/hooks/ReduxHooks";
import { setTypeRound, toggleTimeStarted } from "../model";
import { addRound, clearRounds } from "widgets/FooterMain/model";
import PlaySVG from "shared/assets/PlaySVG";
import PauseSVG from "shared/assets/PauseSVG";

export const Timer = () => {
  const { isTimerStarted, currentTime, typeRound } = useAppSelector(
    (state) => state.TimerReducer
  );
  const { currentRounds, allRounds } = useAppSelector(state => state.footerReducer)
  const dispatch = useAppDispatch();
  
  const toggleButton = () => {
    dispatch(toggleTimeStarted());
  };

  React.useEffect(() => {
    //currentTime === -1, because we use setInterval and to end circle we need -1

    if (currentTime === -1 && typeRound === "WORK" && currentRounds !== allRounds) {
      dispatch(setTypeRound("SHORT BREAK"));
    } else if (currentTime === -1 && typeRound === "SHORT BREAK") {
      dispatch(setTypeRound("WORK"));
      dispatch(addRound())
    }

    if(currentTime === -1 && typeRound === "WORK" && currentRounds === allRounds){
      dispatch(setTypeRound("LONG BREAK"));
    }

    if(currentTime === -1 && typeRound === "LONG BREAK"){
      dispatch(setTypeRound("WORK"));
      dispatch(toggleTimeStarted())
      dispatch(clearRounds())
    }
  }, [currentTime]);

  return (
    <View style={styles.container}>
      <CircleTimer />
      <TouchableOpacity onPress={toggleButton}>
        <View style={styles.buttonPlay}>
          {isTimerStarted ? (
            <PauseSVG />
          ) : (
            <PlaySVG />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};
