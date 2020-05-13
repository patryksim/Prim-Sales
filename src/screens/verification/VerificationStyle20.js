import React, {useContext, useRef, useState} from 'react';
import {PageContext} from '../../../App';
import {View, Text, TouchableOpacity, Image, TextInput, Modal, Alert} from 'react-native';
import Surface from '../../components/Surface';
import {Navbar} from './VerificationStyle14';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import {Button} from './VerificationStyle1';
import InputSelect from '../../components/InputSelect';

export default function () {
    const pageContext = useContext(PageContext);
    const [visible, setVisible] = useState(false);
    const snackbarRef = useRef(null);
    const onPick = () => {
        return (e) => {
            console.log(e);
        };
    };
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Surface>
                {/*<Text>qwe</Text>*/}
                <Navbar
                    leftImagePress={() => pageContext.pageDispatch({page: 'pop'})}
                    leftImageStyle={{width: 20, height: 20, tintColor: 'grey'}}
                    rightImage={require('../../assets/verification/ic_vertical_elipsis.png')}
                    rightImagePress={() => snackbarRef.current.ShowSnackBarFunction()}
                    title={'FILTER PROPERTY'}/>
            </Surface>
            <View style={{flexDirection: 'row', marginTop: 20, paddingHorizontal: 18}}>
                <View style={{flex: 1, paddingRight: 10}}>
                    <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('BUY')} backgroundColor={'#59a7ff'}
                            box={true} title={'BUY'}/>
                </View>
                <View style={{flex: 1, paddingRight: 10}}>
                    <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('RENT')} backgroundColor={'#f3f3f3'}
                            color={'#000'} box={true} title={'RENT'}/>
                </View>
                <View style={{flex: 1}}>
                    <Button onPress={() => snackbarRef.current.ShowSnackBarFunction('RENT')} backgroundColor={'#f3f3f3'}
                            color={'#000'} box={true} title={'SALE'}/>

                </View>
            </View>
            <View style={{paddingHorizontal: 18}}>
                <Text style={{marginBottom: 20, marginTop: 30}}>Property Type</Text>
                <InputSelect initial_value={'Appartment & Unit'} onPress={onPick()}/>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                    <View style={{flex: 1, paddingRight: 10}}>
                        <Text>Min Price</Text>
                        <InputSelect initial_value={'$50.000'} border={false} onPress={onPick()}/>
                    </View>
                    <View style={{flex: 1, paddingLeft: 10}}>
                        <Text>Max Price</Text>
                        <InputSelect initial_value={'$1.000.000'} border={false} onPress={onPick()}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                    <View style={{flex: 1, paddingRight: 10}}>
                        <Text>Min Bedroom</Text>
                        <InputSelect initial_value={'1'} border={false} onPress={onPick()}/>
                    </View>
                    <View style={{flex: 1, paddingLeft: 10}}>
                        <Text>Max Bedroom</Text>
                        <InputSelect initial_value={'4'} border={false} onPress={onPick()}/>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                    <View style={{flex: 1, paddingRight: 10}}>
                        <Text>Bathroom</Text>
                        <InputSelect initial_value={'1'} border={false} onPress={onPick()}/>
                    </View>
                    <View style={{flex: 1, paddingLeft: 10}}>
                        <Text>Car Space</Text>
                        <InputSelect initial_value={'2'} border={false} onPress={onPick()}/>
                    </View>
                </View>
                <Text style={{marginVertical: 20}}>Min Land Size</Text>
                <InputSelect initial_value={200} onPress={onPick()}/>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}
