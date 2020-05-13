import React from 'react';
import {View} from "react-native";

function ViewPagerIndicator({size=10, space=2, numPages, activeIndex, defaultColor, activeColor, horizontal=true}) {
    let itemData = [];

    for (let i = 0; i < numPages; i++) {
        itemData.push(<View key={i} style={{
            width: size,
            height: size,
            margin: space,
            borderRadius: size / 2,
            backgroundColor: i === activeIndex ? activeColor : defaultColor
        }}/>)
    }

    return (
        <View style={{flexDirection: horizontal ? 'row' : 'column'}}>
            {itemData}
        </View>
    );
}

export default ViewPagerIndicator;