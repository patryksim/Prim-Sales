import React, {useContext, useRef, useState} from 'react';
import {PageContext} from '../../../App';
import {View} from 'react-native';
import {InputWithIcon} from './VerificationStyle13';
import {arr, List} from './VerificationStyle10';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import {ModalHistory} from './VerificationStyle12';

export default function () {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f1f1'}}>
            <View style={{backgroundColor: '#79bf10', padding: 8}}>

                <InputWithIcon bg_color={'#FFF'} onPress={() => pageContext.pageDispatch({page: 'pop'})}
                               icon={require('../../assets/icon/ic_search_gray.png')} value={value}
                               placeholderTextColor={'#000'}
                               onFocus={() => setVisible(true)}
                               onChange={text => setValue(text)}/>
            </View>
            <View style={{padding: 8}}>
                <ModalHistory isVisible={visible}>
                    {
                        arr.map((x, y) => {
                            return (
                                <List onPress={() => snackbarRef.current.ShowSnackBarFunction(x)} bg_color={'#FFF'}
                                      text_color={'#41406f'} title={x} key={y}/>
                            );
                        })
                    }
                </ModalHistory>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}


