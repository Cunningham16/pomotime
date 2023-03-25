import { FC } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { constants } from 'shared/constants'

export const HeaderSettings: FC<{title: string}> = ({ title }) => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 30,
        display: 'flex',
        backgroundColor: constants.secondaryColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
        fontFamily: 'open-sans'
    }
})