import { Dimensions, StyleSheet } from "react-native"
import { constants } from "../../../shared/constants"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    buttonPlay: {
        borderWidth: 3,
        padding: 12,
        borderRadius: 100,
        borderColor: constants.whiteColor
    }
})

export default styles