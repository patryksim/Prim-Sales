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
import {storageImageUrl} from '../../tools/Helpers';


const orange = '#F6723F';

export default function () {
    const pageContext = useContext(PageContext);
    const [pinCode, setPinCode] = useState('');
    const [value, onChangeText] = useState('');
    const snackbarRef = useRef(null);
    // const [username, userInput] = InputRound();
    return (
        <View style={{flex: 1, backgroundColor: '#bdc8c7'}}>
            <Surface>
                <NoItemHeader withSearch={false} title={'City'}
                              leftPress={() => pageContext.pageDispatch({page: 'pop'})} value={value}
                              onChange={(e) => onChangeText(e)}/>
            </Surface>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 16, marginTop: 79}}>No city here</Text>
                <Text style={{
                    color: '#1e1e1e',
                    marginTop: 17,
                    textAlign: 'center',
                }}>{`Duis aute irure dolor in\nreprehenderit in voluptate velit`}</Text>

                <Image style={{height: 340, position: 'absolute', bottom: -20, left: 0, right: 0}}
                       source={{uri: storageImageUrl('no_item', 'no_item_5_img_1.png')}}/>
            </View>
        </View>
    );
}
