import React, {useContext, useRef, useState} from 'react';
import {PageContext} from '../../../App';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Input} from './VerificationStyle14';
import ComboBoxButton from '../../components/ComboBoxButton';
import RadioButton from '../../components/RadioButton';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import SwipeBackView from '../../components/SwipeBack';

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
        <SwipeBackView onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})} style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={{paddingVertical: 30, paddingHorizontal: 18}}>
                <Input placeholder={'Search'} value={value} onChangeText={(e) => setValue(e)}
                       rightImage={require('../../assets/icon/ic_search_gray.png')}/>
                <View style={{marginTop: 38, marginBottom: 18}}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Type</Text>
                </View>
                <ComboBoxButton checked_color={"#59a7ff"} callback={callback_combo_box()}/>
                <View style={{marginTop: 30, marginBottom: 18}}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>Publish Time</Text>
                </View>
                <RadioButton checked_color={'#59a7ff'} onPress={callback()} arr={timeArr} round={false}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}
