import { StyleSheet, Dimensions } from "react-native";
import { constants } from "shared/constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    height: 75,
    display: "flex",
    alignItems: "center",
    padding: 15,
    flexDirection: "row",
    position: "relative",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: constants.shortBreakColor,
    fontFamily: "open-sans",
    fontStyle: "normal",
    textAlign: "center",
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  button: {
    width: 35,
    height: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
