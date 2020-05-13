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
import {Body, Button, ButtonClose, Caption, CaptionLocation, Card, Footer, RoundButton} from './DialogComponent';
import Surface from '../../components/Surface';
import MaterialSnackbar from '../../components/MaterialSnackbar';

export default function () {
    const [visible, setVisible] = useState(false);
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 30}}>
                <Card style={{backgroundColor: '#96A3A9', height: 400}}>
                    <Image style={{flex: 1, width: undefined, height: undefined}}
                           source={require('../../assets/dialog/dialog_5.png')}/>
                    <ButtonClose onClose={() => setVisible(false)}/>
                    <CaptionLocation style={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        left: 20,
                        backgroundColor: 'rgba(255,250,250,0.8)',
                        height: 55,
                        borderRadius: 6,
                        justifyContent: 'center',
                        paddingHorizontal: 10,
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            paddingLeft: 12,
                            paddingTop: 12,
                            fontSize: 12,
                            color: '#1e1e1e',
                        }}>Gotham Square</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{
                                width: 15,
                                height: 15,
                                marginLeft: 12,
                                marginTop: 4,
                                tintColor: 'black',
                                // opacity: 1,
                            }}
                                   source={require('../../assets/icon/ic_location_gray.png')}/>
                            <Text style={{
                                paddingBottom: 11,
                                paddingLeft: 5,
                                paddingTop: 4,
                                fontSize: 12,
                                color: '#1e1e1e',
                                opacity: 0.6,
                            }}>Gotham Square</Text>
                        </View>
                    </CaptionLocation>
                </Card>
            </ModalContent>
            <RoundButton onPress={() => setVisible(!visible)} textStyle={{color: '#FFF'}}>
                Click me!
            </RoundButton>
            <MaterialSnackbar ref={snackbarRef}/>
        </Root>
    );
}
