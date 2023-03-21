import { constants } from "../../../shared/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom: 10,
        height: 65,
    },
    round_counter: {
        display: 'flex',
        flexDirection: "column",
        fontFamily: 'open-sans',
        alignItems: 'center'
    },
    counter: {
        color: constants.whiteColor,
        fontSize: 20,
    },
    reset: {
        color: '#616779',
        fontSize: 20
    },
    buttons_container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    },
    button: {
        padding: 10,
        flexDirection: 'column',
        display: 'flex',
        alighItems: 'center',
        justifyContent: 'center',
    }
})

export default styles