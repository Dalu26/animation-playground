import React from 'react'
import { View, Text, TouchableOpacity, Alert } from 'react-native'
import messaging from '@react-native-firebase/messaging'
import { useTheme } from '@react-navigation/native'

const PushNotifications = () => {
    React.useEffect(() => {
        const unsubscribe = messaging().onMessage(async remoteMessage => {
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
          });
      
          return unsubscribe;
    }, [])
    const { colors } = useTheme()

    return(
        <View style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'
            }}
        >
            <Text style={{
                fontWeight: 'bold', 
                fontSize: 18,
                color: colors.text
                }}>
                    Push Notification
                </Text>
        </View>
    )
}

export default PushNotifications