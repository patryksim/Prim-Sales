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
import PinCode from '../../components/PinCode';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import {storageImageUrl} from '../../tools/Helpers';

function VerificationStyle2() {
    const pageContext = useContext(PageContext);
    const [pinCode, setPinCode] = useState('');
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Header tintColor={'grey'} titleColor={'#000'} leftPress={() => pageContext.pageDispatch({page: 'pop'})}
                    title={'VERIFICATION'}
                    backgroundColor={'#FFF'}/>
            {/*<View style={{flex: 1}}>*/}
            <View style={{alignItems: 'center', marginBottom: 25, marginTop: 25}}>

                <Image style={{width: 250, height: 250}}
                       source={{uri: storageImageUrl('search', 'search_2_img_1.png')}}/>
            </View>
            {/*</View>*/}
            <View style={{flex: 1}}>
                <View style={{marginBottom: 31}}>
                    <Text
                        style={{
                            textAlign: 'center',
                            opacity: .54,
                        }}>{`OTP has been sent to you on your\nmobile phone. Please enter it below`}</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', paddingBottom: 85}}>
                    <PinCode onChange={(e) => setPinCode(e)} length={4}/>
                </View>
                <View style={{paddingHorizontal: 60}}>
                    <Button backgroundColor={'#F6723F'}
                            onPress={() => snackbarRef.current.ShowSnackBarFunction('login clicked')}/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export default VerificationStyle2;
