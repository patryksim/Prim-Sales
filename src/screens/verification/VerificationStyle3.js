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
import {Button, Header} from './VerificationStyle1';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import PinCode from '../../components/PinCode';

const bg_color = '#212042';

function VerificationStyle3() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [pinCode, setPinCode] = useState('');
    return (
        <View style={{flex: 1, backgroundColor: bg_color}}>
            <Header titleColor={'#FFF'} leftPress={() => pageContext.pageDispatch({page: 'pop'})} title={''}
                    backgroundColor={bg_color}/>
            <View style={{flex: 1}}>
                <View style={{alignItems: 'center', justifyContent: 'center', padding: 30}}>
                    <Text style={{color: '#FFF'}}>VERIFICATION</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal: 60}}>
                    <Text style={{color: '#FFF', textAlign: 'center'}}>Please enter your email address to receive
                        verification code</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', padding: 50}}>
                    <PinCode color={'#FFF'} withBorder={true} bordercolor={'#FFF'} onChange={(e) => setPinCode(e)}
                             length={4}/>
                </View>
            </View>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('continue clicked')}
                        backgroundColor={'transparent'} color={'#F6723F'}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default VerificationStyle3;
