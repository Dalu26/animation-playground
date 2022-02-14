import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import FingerprintScanner from 'react-native-fingerprint-scanner'
import { useTheme } from '@react-navigation/native'

const Biometrics = () => {
    React.useEffect(() => {
        FingerprintScanner.isSensorAvailable().then(biometryType => {
            setBiometryType(biometryType)
        }).catch(error => console.log(error, 'error getting biometry type'))
        return FingerprintScanner.release()
    }, [])
    const [BiometryType, setBiometryType] = React.useState(null)
    const { colors } = useTheme()

    const getMessage = () => {
          if(BiometryType =='Face ID')
          {
            return 'Scan your Face on the device to continue'
          }
          else
          {
            return 'Scan your Fingerprint on the device scanner to continue'
          }
    }

    const showAuthenticationDialog = () => {
        if(BiometryType!==null && BiometryType!==undefined )
        {
        FingerprintScanner.authenticate({
          description: getMessage()
        })
          .then(() => {
            //you can write your logic here to what will happen on successful authentication
            console.log('User Authenticated')
          })
          .catch((error) => {
            console.log('Authentication error is => ', error);
          });
        }
        else
        {
        console.log('biometric authentication is not available');
        }
      };

    return(
        <View style={{
            flex: 1, 
            justifyContent: 'center', 
            alignItems: 'center'
            }}
        >
            <TouchableOpacity
                onPress={() => showAuthenticationDialog()}>
                <Text style={{marginBottom: 10, color: colors.text}}>Authenticate</Text>
            </TouchableOpacity>
            <Text style={{color: colors.text}}>Biometry Type is {BiometryType}</Text>
        </View>
    )
}

export default Biometrics