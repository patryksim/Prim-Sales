import React, {useEffect, useState} from 'react';
import {Animated, Dimensions} from "react-native";

const screenWidth = Dimensions.get('window').width;

function useTransition(page) {
    const [moveAnim] = useState(new Animated.Value(0));
    const [pageState, setPageState] = useState(page);

    useEffect(() => {
        let newMargin = 0;
        if (page.indexOf('home') > -1) {
            newMargin = 0;
            setTimeout(() => {
                setPageState(page)
            }, 200)
        } else {
            newMargin = -screenWidth;
            setPageState(page)
        }
        setTimeout(() => {
            Animated.timing(
                moveAnim,
                {
                    toValue: newMargin,
                    duration: 200,
                }
            ).start();
        }, 10);
    }, [page]);

    return [pageState, moveAnim];
}

export default useTransition;
