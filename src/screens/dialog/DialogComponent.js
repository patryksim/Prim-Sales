import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

export function RoundButton({children, style, onPress, textStyle}) {
    console.log('--->', style);
    return (
        <TouchableOpacity onPress={onPress} style={[{
            backgroundColor: '#2195ff',
            borderRadius: 50,
            alignItems: 'center',
            height: 40,
            paddingHorizontal: 10,
            minWidth: 10,
            justifyContent: 'center',
            flexDirection: 'row',
        }, style]}>
            <Text style={[{color: '#000'}, textStyle]}>{children}</Text>
        </TouchableOpacity>
    );
}

export function Button({children, style, onPress, textStyle}) {
    console.log('--->', style);
    return (
        <TouchableOpacity onPress={onPress} style={[{
            backgroundColor: '#2195ff',
            borderRadius: 5,
            alignItems: 'center',
            height: 33.2,
            paddingHorizontal: 20,
            justifyContent: 'center',
        }, style]}>
            <Text style={[{color: '#000'}, textStyle]}>{children}</Text>
        </TouchableOpacity>
    );
}

export function Card({children, style}) {
    return (
        <View style={[{
            backgroundColor: '#63a296',
            borderRadius: 12,
            minHeight: 290,
            overflow: 'hidden',
        }, style]}>
            {children}
        </View>
    );
}

export function Body({children, style}) {
    return (
        <View style={[{height: 210}, style]}>
            {children}
        </View>
    );
}

export function Footer({children, style}) {
    return (
        <View style={[{backgroundColor: '#FFF', minHeight: 80}, style]}>
            {children}
        </View>
    );
}

export function ButtonClose({onClose, tintColor = '#FFF'}) {
    return (
        <TouchableOpacity onPress={onClose}
                          style={{
                              position: 'absolute',
                              right: 10,
                              top: 10,
                              height: 33,
                              width: 33,
                              alignItems: 'center',
                              justifyContent: 'center'
                          }}>
            <Image style={{width: 15, height: 15, tintColor: tintColor}}
                   source={require('../../assets/icon/ic_close.png')}/>
        </TouchableOpacity>
    );
}

export function ButtonBack({onClose, tintColor = '#FFF'}) {
    return (
        <TouchableOpacity onPress={onClose}
                          style={{
                              position: 'absolute',
                              left: 5,
                              top: 5,
                              height: 40,
                              width: 40,
                              alignItems: 'center',
                              justifyContent: 'center',
                          }}>
            <Image style={{width: 24, height: 24, tintColor: tintColor}}
                   source={require('../../assets/chip/ic_arrow_back.png')}/>
        </TouchableOpacity>
    );
}

export function Caption({children, style}) {
    return (
        <View style={[style]}>
            {children}
        </View>
    );
}

export function CaptionLocation({children, style}) {
    return (
        <View style={[{minHeight: 50}, style]}>
            {children}
        </View>
    );
}

export function Line() {
    return (
        <View style={style.separatorContainer}>
            <View style={style.separatorLine}/>
        </View>
    );
}

const style = StyleSheet.create({
    separatorContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        // paddingVertical: 15,
    },
    separatorLine: {
        flex: 1,
        borderWidth: 0.5,
        height: StyleSheet.hairlineWidth,
        borderColor: '#BDBDBD',
    },
});
