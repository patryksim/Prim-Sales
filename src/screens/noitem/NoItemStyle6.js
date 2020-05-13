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
import TabRoot from './TabRoot';


const orange = '#F6723F';

export default function () {
    const pageContext = useContext(PageContext);
    const [pinCode, setPinCode] = useState('');
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    // const [username, userInput] = InputRound();
    return (
        <TabRoot>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../../assets/noitem/group_chat.png')}/>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#7575ff', marginTop: 60}}>No messages,
                    yet</Text>
                <Text style={{
                    color: '#1e1e1e',
                    marginTop: 20,
                    opacity: 0.5,
                    textAlign: 'center',
                }}>{`Maecenas at tortor quam.\nMaecenas ac dictum mi, vitae\ndictum sapien. `}</Text>
            </View>
        </TabRoot>
    );
}
