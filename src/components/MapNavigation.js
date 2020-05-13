import React from 'react';
import {Image, TouchableOpacity, View} from "react-native";

function MapNavigation ({style = {}, zoomInPress, zoomOutPress, myLocationPress}) {
    return (
        <View style={style}>
            <TouchableOpacity onPress={zoomInPress} style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 13,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <Image source={require('../assets/icon/ic_plus.png')}
                       style={{height: 32, width: 32, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={zoomOutPress} style={{
                width: 40,
                height: 40,
                marginTop: 10,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 13,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <Image source={require('../assets/icon/ic_minus.png')}
                       style={{height: 32, width: 32, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={myLocationPress} style={{
                width: 40,
                height: 40,
                marginTop: 35,
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                elevation: 13,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <Image source={require('../assets/icon/ic_gps_location.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

export default MapNavigation;