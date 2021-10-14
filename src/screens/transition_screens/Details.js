import React from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'

const Details = () => {
    const { container } = styles
    return(
        <SafeAreaView style={container}>
            <View>
                <Text>Animations Details Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Details