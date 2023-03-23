import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { CircleTimer } from "widgets/CircleTimer";
import styles from "./styles";
import PlayImg from "assets/play.png";
import PauseImg from "assets/pause.png";
import { useAppDispatch, useAppSelector } from "shared/hooks/ReduxHooks";
import { setTypeRound, toggleTimeStarted } from "../model";
import { addRound, clearRounds } from "widgets/FooterMain/model";

export const Timer = () => {
  const [buttonImg, setButtonImg] = React.useState(PlayImg);

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

  React.useEffect(() => {
    if (isTimerStarted) {
      setButtonImg(PauseImg);
    } else {
      setButtonImg(PlayImg);
    }
  }, [isTimerStarted]);

  return (
    <View style={styles.container}>
      <CircleTimer />
      <TouchableOpacity onPress={toggleButton}>
        <View style={styles.buttonPlay}>
          <Image source={buttonImg} style={styles.image} />
        </View>
      </TouchableOpacity>
    </View>
  );
};
