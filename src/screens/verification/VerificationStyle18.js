import React, {useContext, useRef, useState} from 'react';
import {PageContext} from '../../../App';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Input} from './VerificationStyle14';
import ComboBoxButton from '../../components/ComboBoxButton';
import RadioButton from '../../components/RadioButton';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import Surface from '../../components/Surface';
import SwipeBackView from '../../components/SwipeBack';
// import {PageContext} from '../../../App';
const timeArr = [
    {
        title: 'Today',
        value: 'today',
    },
    {
        title: 'This Week',
        value: 'this_week',
    },
    {
        title: 'This Month',
        value: 'this_month',
    },
    {
        title: 'Next Month',
        value: 'next_month',
    },
    {
        title: 'This Year',
        value: 'this_year',
    },
];

export default function () {
    const pageContext = useContext(PageContext);
    const [value, setValue] = useState('');
    const snackbarRef = useRef(null);
    const callback = () => {
        return (e) => {
            snackbarRef.current.ShowSnackBarFunction(e.value);
            // console.warn(e.value)
        };
    };
    const callback_combo_box = () => {
        return (e) => {
            // console.warn(e)
        };
    };

    return (
        <SwipeBackView onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})} style={{flex: 1, backgroundColor: '#138af5'}}>
            <View style={{paddingVertical: 30, paddingHorizontal: 18}}>
                <Surface style={{borderRadius:2}}>

                    <Input placeholder={'Search'} value={value} onChangeText={(e) => setValue(e)}
                           leftImage={require('../../assets/icon/ic_search_gray.png')}/>
                </Surface>
                <View style={{marginTop: 38, marginBottom: 18}}>
                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>Type</Text>
                </View>
                <ComboBoxButton callback={callback_combo_box()}/>
                <View style={{marginTop: 30, marginBottom: 18}}>
                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>Publish Time</Text>
                </View>
                <RadioButton checked_color={'#016ccc'} onPress={callback()} arr={timeArr} round={false}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}
