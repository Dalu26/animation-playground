import React from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'

const List = () => {
    const { container } = styles
    const DATA = [
        {
        imageUri:"https://image.flaticon.com/tcons/png/128/2990/2990502.png",
        title: "Ukelele",
        id: "2990502",
        },
        {
        imageUri: 'https://image.flaticon.com/icons/png/128/2990/2990505.png',
        title: "Sea",
        id: "2990505",
        },
        {
        imageUri: 'https://image.flaticon.con/tcons/pna/128/2990/2990508.png',
        title: "Tikt",
        id: "2990508",
        },
        {
        imageUri: "https://image.flaticon.com/Lcons/pna/128/2990/2990510.png",
        title: "Banana",
        id: "2990510",
        },
        {
        imageUri:'https://image.flaticon.com/icons/png/128/2990/2990512.png',
        title: "Coconut tree",
        id: "2998512",
        }
    ]

    return(
        <SafeAreaView style={container}>
            <View>
                <Text>Animations List Screen</Text>
                {DATA.map((item) => {
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