import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Surface from '../../components/Surface';
import RootBottomNav1 from './RootBottomNav1';
import MaterialSnackbar from '../../components/MaterialSnackbar';

export default function () {
    const [tab, setTab] = useState('home');
    const snackbarRef = useRef(null);
    const renderSeparator = () => {
        return (
            <View
                style={{
                    width: 10,
                }}
            />
        );
    };
    return (
        <RootBottomNav1>
            <Surface>

                <View style={{height: 50, backgroundColor: '#FFF', flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('clicked')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}}
                               resizeMode={'contain'}
                               source={require('../../assets/icon/circle_home.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('clicked')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}}
                               resizeMode={'contain'}
                               source={require('../../assets/icon/circle_search.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('clicked')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}}
                               resizeMode={'contain'}
                               source={require('../../assets/icon/plus.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('clicked')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}}
                               resizeMode={'contain'}
                               source={require('../../assets/icon/circle_heart.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('clicked')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}}
                               resizeMode={'contain'}
                               source={require('../../assets/icon/circle_user.png')}/>
                    </TouchableOpacity>
                </View>
            </Surface>
            <MaterialSnackbar ref={snackbarRef}/>
        </RootBottomNav1>
    );
}
