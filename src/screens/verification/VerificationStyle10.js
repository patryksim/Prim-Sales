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
import {InputWithIcon} from './VerificationStyle13';
import {PageContext} from '../../../App';
import {ModalHistory} from './VerificationStyle12';
import MaterialSnackbar from '../../components/MaterialSnackbar';

export const arr = ['London', 'Paris', 'Roma'];

export default function () {
    const [value, setValue] = useState('');
    const pageContext = useContext(PageContext);
    const [visible, setVisible] = useState(false);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#000'}}>
            <InputWithIcon onPress={() => pageContext.pageDispatch({page: 'pop'})}
                           opacity={1}
                           icon={require('../../assets/chip/ic_arrow_back.png')} value={value}
                           tintColor={'#FFF'}
                           onFocus={() => setVisible(true)}
                           onChange={text => setValue(text)}/>

            <ModalHistory isVisible={visible}>

                {
                    arr.map((x, y) => {
                        return (
                            <List onPress={() => snackbarRef.current.ShowSnackBarFunction(x)} title={x} key={y}/>

                        );
                    })
                }
            </ModalHistory>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export const List = ({title = 'title', bg_color = '#252525', text_color = '#FFF', onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{flexDirection: 'row', marginBottom: 3}}>
            <View style={{
                width: 70,
                height: 50,
                backgroundColor: bg_color,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image source={require('../../assets/icon/ic_history.png')} style={{width: 25, height: 25}}/>
            </View>
            <View style={{flex: 1, backgroundColor: bg_color, justifyContent: 'center'}}>
                <Text style={{color: text_color}}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};
