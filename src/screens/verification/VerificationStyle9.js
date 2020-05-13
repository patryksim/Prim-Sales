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
import {InputWithIcon} from './VerificationStyle13';

export default function () {
    const pageContext = useContext(PageContext);
    const [value, setValue] = useState('');
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Header img={require('../../assets/icon/ic_home.png')} titleColor={'#000'}
                    leftPress={() => pageContext.pageDispatch({page: 'pop'})} title={''}
                    backgroundColor={'#79bf10'}/>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={{alignItems: 'center', marginTop: 110, marginBottom:34}}>
                    <Text style={{fontWeight: 'bold', fontSize: 14, marginBottom: 5}}>Hi There</Text>
                    <Text>Let's explore destination</Text>
                </View>
            </View>
            <View style={{flex: 1, paddingHorizontal: 20}}>

                <Surface style={{borderRadius:2,shadowOffset: {width: 0, height: 3}}}>
                    <InputWithIcon text_color={"#000"} placeholderTextColor={'#000'} bg_color={'#FFF'} value={value}
                                   onChange={text => setValue(text)}/>

                </Surface>

            </View>
        </View>
    );
}

// export const InputWithIcon = ({onPress, icon = require('../../assets/icon/ic_search_gray.png'), onChange, value, bg_color = '#000', placeholderTextColor = '#FFF', onFocus, onBlur, placeholder = 'Search'}) => {
//     return (
//         <View style={{flexDirection: 'row', backgroundColor: bg_color, borderRadius: 3}}>
//             <TouchableOpacity onPress={onPress} style={{width: 70, alignItems: 'center', justifyContent: 'center'}}>
//                 <Image source={icon}
//                        style={{width: 20, height: 20}}/>
//             </TouchableOpacity>
//             <View style={{flex: 1}}>
//                 <TextInput
//                     onFocus={onFocus}
//                     onBlur={onBlur}
//                     placeholder={placeholder}
//                     placeholderTextColor={placeholderTextColor}
//                     style={{height: 60, color: '#FFF'}}
//                     onChangeText={onChange}
//                     value={value}
//                 />
//             </View>
//         </View>
//     );
// };
