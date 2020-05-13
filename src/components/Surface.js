import React from 'react';
import {View} from 'react-native';

export default function ({
                             children, style,
                         }) {
    return (
        <View style={[{
            backgroundColor: '#FFF',
            borderWidth: 0,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.5,
            shadowRadius: 3,
            elevation: 5,
            marginBottom: 1,
        }, style]}>
            {children}
        </View>
    );
}
