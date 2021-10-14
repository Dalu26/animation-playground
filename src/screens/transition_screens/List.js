import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar, ScrollView, Image } from 'react-native'
import Data from '../../components/Data'
import Card from '../../components/Card'

const List = ({ navigation }) => {
    const { container, scrollContainer, thumbnail, listStyle } = styles

    return(
        <SafeAreaView style={container}>
            <StatusBar backgroundColor='#0000' translucent barStyle={'dark-content'} />
            <ScrollView style={scrollContainer} horizontal showsHorizontalScrollIndicator={false}>
                <Card title={'sunny day'} backgroundColor='#5B64B1' />
                <Card title={'sand & beach'} backgroundColor='#D7B2F4' />
                <Card title={'summer time'} backgroundColor='#27AE60' />
                <Card title={'happy day'} backgroundColor='#0EC5BA' />
                <Card title={'rainy day'} backgroundColor='#FF9B28' />
            </ScrollView>
            <View style={listStyle}>
                {Data.map((item) => {
                    return(
                        <TouchableOpacity key={item.id} style={thumbnail} onPress={() => navigation.push('Details', { item })}>
                            <Image source={{uri: item.imageUri}} style={{width: '100%', height: '100%'}} resizeMode='contain' />
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
        paddingTop: 40,
        backgroundColor: '#FFF'
    },
    scrollContainer: {
        paddingHorizontal: 4,
    },
    listStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical:  20,
    },
    thumbnail: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 15,
        padding: 9,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0E0E0'
    }
})

export default List