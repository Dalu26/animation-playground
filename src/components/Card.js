import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Card = ({ backgroundColor, title }) => {
    const { container, titleStyle } = styles
    return(
        <View style={[container, {backgroundColor: backgroundColor}]}>
            <Text style={titleStyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        width: 220,
        borderRadius: 14,
        marginVertical: 5,
        marginHorizontal: 8,
        padding: 10,
    },
    titleStyle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#FFF',
        textTransform: 'uppercase',
    }
})

export default Card