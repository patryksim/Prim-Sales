import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Surface from '../../components/Surface';
import RootBottomNav1 from './RootBottomNav1';

export default function () {
    const [tab, setTab] = useState('recent');
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
            <View style={{height: 70, backgroundColor: '#FFF', flexDirection: 'row'}}>
                <TouchableOpacity onPress={() => setTab('recent')}
                                  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 20, height: 20, tintColor: tab === 'recent' ? '#b21f66' : '#000000'}}
                           resizeMode={'contain'}
                           source={require('../../assets/icon/clock.png')}/>
                    <Text style={{
                        color: tab === 'recent' ? '#b21f66' : '#000000',
                        fontSize: 12,
                        marginTop: 10,
                    }}>Recent</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab('favorite')}
                                  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 20, height: 20, tintColor: tab === 'favorite' ? '#b21f66' : '#000000'}}
                           resizeMode={'contain'}
                           source={require('../../assets/icon/ic_love_white.png')}/>
                    <Text style={{
                        color: tab === 'favorite' ? '#b21f66' : '#000000',
                        fontSize: 12,
                        marginTop: 10,
                    }}>Favorite</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setTab('nearby')}
                                  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 20, height: 20, tintColor: tab === 'nearby' ? '#b21f66' : '#000000'}}
                           resizeMode={'contain'}
                           source={require('../../assets/icon/pin.png')}/>
                    <Text style={{
                        color: tab === 'nearby' ? '#b21f66' : '#000000',
                        fontSize: 12,
                        marginTop: 10,
                    }}>Nearby</Text>
                </TouchableOpacity>
            </View>
        </RootBottomNav1>
    );
}
