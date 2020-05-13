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
import {storageImageUrl} from '../../tools/Helpers';


const orange = '#F6723F';

export default function () {
    const pageContext = useContext(PageContext);
    const [pinCode, setPinCode] = useState('');
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    // const [username, userInput] = InputRound();
    return (
        <TabRoot active={'feed'} title={'Feed'}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 126, height: 128}}
                       source={{uri: storageImageUrl('no_item', 'no_item_7_online_learning.png')}}/>
                <Text style={{fontWeight: 'bold', fontSize: 16, color: '#7575ff',marginTop:59,marginBottom:19}}>No feed, yet</Text>
                <Text style={{
                    color: '#1e1e1e',
                    marginTop: 10,
                    textAlign: 'center',
                }}>{`Maecenas at tortor quam.\nMaecenas ac dictum mi, vitae\ndictum sapien. `}</Text>
            </View>
        </TabRoot>
    );
}
