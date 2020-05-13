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
    ScrollView,
} from 'react-native';
import Surface from '../../components/Surface';
import {InputWithIcon} from './VerificationStyle13';
import {Box, recomendArr, Rectangle, Separator} from './VerificationStyle7';
import MaterialSnackbar from '../../components/MaterialSnackbar';
import {storageImageUrl} from '../../tools/Helpers';

export const dummyArr = [
    {
        title: 'Eifel Tower',
        sub_title: 'Paris',
        img: storageImageUrl('search', 'search_8_img_upd_1.png'),
    },
    {
        title: 'Louvre',
        sub_title: 'Paris',
        img: storageImageUrl('search', 'search_8_img_upd_1.png'),
    },

];

export default function () {
    const [value, setValue] = useState('');
    const snackbarRef = useRef(null);
    return (
        <ScrollView style={{flex: 1, backgroundColor: '#FFF'}}>
            <View style={{height: 220, backgroundColor: '#E0E0E0'}}>
                <Image style={{left: 0, right: 0, top: 0, bottom: 0, position: 'absolute'}}
                       source={{uri: storageImageUrl('search', 'search_5_img_head_1.png')}}/>
                <View style={{flex: 1, justifyContent: 'space-between', padding: 8}}>
                    <View style={{marginTop: 60}}>
                        <Text style={{fontWeight: 'bold', color: '#FFF'}}>Hi There</Text>
                        <Text style={{color: '#FFF'}}>Let's explore destination</Text>
                    </View>
                </View>
                <View style={{padding: 8}}>
                    <Surface>
                        <InputWithIcon bg_color={'#FFF'} onPress={() => pageContext.pageDispatch({page: 'pop'})}
                                       icon={require('../../assets/icon/ic_search_gray.png')} value={value}
                                       placeholderTextColor={'#000'}
                                       placeholder={''}
                                       onChange={text => setValue(text)}/>
                    </Surface>
                </View>
            </View>
            <View style={{padding: 20}}>
                <Separator title={'NEW UPDATES'} onPress={() => snackbarRef.current.ShowSnackBarFunction()}/>
                <FlatList
                    data={dummyArr}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (

                            <Box footer_text_color={'#000'} footer={true} data={item}/>
                        );
                    }}
                />
                <View style={{height: 20}}/>
                <Separator title={'NEW UPDATES'} onPress={() => snackbarRef.current.ShowSnackBarFunction()}/>
                <FlatList
                    data={recomendArr}
                    horizontal={true}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => {
                        return (
                            <Rectangle data={item}/>
                        );
                    }}
                />
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ScrollView>
    );
}
