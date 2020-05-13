import React from 'react';
import {Text, TouchableOpacity} from "react-native";

function MaterialButton ({buttonPress, title, style, titleStyle={}}) {

    return (
        <TouchableOpacity style={[{
            height: 44,
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3
        }, style]} onPress={buttonPress}>
            <Text style={[{fontSize: 14, color: (style.backgroundColor === 'white' || style.backgroundColor === 'transparent') ? 'black' : 'white'}, titleStyle]}>{title}</Text>
        </TouchableOpacity>

    );
}

export default MaterialButton;