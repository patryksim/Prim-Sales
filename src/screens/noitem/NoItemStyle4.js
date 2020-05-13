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
        <View style={{flex: 1, backgroundColor: '#c2b9ed'}}>
            <Surface>
                <NoItemHeader withSearch={false} title={'Archived'}
                              leftPress={() => pageContext.pageDispatch({page: 'pop'})} value={value}
                              onChange={(e) => onChangeText(e)}/>
            </Surface>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{
                    color: '#0909cd',
                    marginTop: 40,
                    textAlign: 'center',
                }}>{`There is no account available\nTap button below to aadd new account`}</Text>
                <Image style={{width: 262, height: 401, position: 'absolute', bottom: 0}}
                       source={require('../../assets/noitem/bg.png')}/>
            </View>
        </View>
    );
}
