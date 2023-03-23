import { StyleSheet } from "react-native";
import { constants } from "shared/constants";

const styles = StyleSheet.create({
  textView: {
    display: "flex",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  circleView: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 17,
  },
  timerText: {
    color: constants.whiteColor,
    fontSize: 55,
    fontWeight: "600",
    fontFamily: "roboto-mono",
    letterSpacing: -0.075,
    lineHeight: 73,
  },
  titleRound: {
    color: constants.whiteColor,
    fontFamily: "open-sans",
    fontSize: 25,
    lineHeight: 34,
    fontWeight: "600",
  },
});

export default styles