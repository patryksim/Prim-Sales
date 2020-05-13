import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet} from 'react-native';
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

                <View style={{height: 50, backgroundColor: '#b8bec8', flexDirection: 'row'}}>
                    <View style={{flex: 1}}/>

                    <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('clicked')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={style.img}
                               resizeMode={'contain'}
                               source={require('../../assets/icon/bottom_video.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('clicked')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={style.img}
                               resizeMode={'contain'}
                               source={require('../../assets/icon/bottom_compass.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('clicked')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={style.img}
                               resizeMode={'contain'}
                               source={require('../../assets/icon/bottom_date.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('clicked')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={style.img}
                               resizeMode={'contain'}
                               source={require('../../assets/icon/bottom_graph.png')}/>
                    </TouchableOpacity>
                    <View style={{flex: 1}}/>
                </View>
            </Surface>
            <MaterialSnackbar ref={snackbarRef}/>
        </RootBottomNav1>
    );
}
const style = StyleSheet.create({
    img :{
        width: 25, height: 25
    }
})
