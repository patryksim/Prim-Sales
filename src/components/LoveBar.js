import React from 'react';
import {Image, View} from "react-native";

function LoveBar({size = 12, space = 3, rating = 0, containerStyle = {}}) {

    let loveComp = [];
    for (let i = 1; i < 6; i++) {
        loveComp.push(<Image key={i} source={require('../assets/icon/ic_love_red.png')}
                             style={{
                                 width: size,
                                 height: size,
                                 marginHorizontal: space,
                                 resizeMode: 'contain',
                                 tintColor: rating >= i ? '#ff5252' : '#eeeeee'
                             }}/>
        )
    }

    return (
        <View style={[{flexDirection: 'row', alignItems: 'center'}, containerStyle]}>
            {loveComp}
        </View>
    );
}

export default LoveBar;