import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, Easing, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import FloatingButton from "../../components/FloatingButton";

function ProgressStyle6 () {
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
                bgColor='#ffaf1d'
            />
            <View style={{width: '100%', height: 52, backgroundColor: '#ffaf1d'}}/>
            <FloatingButton style={{position: 'relative', backgroundColor: '#0dbcff', marginLeft: 20, marginTop: -30}}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <DotProgress/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function DotProgress() {
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

    const item1 = anim.interpolate({
        inputRange: [0, 50, 100],
        outputRange: [0.4, 1, 0.4]
    });

    const item2 = anim.interpolate({
        inputRange: [0, 12, 62, 100],
        outputRange: [0.55, 0.4, 1, 0.55]
    });

    const item3 = anim.interpolate({
        inputRange: [0, 25, 75, 100],
        outputRange: [0.7, 0.4, 1, 0.7]
    });

    return (
        <View style={{width: 70, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Animated.View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#0dbcff', opacity: item1}}/>
            <Animated.View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#0dbcff', opacity: item2}}/>
            <Animated.View style={{width: 10, height: 10, borderRadius: 5, backgroundColor: '#0dbcff', opacity: item3}}/>
        </View>
    );
}

export default ProgressStyle6;