import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Surface from '../../components/Surface';
import RootBottomNav1 from './RootBottomNav1';
import {BottomModal} from './BottomComponents';
import set from '@babel/runtime/helpers/esm/set';

export default function () {
    const [tab, setTab] = useState('recent');
    const star = [1, 2, 3, 4];
    const [visible, setVisible] = useState(false);
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
        <RootBottomNav1 title={'Settings'} revert={true} bg={'#f1f5f7'} card_bg={'#FFF'} text_color={'#000'}>
            <TouchableOpacity style={{height: 56, alignItems: 'center', justifyContent: 'center'}}
                              onPress={() => setVisible(true)}>
                <Text>Click me</Text>
            </TouchableOpacity>
            <BottomModal visible={visible} style={{padding: 20, margin: 10}} backDropPress={() => setVisible(false)}>
                <View style={{flexDirection: 'row', height: 56}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>La Vie En Rose</Text>
                        <Text style={{color: 'grey'}}>Gaga Lady</Text>
                    </View>
                    <TouchableOpacity onPress={() => setVisible(!visible)}
                                      style={{width: 40, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 20, height: 20}} source={require('../../assets/icon/ic_close.png')}/>
                    </TouchableOpacity>
                </View>
                <Text style={{color: 'grey', marginTop: 20}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod
                    tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt.</Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', height: 60, alignItems: 'center'}}>
                    {
                        star.map((x, y) => {
                            return (
                                <Image key={y} style={{width: 25, height: 25, marginHorizontal: 5}}
                                       source={require('../../assets/bottom/star.png')}/>
                            );
                        })
                    }
                </View>
                <TouchableOpacity onPress={() => setVisible(!visible)} style={{
                    height: 50,
                    backgroundColor: '#ff2e93',
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{color: '#FFF'}}>Submit Rating</Text>
                </TouchableOpacity>
            </BottomModal>
        </RootBottomNav1>
    );
}

const style = StyleSheet.create({
    img: {
        width: 28, height: 28,
    },
});
