import React, {useContext, useRef, useState} from 'react';
import {PageContext} from '../../../App';
import {View} from 'react-native';
import {InputWithIcon} from './VerificationStyle13';
import {arr, List} from './VerificationStyle10';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import Surface from '../../components/Surface';

export default function () {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f1f1'}}>
            <Surface style={{borderRadius:2}}>

                <InputWithIcon bg_color={'#FFF'} onPress={() => pageContext.pageDispatch({page: 'pop'})}
                               icon={require('../../assets/chip/ic_arrow_back.png')} value={value}
                               tintColor={'#000'}
                               opacity={1}
                               placeholderTextColor={'#000'}
                               onFocus={() => setVisible(true)}
                               onChange={text => setValue(text)}/>
            </Surface>
            <ModalHistory isVisible={visible}>
                {
                    arr.map((x, y) => {
                        return (
                            <List onPress={() => snackbarRef.current.ShowSnackBarFunction(x)} bg_color={'#FFF'} text_color={'#41406f'} title={x} key={y}/>
                        );
                    })
                }
            </ModalHistory>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

export function ModalHistory(props) {
    if (props.isVisible) {
        return (

            // <View style={{padding: 8}}>

                // {
                    props.children
                // }
            // </View>
        );

    } else {
        return null;
    }

}
