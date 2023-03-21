import { Text, View, Image, TouchableOpacity } from "react-native";

import soundOnImg from '../../../../assets/sound-on.png'
import nextRoundImg from '../../../../assets/next-round.png'

import styles from "./styles";

export const FooterMain = () => {
    return(
        <View style={styles.container}>
            <View style={styles.round_counter}>
                <Text style={styles.counter}>0/4</Text>
                <TouchableOpacity>
                    <Text style={styles.reset}>Reset</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons_container}>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Image source={nextRoundImg} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.button}>
                        <Image source={soundOnImg} />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}