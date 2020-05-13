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
                <NoItemHeader withSearch={false} title={'Archived'}
                              leftPress={() => pageContext.pageDispatch({page: 'pop'})} value={value}
                              onChange={(e) => onChangeText(e)}/>
            </Surface>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image resizeMode={'contain'} style={{width: 250, height: 60}}
                       source={require('../../assets/icon/113_cloud_computing.png')}/>
                <Text style={{fontWeight:'bold', fontSize:16, marginTop:40}}>No Result</Text>
                <Text style={{color: '#1e1e1e', marginTop: 10}}>Archived conversations appear here</Text>
            </View>
        </View>
    );
}
