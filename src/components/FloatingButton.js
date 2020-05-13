import React from 'react';
import {Image, TouchableOpacity} from "react-native";

function FloatingButton ({onPress, size=57, style={position: 'absolute'}, disabled=false, image=require('../assets/icon/ic_plus_white.png'), imageStyle={}}) {

    return (
        <TouchableOpacity disabled={disabled} style={[{
            height: size,
            width: size,
            bottom: style.position === 'relative' ? undefined : 20,
            right: style.position === 'relative' ? undefined : 15,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f44336',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3
        }, style]} onPress={onPress}>
            <Image source={image}
                   style={[{width: size * 0.3, height: size * 0.3, resizeMode: 'contain'}, imageStyle]}/>
        </TouchableOpacity>

    );
}

export default FloatingButton;