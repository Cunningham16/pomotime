import { View, StyleSheet, Text, Pressable, TouchableOpacity } from "react-native";
import { constants } from "shared/constants";
import { Slider } from "@miblanchard/react-native-slider";
import { useAppDispatch, useAppSelector } from "shared/hooks/ReduxHooks";
import {
  changeLongBreakTime,
  changeShortBreakTime,
  changeWorkTime,
  setTypeRound,
  setTimeStop,
} from "widgets/TimerMain/model";
import { changeRounds } from "widgets/FooterMain/model";

export const TimerSettings = () => {
  const { workTime, shortBreakTime, longBreakTime } = useAppSelector((state) => state.TimerReducer);
  const {allRounds} = useAppSelector(state => state.footerReducer)
  const dispatch = useAppDispatch();

  const resetToDefault = () => {
    dispatch(changeLongBreakTime(15));
    dispatch(changeShortBreakTime(5))
    dispatch(changeWorkTime(25))
    dispatch(changeRounds(4))
    dispatch(setTypeRound("WORK"))
    dispatch(setTimeStop());
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          width: 344,
          display: "flex",
        }}
      >
        <Text style={styles.headerSettings}>WORK</Text>
        <Text style={styles.timeValue}>{`${workTime}:00`}</Text>
        <Slider
          maximumTrackStyle={{
            backgroundColor: constants.sliderColor,
            height: 7,
          }}
          minimumTrackStyle={{
            height: 7,
            backgroundColor: constants.workColor,
          }}
          thumbStyle={{
            backgroundColor: constants.workColor,
            width: 20,
            height: 20,
          }}
          value={workTime}
          maximumValue={60}
          minimumValue={15}
          onValueChange={(val) => dispatch(changeWorkTime(val[0]))}
          step={1}
        />
      </View>
      <View
        style={{
          width: 344,
          display: "flex",
        }}
      >
        <Text style={styles.headerSettings}>SHORT BREAK</Text>
        <Text style={styles.timeValue}>{`${shortBreakTime}:00`}</Text>
        <Slider
          maximumTrackStyle={{
            backgroundColor: constants.sliderColor,
            height: 7,
          }}
          minimumTrackStyle={{
            height: 7,
            backgroundColor: constants.shortBreakColor,
          }}
          thumbStyle={{
            backgroundColor: constants.shortBreakColor,
            width: 20,
            height: 20,
          }}
          value={shortBreakTime}
          maximumValue={15}
          minimumValue={2}
          onValueChange={(val) => dispatch(changeShortBreakTime(val[0]))}
          step={1}
        />
      </View>
      <View
        style={{
          width: 344,
          display: "flex",
        }}
      >
        <Text style={styles.headerSettings}>LONG BREAK</Text>
        <Text style={styles.timeValue}>{`${longBreakTime}:00`}</Text>
        <Slider
          maximumTrackStyle={{
            backgroundColor: constants.sliderColor,
            height: 7,
          }}
          minimumTrackStyle={{
            height: 7,
            backgroundColor: constants.longBreakColor,
          }}
          thumbStyle={{
            backgroundColor: constants.longBreakColor,
            width: 20,
            height: 20,
          }}
          value={longBreakTime}
          maximumValue={30}
          minimumValue={5}
          onValueChange={(val) => dispatch(changeLongBreakTime(val[0]))}
          step={1}
        />
      </View>
      <View
        style={{
          width: 344,
          display: "flex",
        }}
      >
        <Text style={styles.headerSettings}>ROUNDS</Text>
        <Text style={styles.timeValue}>{`${allRounds}`}</Text>
        <Slider
          maximumTrackStyle={{
            backgroundColor: constants.sliderColor,
            height: 7,
          }}
          minimumTrackStyle={{
            height: 7,
            backgroundColor: constants.roundsColor,
          }}
          thumbStyle={{
            backgroundColor: constants.roundsColor,
            width: 20,
            height: 20,
          }}
          value={allRounds}
          maximumValue={10}
          minimumValue={2}
          onValueChange={(val) => dispatch(changeRounds(val[0]))}
          step={1}
        />
      </View>
      <TouchableOpacity onPress={resetToDefault}>
        <View
          style={{
            width: 344,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: constants.primaryColor,
            height: 46,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: constants.whiteColor,
              fontSize: 16,
              fontFamily: "open-sans",
            }}
          >
            Reset to default
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.secondaryColor,
    flex: 1,
    alignItems: "center",
  },
  timeValue: {
    backgroundColor: constants.sliderColor,
    display: "flex",
    alignSelf: "center",
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 20,

    color: constants.whiteColor,
    fontSize: 16,
    fontFamily: "roboto-mono",
  },
  headerSettings: {
    fontSize: 20,
    fontFamily: "open-sans",
    alignSelf: "center",
    color: constants.roundsColor,
    lineHeight: 21.79,
    marginBottom: 5,
    fontWeight: "500",
  },
});
