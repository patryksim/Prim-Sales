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
            <BottomModal visible={visible} backDropPress={() => setVisible(false)}>
                <View style={{height: 80, borderBottomWidth: 0.5, flexDirection: 'row'}}>
                    <View style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 40, height: 40}}
                               source={require('../../assets/bottom/profile_2_friend_5.png')}/>
                        {/*<View style={{width: 50, height: 50, backgroundColor: 'grey', borderRadius: 70}}/>*/}
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{fontWeight: 'bold'}}>John Doe</Text>
                    </View>
                </View>
                <View style={{borderBottomWidth: 0.5, paddingVertical: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={{width: 25, height: 25}} source={require('../../assets/bottom/phone.png')}/>
                            {/*<View style={{width: 50, height: 50, backgroundColor: 'grey', borderRadius: 70}}/>*/}
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text>{`+01 234 567 89\nMobile`}</Text>
                        </View>
                        <View style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={{width: 25, height: 25}} source={require('../../assets/bottom/chat.png')}/>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
                            {/*<View style={{width: 50, height: 50, backgroundColor: 'grey', borderRadius: 70}}/>*/}
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text>{`+01 234 567 89\nWork`}</Text>
                        </View>
                        <View style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={{width: 25, height: 25}} source={require('../../assets/bottom/chat.png')}/>
                        </View>
                    </View>
                </View>
                <View style={{borderBottomWidth: 0.5, paddingVertical: 20}}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={{width: 25, height: 25}}
                                   source={require('../../assets/bottom/envelope.png')}/>
                            {/*<View style={{width: 50, height: 50, backgroundColor: 'grey', borderRadius: 70}}/>*/}
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text>{`john@gmail.com\nPersonal Work`}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View style={{width: 100, alignItems: 'center', justifyContent: 'center'}}>
                            {/*<View style={{width: 50, height: 50, backgroundColor: 'grey', borderRadius: 70}}/>*/}
                        </View>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text>{`contact@gmail.com\nWork`}</Text>
                        </View>
                    </View>
                </View>
            </BottomModal>
        </RootBottomNav1>
    );
}

const style = StyleSheet.create({
    img: {
        width: 28, height: 28,
    },
});
