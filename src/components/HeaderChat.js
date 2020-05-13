import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";

function HeaderChat ({navPress, morePress, bgColor='transparent', user='', lastseen='', shadow=true}) {

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
            <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                <Image source={require('../assets/icon/ic_chevron_left.png')} style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <Text style={{paddingHorizontal: 10, fontSize: 16, color: 'white'}}>{user}</Text>
                <Text style={{paddingHorizontal: 10, fontSize: 12, color: 'white'}}>{lastseen}</Text>
            </View>
            <Image source={require('../assets/icon/ic_profile2.png')}
                   style={{height: 40, width: 40, resizeMode: 'cover'}}/>
            <TouchableOpacity onPress={morePress} style={{padding: 18}}>
                <Image source={require('../assets/icon/ic_more.png')} style={{height: 20, width: 4, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

export default HeaderChat;