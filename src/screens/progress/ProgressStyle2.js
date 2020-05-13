import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, Easing, Platform, ProgressBarAndroid, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import FloatingButton from "../../components/FloatingButton";

function ProgressStyle2 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='MY FILES'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                shadow={false}
                bgColor='#2640e8'
            />
            <View style={{width: '100%', height: 52, backgroundColor: '#2640e8'}}/>
            <FloatingButton style={{position: 'relative', backgroundColor: '#ffaf1d', marginLeft: 20, marginTop: -30}}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {Platform.OS === 'android' && <ProgressBarAndroid styleAttr='Horizontal' color='#ff4ec8'/> }
                {Platform.OS === 'ios' && <HorizontalProgress/> }
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function HorizontalProgress() {
    const [anim] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.loop(
            Animated.timing(
                anim,
                {
                    toValue: 100,
                    duration: 1000,
                    easing: Easing.linear
                }
            )
        ).start();
    }, []);

    const widthProgress = anim.interpolate({
        inputRange: [0, 40, 60, 100],
        outputRange: [0, 40, 40, 0]
    });

    return (
        <View style={{width: 100, height: 4, backgroundColor: '#ffa3e2'}}>
            <Animated.View style={{width: widthProgress, height: '100%', marginLeft: anim, backgroundColor: '#ff4ec8'}}/>
        </View>
    );
}

export default ProgressStyle2;