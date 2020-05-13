import React from 'react';
import {TextInput} from "react-native";

function MaterialInput({placeholder, type = 'default', isPassword = false, margin = 10, bgColor = 'transparent', borderWidth = 0, theme = 'light', style={}}) {

    return (
        <TextInput placeholder={placeholder} keyboardType={type} secureTextEntry={isPassword}
                   placeholderTextColor={theme === 'dark' ? 'white' : 'gray'}
                   style={[{
                       height: 44,
                       padding: 10,
                       marginTop: margin,
                       backgroundColor: bgColor,
                       borderWidth: borderWidth,
                       borderColor: 'white',
                       color: '#2c2c2c'
                   }, style]}/>
    );
}

export default MaterialInput;