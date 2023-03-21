import { Text, View, Image, TouchableOpacity } from "react-native";
import menuImg from "../../../../assets/menu.png";
import styles from "./styles";

export const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.button}>
          <Image source={menuImg} />
        </View>
      </TouchableOpacity>
      <Text style={styles.text}>Pomotime</Text>
    </View>
  );
};
