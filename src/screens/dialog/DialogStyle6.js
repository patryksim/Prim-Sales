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
import {Body, Button, ButtonClose, Caption, CaptionLocation, Card, Footer, Line, RoundButton} from './DialogComponent';
import Surface from '../../components/Surface';
import MaterialSnackbar from '../../components/MaterialSnackbar';

export default function () {
    const [visible, setVisible] = useState(false);
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 30}}>
                <Card style={{backgroundColor: '#96A3A9', height: 500}}>
                    {/*<ButtonClose onClose={() => setVisible(false)}/>*/}
                    <View style={{flex: 1}}>
                        <Image style={{flex: 1, width: undefined, height: undefined}}
                               source={require('../../assets/dialog/beach.png')}/>
                    </View>
                    <Caption style={{backgroundColor: '#FFF', height: 140}}>
                        <View style={{padding: 20}}>

                            <Text style={{fontSize: 16, color: '#1e1e1e', fontWeight: 'bold', paddingBottom: 23}}>Integer
                                ultricies semper nibh eget mattis.
                                Sed lectus odio, convallis</Text>
                            <Line/>
                            <View style={{flexDirection: 'row', paddingBottom: 25,paddingTop:15}}>
                                <View style={{width: 25, justifyContent: 'center'}}>
                                    <Image style={{width: 16, height: 16}}
                                           resizeMode={'contain'}
                                           source={require('../../assets/icon/ic_love_red.png')}/>
                                </View>
                                <View style={{flex: 1}}>
                                    <Text style={{color: '#1e1e1e', opacity: 0.5}}>1.2K people like post</Text>
                                </View>
                            </View>
                        </View>

                    </Caption>
                </Card>
            </ModalContent>
            <RoundButton onPress={() => setVisible(!visible)} textStyle={{color: '#FFF'}}>
                Click me!
            </RoundButton>
            <MaterialSnackbar ref={snackbarRef}/>
        </Root>
    );
}
