import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";
import { useAppDispatch, useAppSelector } from "shared/hooks/ReduxHooks";
import { addRound, clearRounds } from "../model";
import { setTimeStop, setTypeRound } from "widgets/TimerMain/model";
import SoundOnSVG from "shared/assets/SoundOnSVG";
import NextRoundSVG from "shared/assets/NextRoundSVG";

export const FooterMain = () => {
  const { currentRounds, allRounds } = useAppSelector(
    (state) => state.footerReducer
  );
  const { typeRound } = useAppSelector((state) => state.TimerReducer);
  const dispatch = useAppDispatch();

  function resetRounds() {
    dispatch(setTypeRound("WORK"));
    dispatch(clearRounds());
    dispatch(setTimeStop());
  }

  function pressNextRound() {
    if (typeRound === "WORK" && currentRounds !== allRounds) {
      dispatch(setTypeRound("SHORT BREAK"));
    } else if (typeRound === "SHORT BREAK") {
      dispatch(setTypeRound("WORK"));
      dispatch(addRound());
    } else if (typeRound === "WORK" && currentRounds === allRounds) {
      dispatch(setTypeRound("LONG BREAK"));
    } else if (typeRound === "LONG BREAK") {
      dispatch(setTypeRound("WORK"));
      dispatch(setTimeStop());
      dispatch(clearRounds());
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.round_counter}>
        <Text style={styles.counter}>
          {currentRounds}/{allRounds}
        </Text>
        <TouchableOpacity onPress={resetRounds}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons_container}>
        <TouchableOpacity onPress={pressNextRound}>
          <View style={styles.button}>
            <NextRoundSVG />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button}>
            <SoundOnSVG />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
