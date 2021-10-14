import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import Data from '../../components/Data'

const List = () => {
    const { container } = styles

    return(
        <SafeAreaView style={container}>
            <View>
                <Text>Animations List Screen</Text>
                {Data.map((item) => {
                    return(
                        <TouchableOpacity key={item.id} style={{}} onPress={() => {}} >
                        {/* Icon uni=(item.imageUri)/> */}
                        </TouchableOpacity>
                    )
                })}
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