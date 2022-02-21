import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useTheme } from '@react-navigation/native'

const Barcode = () => {
    React.useEffect(() => {
    }, [])
    const { colors } = useTheme()
    const camera = React.useRef()
    const barcodeRecognized = ({ barcodes }) => {
        barcodes.forEach(barcode => console.log(barcode.data))
      };

    return(
        <View style={{
            flex: 1, 
            // justifyContent: 'center', 
            // alignItems: 'center'
            }}
        >
            <RNCamera
                ref={camera}
                style={{
                    width: '100%',
                    flex: 1
                }}
                // onGoogleVisionBarcodesDetected={data => barcodeRecognized({data})}
            >
            </RNCamera>
        </View>
    )
}

export default Barcode