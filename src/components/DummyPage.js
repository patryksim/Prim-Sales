import React from 'react';
import {Text, View} from "react-native";
import HeaderThreeButton from "./HeaderThreeButton";

function DummyPage({leftMenuRef, snackbarRef, withHeaderMenu=false}) {
    if (withHeaderMenu){
        return (
            <View style={{flex: 1}}>
                <HeaderThreeButton
                    title='Menu'
                    isHome={true}
                    navPress={() => leftMenuRef.current.navigateMenu()}
                    searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                    morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                    bgColor='#8e24aa'
                />
                <View style={{flex: 1, padding: 10, backgroundColor: '#9fa2a3'}}>
                    <Text style={{color: 'white'}}>PAGE</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={{flex: 1, padding: 10, backgroundColor: '#9fa2a3'}}>
                <Text style={{color: 'white'}}>PAGE</Text>
            </View>
        );
    }
}

export default DummyPage;