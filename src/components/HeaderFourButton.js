import React from 'react';
import {View, Text, TouchableOpacity, Image} from "react-native";

function HeaderFourButton({navPress, editPress, searchPress, morePress, bgColor = 'transparent', title = '', isHome = false, shadow = true, isEdit = false}) {

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
                    <Image source={require('../assets/icon/ic_home.png')}
                           style={{height: 16, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            )}
            {!isHome && (
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../assets/icon/ic_chevron_left.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            )}
            <Text style={{flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white'}}>{title}</Text>
            {isEdit && (
                <>
                    <TouchableOpacity onPress={editPress} style={{padding: 10}}>
                        <Image source={require('../assets/icon/ic_share.png')}
                               style={{height: 18, width: 18, tintColor: 'white', resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={searchPress} style={{padding: 10}}>
                        <Image source={require('../assets/icon/ic_close.png')}
                               style={{height: 18, width: 18, tintColor: 'white', resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </>
            )}
            {!isEdit && (
                <>
                    <TouchableOpacity onPress={editPress} style={{padding: 10}}>
                        <Image source={require('../assets/icon/ic_edit.png')}
                               style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={searchPress} style={{padding: 10}}>
                        <Image source={require('../assets/icon/ic_search.png')}
                               style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </>
            )}
            <TouchableOpacity onPress={morePress} style={{padding: 18}}>
                <Image source={require('../assets/icon/ic_more.png')}
                       style={{height: 20, width: 4, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

export default HeaderFourButton;