import { Text, View, Image, TouchableOpacity } from "react-native";
import { CircleTimer } from "../../CircleTimer";
import styles from "./styles";

export const Timer = () => {
  return (
    <View style={styles.container}>
      <CircleTimer />
    </View>
  );
};
