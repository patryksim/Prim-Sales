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
import {
    Body,
    Button,
    ButtonBack,
    ButtonClose,
    Caption,
    CaptionLocation,
    Card,
    Footer,
    Line,
    RoundButton,
} from './DialogComponent';
import Surface from '../../components/Surface';
import MaterialSnackbar from '../../components/MaterialSnackbar';

export default function () {
    const [visible, setVisible] = useState(false);
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 30}}>
                <Card style={{backgroundColor: '#FFF', height: 450, padding: 20}}>
                    <View style={{flex: 1, paddingHorizontal: 20}}>
                        <ButtonBack tintColor={'#2dc0b0'} onClose={() => setVisible(false)}/>
                        <View style={{flex: 1,marginHorizontal:30}}>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>Get In Touch</Text>
                        </View>
                        <View style={{flex: 1.5}}>
                            <Text style={{fontSize: 15, color: '#1e1e1e'}}>
                                {`Gotham\n124 Queen st, Gotham Square\nMetropolis`}
                            </Text>
                        </View>
                        <View style={{flex: 1.5}}>
                            <Text style={{fontSize: 15, color: '#1e1e1e'}}>
                                {`contact@mail.com\n+11 234 567 8`}
                            </Text>
                        </View>
                    </View>
                    <Caption style={{backgroundColor: '#FFF', flexDirection: 'row', paddingHorizontal: 20}}>
                        <View style={{
                            backgroundColor: '#2dc0b0',
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginRight: 20,
                        }}>
                            <Image style={{width: 28, height: 28}}
                                   source={require('../../assets/dialog/envelope.png')}/>
                        </View>
                        <View style={{
                            backgroundColor: '#2dc0b0',
                            width: 50,
                            height: 50,
                            borderRadius: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image style={{width: 28, height: 28}}
                                   source={require('../../assets/dialog/phone.png')}/>
                        </View>
                        {/*<View style={{alignItems: 'center', paddingVertical:10}}>*/}

                        {/*    <Text style={{color:'#FFF'}}>My Social Media</Text>*/}
                        {/*</View>*/}

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
