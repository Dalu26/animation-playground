import React from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'

const Card = () => {
    const { container } = styles
    return(
        <SafeAreaView style={container}>
            <View>
                <Text>Card</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Card