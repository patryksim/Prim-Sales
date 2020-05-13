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
                <Card style={{backgroundColor: '#FFF', height: 440}}>
                    <View style={{flex: 1, paddingHorizontal: 20}}>
                        <View style={{flex: 2}}>
                            <Image style={{width: 100, height: 100, marginTop: 40}}
                                   source={require('../../assets/dialog/person.png')}/>
                        </View>
                        <View style={{flex: 1}}>
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>John Doe</Text>
                            <Text style={{color: '#acacac', fontSize: 16}}>Product Designer</Text>
                        </View>
                        <View style={{flex: 1.5}}>
                            <Text style={{fontSize: 16, color: '#1e1e1e', opacity: 0.7}}>Integer ultricies semper nibh
                                eget mattis.
                                Sed lectus odio,
                                convallis ultricies porttitor in, volutpat eget turpis</Text>
                        </View>
                    </View>
                    <ButtonClose tintColor={'#000'} onClose={() => setVisible(false)}/>
                    <Caption style={{backgroundColor: '#5761d7', height: 74}}>
                        <View style={{alignItems: 'center', paddingTop: 12}}>

                            <Text style={{color: '#FFF'}}>My Social Media</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View style={{width: 24, alignItems: 'center', marginRight: 25}}>

                                <Image style={{width: 24, height: 24}} resizeMode={'contain'}
                                       source={require('../../assets/dialog/facebook.png')}/>
                            </View>
                            <View style={{width: 24, alignItems: 'center'}}>
                                <Image style={{width: 24, height: 24}}
                                       source={require('../../assets/dialog/twitter.png')}/>
                            </View>
                            <View style={{width: 24, alignItems: 'center', marginLeft: 25}}>
                                <Image style={{width: 24, height: 24}}
                                       source={require('../../assets/dialog/instagram.png')}/>
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
