import React, {useEffect, useState} from 'react';
import {Animated, Easing} from "react-native";

function CircularProgress({size=50, thickness=5, bgColor='gray', progressColor='blue'}) {
    const [anim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                anim,
                {
                    toValue: 1100,
                    duration: 1500,
                    easing: Easing.linear
                }
            )
        ).start();
    }, []);

    const spinContainer = anim.interpolate({
        inputRange: [0, 625, 800, 1100],
        outputRange: ['0deg', '180deg', '360deg', '720deg']
    });

    const spin = anim.interpolate({
        inputRange: [0, 20, 250, 750, 980, 1000],
        outputRange: ['245deg', '245deg', '405deg', '405deg', '245deg', '245deg']
    });

    const spin2 = anim.interpolate({
        inputRange: [0, 250, 375, 625, 750, 1000],
        outputRange: ['225deg', '225deg', '315deg', '315deg', '225deg', '225deg']
    });

    const color = anim.interpolate({
        inputRange: [0, 249, 250, 750, 751, 1000],
        outputRange: [bgColor, bgColor, 'transparent', 'transparent', bgColor, bgColor]
    });

    const color2 = anim.interpolate({
        inputRange: [0, 249, 250, 750, 751, 1000],
        outputRange: ['transparent', 'transparent', progressColor, progressColor, 'transparent', 'transparent']
    });

    return (
        <Animated.View style={{
            width: size,
            height: size,
            borderWidth: thickness,
            borderRadius: size / 2,
            borderColor: bgColor,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{rotate: spinContainer}]
        }}>
            <Animated.View style={{
                width: size,
                height: size,
                borderWidth: thickness,
                borderRadius: size / 2,
                position: 'absolute',
                borderLeftColor: 'transparent',
                borderBottomColor: 'transparent',
                borderRightColor: progressColor,
                borderTopColor: progressColor,
                transform: [{rotate: spin}]
            }}/>
            <Animated.View style={{
                width: size,
                height: size,
                borderWidth: thickness,
                borderRadius: size / 2,
                borderRightColor: color,
                borderTopColor: color,
                borderLeftColor: color2,
                borderBottomColor: color2,
                transform: [{rotate: spin2}]
            }}/>
        </Animated.View>
    );
}

export default CircularProgress;