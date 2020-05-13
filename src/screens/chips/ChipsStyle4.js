import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {FloatingButton, Header} from './ChipComponents';
import {PageContext} from '../../../App';
import {contactArr, List} from './ChipsStyle3';
import {storageImageUrl} from '../../tools/Helpers';
// import FloatingButton from '../../components/FloatingButton';

export default function () {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Header img={require('../../assets/chip/ic_arrow_back.png')}
                    onPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <FloatingButton opacity={0} with_text={false}>
                <View
                    style={{
                        height: 112,
                        flexDirection: 'row',
                        marginHorizontal: 0,
                        marginTop: 0,
                        backgroundColor: '#FFF',
                        borderBottomWidth: 1,
                        borderColor: '#D3D3D3',
                    }}>
                    <View style={{width: 112, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: 90, height: 90, backgroundColor: '#d3d3d3', borderRadius: 500}}>
                            <Image style={{width: 90, height: 90}}
                                   source={{uri: storageImageUrl('chip/user', 'user_1.png')}}/>
                        </View>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={{fontSize: 18}}>Michael Angelo</Text>
                        <Text style={{fontSize: 16}}>UI Designer</Text>
                    </View>
                </View>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                    data={contactArr}
                    renderItem={({item, index}) =>
                        <List item={item}/>

                    }
                />
            </FloatingButton>
        </View>
    );
}
