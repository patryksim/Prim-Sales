import React, {useContext, useRef, useState, Component} from 'react';
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
import PinCodeCircle from '../../components/PinCodeCircle';
import PinCode from '../../components/PinCode';
import {Button, Header} from './VerificationStyle1';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import {storageImageUrl} from '../../tools/Helpers';

function VerificationStyle5() {
    const pageContext = useContext(PageContext);
    const [pinCode, setPinCode] = useState('');
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#a4877b'}}>
            <Image style={{left: 0, right: 0, bottom: 0, top: 0, position: 'absolute'}}
                   source={{uri: storageImageUrl('search', 'search_5_img_1.png')}}/>
            <Header titleColor={'#000'} leftPress={() => pageContext.pageDispatch({page: 'pop'})} title={''}
                    backgroundColor={'transparent'}/>

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#FFF'}}>WELCOME TO</Text>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', color: '#FFF'}}> ELEMENT</Text>
                </View>
            </View>
            <View style={{flex: 2}}>
                <View style={{alignItems: 'center'}}>
                    <View style={{paddingVertical: 20}}>
                        <Text style={{color: '#FFF', fontWeight: 'bold'}}>Enter Code</Text>
                    </View>
                    <PinCodeCircle color={"#FFF"} onChange={(e) => setPinCode(e)} length={4}/>
                    <View style={{paddingVertical: 20, paddingHorizontal: 60}}>
                        <Text style={{color: '#FFF', textAlign: 'center', fontSize: 12}}>
                            We sent the confirmation code to your mobile please check your inbox
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{padding: 20}}>
                <Button box={true} backgroundColor={'#a47d5a'}
                        onPress={() => snackbarRef.current.ShowSnackBarFunction('continue clicked')}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default VerificationStyle5;
