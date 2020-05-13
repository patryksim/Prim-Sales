import React, {useContext, useRef, useState} from 'react';
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
import {PageContext} from '../../../App';
import HeaderOneButton from '../../components/HeaderOneButton';
import Root from './Root';
import ModalContent from '../../components/ModalContent';
import {Body, ButtonClose, Card, Footer, RoundButton} from './DialogComponent';
import Surface from '../../components/Surface';

export default function () {
    const [visible, setVisible] = useState(false);
    const [value, onChangeText] = useState('');
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 30}}>
                <Card>
                    <Body style={{height: 210}}>
                        <Image style={{flex: 1, width: undefined, height: undefined}}
                            // resizeMode={'contain'}
                            // resizeMethod={'scale'}
                               source={require('../../assets/dialog/dialog_bg_2.png')}/>
                        <ButtonClose onClose={() => setVisible(false)}/>
                    </Body>
                    <Footer style={{alignItems: 'center', justifyContent: 'center', height: 140}}>
                        <View style={{flexDirection: 'row', paddingTop: 22, paddingHorizontal: 18}}>
                            <View style={{flex: 1}}>
                                <Text style={{fontWeight: 'bold'}}>Consectetur</Text>
                                <Text style={{color: '#318eeb'}}>$ 56</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Image style={{tintColor: '#ff6868', width: 24, height: 24}}
                                       resizeMode={'contain'}
                                       source={require('../../assets/icon/ic_love_white.png')}/>
                            </View>
                        </View>
                        <View style={{paddingTop: 24, paddingBottom: 18, paddingHorizontal: 20, flexDirection: 'row'}}>
                            <View style={{flex: 1}}>
                                <TextInput
                                    placeholder={'Comment it...'}
                                    style={{
                                        height: 40,
                                        backgroundColor: '#F6F6F6',
                                        width: '100%',
                                        fontSize:14,
                                        borderTopLeftRadius: 5,
                                        paddingHorizontal: 15,
                                        borderBottomLeftRadius: 5,
                                    }}
                                    onChangeText={text => onChangeText(text)}
                                    value={value}
                                />
                            </View>
                            <TouchableOpacity style={{
                                paddingVertical: 8,
                                paddingRight: 14,
                                backgroundColor: '#F6F6F6',
                                borderTopRightRadius: 5,
                                borderBottomRightRadius: 5,
                            }}>
                                <Image style={{width: 24, height: 24}}
                                       source={require('../../assets/dialog/shape.png')}/>
                            </TouchableOpacity>
                        </View>
                    </Footer>
                </Card>
            </ModalContent>
            <RoundButton onPress={() => setVisible(!visible)} textStyle={{color: '#FFF'}}>
                Click me!
            </RoundButton>
        </Root>
    );
}
