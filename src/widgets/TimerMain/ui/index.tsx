import React from "react";
import { Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import { CircleTimer } from "../../CircleTimer";
import styles from "./styles";
import PlayImg from '../../../../assets/play.png'
import PauseImg from '../../../../assets/pause.png'
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/ReduxHooks";
import { toggleTimeStarted } from "../model";

export const Timer = () => {
  const [buttonImg, setButtonImg] = React.useState(PlayImg)

  const { isTimerStarted } = useAppSelector(
    (state) => state.TimerReducer
  );
  const dispatch = useAppDispatch()
  const toggleButton = () => {
    dispatch(toggleTimeStarted())
  }
  
  React.useEffect(() => {
    if (isTimerStarted) {
      setButtonImg(PauseImg);
    } else {
      setButtonImg(PlayImg);
    }
  }, [isTimerStarted])

  return (
    <View style={styles.container}>
      <CircleTimer />
      <TouchableOpacity onPress={toggleButton}>
        <View style={styles.buttonPlay}>
          <Image source={buttonImg}/>
        </View>
      </TouchableOpacity>
    </View>
  );
};
