import React, {useContext, useRef, useState} from 'react';
import {PageContext} from '../../../App';
import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import {Input} from './VerificationStyle14';
import {RoundButton} from '../../components/RadioButton';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import Surface from '../../components/Surface';

const popularArr = ['iPhone', 'Samsung', 'Oppo', 'Huawei'];

export default function () {
    const pageContext = useContext(PageContext);
    const [value, setValue] = useState('');
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#d54412'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>

                </View>
                <TouchableOpacity onPress={() => pageContext.pageDispatch({page: 'pop'})} style={{
                    width: 60,
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{width: 20, height: 20, tintColor: '#FFF'}}
                           source={require('../../assets/icon/ic_close.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{padding: 20}}>
                <Text
                    style={{color: '#FFF', fontSize: 24, marginBottom: 25}}>{`What would you like \nto search?`}</Text>
                <Surface style={{borderRadius:2}}>

                    <Input placeholder={'Search'} value={value} onChangeText={(e) => setValue(e)}
                           leftImage={require('../../assets/icon/ic_search_gray.png')}/>
                </Surface>
                <Text style={{color: '#FFF', fontWeight: 'bold', marginTop: 41, marginBottom: 14}}>Popular
                    Keyword</Text>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        popularArr.map((x, y) => {
                            return (

                                <RoundButton onPress={() => snackbarRef.current.ShowSnackBarFunction(x)} title={x}
                                             key={y}/>
                            );
                        })
                    }
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}
