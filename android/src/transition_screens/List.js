import React from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'

const List = () => {
    const { container } = styles
    return(
        <SafeAreaView style={container}>
            <View>
                <Text>Animations List Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default List