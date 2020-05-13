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
        <RootBottomNav1 placeholder={"Settings"} rightImage={require("../../assets/icon/ic_search_gray.png")} leftImage={require("../../assets/icon/ic_home.png")}>
            <Surface>

                <View style={{height: 70, backgroundColor: '#FFF', flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => setTab('recent')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 35, height: 35, tintColor: '#3a57f9'}}
                               resizeMode={'contain'}
                               source={require('../../assets/bottom/squarebar.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTab('favorite')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                            backgroundColor: '#3a57f9',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'absolute',
                            bottom: 30,
                        }}>

                            <Image style={{width: 35, height: 35, tintColor: '#FFF'}}
                                   resizeMode={'contain'}
                                   source={require('../../assets/bottom/cart.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setTab('nearby')}
                                      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20, tintColor: '#3a57f9'}}
                               resizeMode={'contain'}
                               source={require('../../assets/bottom/tag.png')}/>
                    </TouchableOpacity>
                </View>
            </Surface>
        </RootBottomNav1>
    );
}
