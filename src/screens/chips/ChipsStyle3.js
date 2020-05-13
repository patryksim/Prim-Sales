import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {FloatingButton, Header} from './ChipComponents';
import {PageContext} from '../../../App';
import Surface from '../../components/Surface';
import {storageImageUrl} from '../../tools/Helpers';
// import FloatingButton from '../../components/FloatingButton';

export const contactArr = [
    {
        name: 'Michelle Hendley',
        location: 'San Fransico, CA',
        image: storageImageUrl('chip/user', 'user_2.png'),
    },
    {
        name: 'Kimberly White',
        location: 'Manhattan, NY',
        image: storageImageUrl('chip/user', 'user_3.png'),

    },
    {
        name: 'Steve Rogers',
        location: 'Brooklyn, NY',
        image: storageImageUrl('chip/user', 'user_4.png'),
    },
    {
        name: 'Amy Patterson',
        location: 'Little Indian, ABQ',
        image: storageImageUrl('chip/user', 'user_5.png'),
    },
    {
        name: 'Hannah Paige',
        location: 'San Fransisco, CA',
        image: storageImageUrl('chip/user', 'user_6.png'),
    },
];
export default function () {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#FAFAFA'}}>
            <Header img={require('../../assets/chip/ic_arrow_back.png')}
                    onPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <FloatingButton>
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

export function List({item, onPress}) {
    return (
        <View style={{
            flexDirection: 'row',
            height: 80,
            paddingHorizontal: 20,
            borderBottomWidth: 1,
            borderColor: '#D3D3D3',
            backgroundColor: '#FAFAFA',
        }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View>
                    <Image style={{width: 45, height: 45}} source={{uri: item.image}}/>
                </View>
            </View>
            <View style={{flex: 1, justifyContent: 'center', paddingLeft: 16}}>
                <Text style={{fontSize: 16}}>{item.name}</Text>
                <Text>{item.location}</Text>
            </View>
            <TouchableOpacity style={{justifyContent: 'center'}}>
                <View style={{
                    height: 35,
                    width: 35,
                    backgroundColor: 'lime',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 100,
                }}>

                    <Image style={{width: 18, height: 18, tintColor: '#FFF'}}
                           source={require('../../assets/chip/ic_plus.png')}/>
                </View>
            </TouchableOpacity>
        </View>
    );
}
