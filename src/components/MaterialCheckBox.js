import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";

function MaterialCheckBox({title, style, color='black'}) {
    const [isChecked, setChecked] = useState(false);

    return (
        <TouchableOpacity style={[{flexDirection: 'row', alignItems: 'center'}, style]}
                          onPress={() => setChecked(!isChecked)}>
            <View style={{
                width: 15,
                height: 15,
                backgroundColor: 'transparent',
                borderColor: '#dddddd',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {isChecked && (
                    <Image source={require('../assets/icon/ic_check.png')}
                           style={{height: 16, width: 10, tintColor: color, resizeMode: 'contain'}}/>
                )}
            </View>
            <Text style={{marginLeft: 10, fontSize: 14, color: color}}>{title}</Text>
        </TouchableOpacity>

    );
}

export default MaterialCheckBox;