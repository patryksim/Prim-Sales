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
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 35}}>
                <Card>
                    <Body>
                        <Image style={{flex: 1, width: undefined, height: undefined}}
                               source={require('../../assets/dialog/camera.png')}/>
                        <ButtonClose onClose={() => setVisible(false)}/>
                    </Body>
                    <Footer style={{alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, paddingHorizontal: 18}}>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>Consectetur</Text>
                                <Text style={{color: '#1e1e1e', fontSize: 14, opacity:0.5}}>$ 56</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <Image style={{tintColor: '#ff6868', width: 24, height: 24, marginRight: 18}}
                                       resizeMode={'contain'}
                                       source={require('../../assets/icon/ic_love_white.png')}/>
                            </View>
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
