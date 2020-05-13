import React, {useContext, useRef, useState, Component} from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ImageBackground,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import {Header} from './VerificationStyle1';
import {PageContext} from '../../../App';
import Surface from '../../components/Surface';

export default function () {
    const pageContext = useContext(PageContext);
    const [value, setValue] = useState('');
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#8e7448'}}>
            <Header img={require('../../assets/verification/ic_arrow_back.png')} titleColor={'#000'}
                    leftPress={() => pageContext.pageDispatch({page: 'pop'})} title={''}
                    backgroundColor={'#8e7448'}/>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={{alignItems: 'center', marginTop: 110, marginBottom: 34}}>
                    <Text style={{fontWeight: 'bold', fontSize: 14, color: '#FFF', marginBottom: 5}}>Hi There</Text>
                    <Text style={{color: '#FFF'}}>Let's explore destination</Text>
                </View>
            </View>
            <View style={{flex: 1, paddingHorizontal: 20}}>

                <Surface style={{borderRadius: 2}}>
                    <InputWithIcon placeholderTextColor={'#000'} bg_color={'#FFF'} value={value}
                                   placeholder={''}
                                   onChange={text => setValue(text)}/>

                </Surface>

            </View>
        </View>
    );
}

export const InputWithIcon = ({onPress, icon = require('../../assets/icon/ic_search_gray.png'), onChange, value, bg_color = '#000', placeholderTextColor = '#FFF', onFocus, onBlur, placeholder = 'Search', tintColor = '#000', opacity = .54, text_color="#FFF"}) => {
    return (
        <View style={{flexDirection: 'row', backgroundColor: bg_color, borderRadius: 2}}>
            <TouchableOpacity onPress={onPress}
                              style={{width: 47, marginLeft: 10, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={icon}
                       style={{width: 24, height: 24, tintColor: tintColor, opacity: opacity}}/>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <TextInput
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    style={{height: 48, color: text_color}}
                    onChangeText={onChange}
                    value={value}
                />
            </View>
        </View>
    );
};
