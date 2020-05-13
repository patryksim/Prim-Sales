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
import {Card, RoundButton} from './DialogComponent';

export default function () {
    const [visible, setVisible] = useState(false);
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 50}}>
                <Card style={{backgroundColor: '#efce38', height: 400}}>
                    <Image style={{flex: 1, width: undefined, height: undefined}}
                           source={require('../../assets/dialog/bitmap.png')}/>
                    <View style={{position: 'absolute', minWidth: 100, bottom: 20, left: 20}}>
                        <RoundButton onPress={() => setVisible(!visible)}
                                     style={{backgroundColor: 'rgba(255,250,250,0.8)'}}>
                            Consectetur
                        </RoundButton>
                    </View>
                </Card>
            </ModalContent>
            <RoundButton onPress={() => setVisible(!visible)} textStyle={{color: '#FFF'}}>
                Click me!
            </RoundButton>
        </Root>
    );
}
