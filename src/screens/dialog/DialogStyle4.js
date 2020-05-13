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
import {Body, Button, ButtonClose, Caption, Card, Footer, RoundButton} from './DialogComponent';
import Surface from '../../components/Surface';
import MaterialSnackbar from '../../components/MaterialSnackbar';

export default function () {
    const [visible, setVisible] = useState(false);
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    return (
        <Root>
            <ModalContent visible={visible} onBackDropPress={() => setVisible(!visible)} style={{padding: 35}}>
                <Card style={{height: 400}}>
                    <Body style={{height: 210}}>
                        <Image style={{flex: 1, width: undefined, height: undefined}}
                               source={require('../../assets/dialog/dialog_4.png')}/>
                        {/*<ButtonClose onClose={() => setVisible(false)}/>*/}
                    </Body>
                    <Footer style={{alignItems: 'center', justifyContent: 'center', height: 190}}>
                        <View style={{flex: 1, paddingHorizontal: 20}}>
                            <Text style={{fontWeight: 'bold', fontSize: 16, paddingTop:22,paddingBottom:11}}>Invitation</Text>
                            <Text style={{color: '#1e1e1e', opacity:0.5}}>Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint</Text>
                        </View>
                        <View style={{
                            paddingBottom: 23.4,
                            paddingHorizontal: 20,
                            flexDirection: 'row',
                            alignSelf: 'flex-end',
                        }}>
                            <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('Decline clicked')}
                                    style={{backgroundColor: '#FFF'}}>Decline</Button>
                            <Button onPress={() =>setVisible(false)}
                                    style={{backgroundColor: '#fb529d'}} textStyle={{color: '#FFF'}}>Join</Button>
                        </View>
                    </Footer>
                </Card>
            </ModalContent>
            <RoundButton onPress={() => setVisible(!visible)} textStyle={{color: '#FFF'}}>
                Click me!
            </RoundButton>
            <MaterialSnackbar ref={snackbarRef}/>
        </Root>
    );
}
