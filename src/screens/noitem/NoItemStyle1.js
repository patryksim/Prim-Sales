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
import PinCode from '../../components/PinCode';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import Surface from '../../components/Surface';
import {NoItemHeader} from './NoItemComponents';


const orange = '#F6723F';

export default function () {
    const pageContext = useContext(PageContext);
    const [pinCode, setPinCode] = useState('');
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    // const [username, userInput] = InputRound();
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Surface>
                <NoItemHeader leftPress={() => pageContext.pageDispatch({page: 'pop'})} value={value} onChange={(e)=>onChangeText(e)}/>
            </Surface>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image style={{width: 50, height: 50, tintColor: 'grey'}}
                       source={require('../../assets/icon/no_wifi.png')}/>
                <Text style={{fontWeight:'bold', fontSize:16, marginTop:40}}>No Connection</Text>
                <Text style={{color:'#1e1e1e', marginTop:10}}>Retry</Text>
            </View>
        </View>
    );
}
