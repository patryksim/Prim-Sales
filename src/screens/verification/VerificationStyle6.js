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
import PinCode from '../../components/PinCode';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import {Button} from './VerificationStyle1';

export default function VerificationStyle6() {
    const pageContext = useContext(PageContext);
    const [pinCode, setPinCode] = useState('');
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#79bf10'}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{paddingVertical: 15}}>
                    <Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 16}}>Verify Account</Text>
                </View>
                <View style={{paddingHorizontal: 90}}>
                    <Text style={{color: '#FFF', fontSize: 12, textAlign: 'center'}}>
                        Please send verification code we sent to your email address
                    </Text>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 14, color: '#FFF', paddingVertical: 20}}>Please input code below</Text>
                <View>
                    <PinCode bordercolor={'#FFF'} color={'#FFF'} onChange={(pinCode) => setPinCode(pinCode)}/>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 14, color: '#FFF',letterSpacing:1}}>I don't receive the code</Text>
                <Text onPress={() => snackbarRef.current.ShowSnackBarFunction('resend clicked')} style={{fontSize: 16, color: '#FFF',fontWeight:"bold",letterSpacing:1}}>Resend Code</Text>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}
