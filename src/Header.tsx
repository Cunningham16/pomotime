import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import menuImg from '../assets/menu.png'
import { constants } from "./constants";
import { Dimensions } from 'react-native'

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
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 25,
      height: 65,
      display: 'flex',
      alignItems: 'center',
      padding: 15,
      flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: constants.shortBreakColor,
        position: 'absolute',
        fontFamily: 'open-sans',
        fontStyle: 'normal',
        left: Dimensions.get('window').width/2-35
    },
    button: {
        width: 24,
        height: 24
    }
  });