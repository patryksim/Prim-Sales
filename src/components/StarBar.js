import React from 'react';
import {Image, View} from "react-native";

function StarBar ({rating=0, space = 1, size=16, containerStyle={}}) {

    let starComp = [];
    for (let i = 1; i < 6; i++) {
        starComp.push(<Image key={i} source={require('../assets/icon/ic_star_gray.png')}
                             style={{
                                 width: size,
                                 height: size,
                                 marginHorizontal: space,
                                 resizeMode: 'contain',
                                 tintColor: rating >= i ? '#ffbc00' : '#eeeeee'
                             }}/>
        )
    }

    return (
        <View style={[{flexDirection: 'row', alignItems: 'center'}, containerStyle]}>
            {starComp}
        </View>
    );
}

export default StarBar;