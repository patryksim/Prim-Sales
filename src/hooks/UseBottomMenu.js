import React, {useState} from 'react';
import {Animated, Dimensions} from "react-native";

const menuDuration = 300;

function useBottomMenu (height) {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [slideAnim] = useState(new Animated.Value(-height));

    const navigateMenu = () => {
        if (isMenuOpen)  closeMenu(); else openMenu();
    };

    const openMenu = () => {
        setMenuOpen(true);
        Animated.timing(
            slideAnim,
            {
                toValue: 50,
                duration: menuDuration,
            }
        ).start();
    };

    const closeMenu = () => {
        Animated.timing(
            slideAnim,
            {
                toValue: -height,
                duration: menuDuration,
            }
        ).start(() => setMenuOpen(false));
    };
    return [isMenuOpen, slideAnim, navigateMenu];
}

export default useBottomMenu;