import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";

function HeaderOneButton ({navPress, bgColor='transparent', title='', isHome=false, titleStyle={}, shadow=true}) {

    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: bgColor,
            elevation: shadow ? 3 : 0,
            shadowOffset: {width: 0, height: shadow ? 2 : 0},
            shadowOpacity: shadow ? 0.3 : 0
        }}>
            {isHome && (
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../assets/icon/ic_home.png')} style={{height: 16, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            )}
            {!isHome && (
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../assets/icon/ic_chevron_left.png')} style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            )}
            <Text style={[{flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white'}, titleStyle]}>{title}</Text>
        </View>
    );
}

export default HeaderOneButton;