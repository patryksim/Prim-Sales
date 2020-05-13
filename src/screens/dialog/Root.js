import HeaderOneButton from '../../components/HeaderOneButton';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {PageContext} from '../../../App';

export default function ({children}) {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <HeaderOneButton bgColor={'#2195ff'} isHome={true} title='Dialog Image'
                             navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                {
                    children
                }
            </View>
        </View>
    );
}
