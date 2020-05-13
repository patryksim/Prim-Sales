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
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
} from 'react-native';
import {PageContext} from '../../../App';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import {Button, phone_number, phone_number_} from './VerificationStyle1';
import {storageImageUrl} from '../../tools/Helpers';

function VerificationStyle4() {
    const snackbarRef = useRef(null);
    const [code, setCode] = useState('');
    const [value, setValue] = useState('123456789');
    return (
        <View style={{backgroundColor: '#FFF', flex: 1}}>
            <ScrollView>
                <View style={{alignItems: 'center', marginBottom: 40, marginTop: 47}}>

                    <Image style={{width: 250, height: 250}}
                           source={{uri: storageImageUrl('search', 'search_4_img_1.png')}}/>
                </View>
                <View style={{flex: 1}}>
                    <View style={{alignItems: 'center', marginBottom: 20}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#1010cf'}}>Verify Your Number</Text>
                    </View>
                    <View style={{alignItems: 'center', paddingHorizontal: 80, marginBottom: 25}}>
                        <Text style={{
                            fontSize: 14,
                            textAlign: 'center',
                        }}>{`Please enter your mobile number to\nreceive a verification code. Carrier\nrates may apply`}</Text>
                    </View>
                    <View style={{alignItems: 'center', paddingHorizontal: 80, marginBottom: 57}}>
                        <InputPhoneNumber onChangeText={(e) => setValue(e)} value={value}/>
                    </View>

                </View>
                <View style={{padding: 20}}>
                    <Button box={true} backgroundColor={'#F6723F'}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('continue clicked')}/>
                </View>
                <MaterialSnackbar ref={snackbarRef}/>
            </ScrollView>
        </View>
    );
}

const InputPhoneNumber = ({onChangeCode, code = '+00', onChangeText, value = '123456789'}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, paddingRight: 20}}>
                <TextInput
                    onChangeText={onChangeCode}
                    value={code}
                    keyboardType={'phone-pad'}
                    style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
                />
            </View>
            <View style={{flex: 4}}>
                <TextInput
                    onChangeText={onChangeText}
                    value={phone_number_(value)}
                    keyboardType={'number-pad'}
                    style={{height: 40, borderColor: 'gray', borderBottomWidth: 1}}
                />
            </View>
        </View>
    );
};

export default VerificationStyle4;
