import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {PageContext} from '../../../App';
import {Header} from './ChipComponents';
import Surface from '../../components/Surface';
import {storageImageUrl} from '../../tools/Helpers';

export default function () {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#fafafa'}}>
            <Header img={require('../../assets/chip/ic_menu.png')}
                    onPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <ScrollView style={{paddingHorizontal: 8, paddingTop: 20}}>
                <Card/>
                <Card/>
            </ScrollView>
        </View>
    );
}

function Card() {
    return (
        <Surface style={{height: 388, backgroundColor: '#FFF', marginBottom: 20,marginHorizontal:1,marginTop:1,borderRadius:2,overflow:'hidden'}}>
            <View style={{height: 72, backgroundColor: '#FFF', flexDirection: 'row'}}>
                <View style={{
                    height: 40,
                    width: 40,
                    marginLeft: 16,
                    marginTop: 16,
                    backgroundColor: '#FFF',
                    borderRadius: 100,
                }}>
                    <Image style={{width: 40, height: 40}} source={{uri: storageImageUrl('chip/user', 'user_6.png')}}/>
                </View>
                <View style={{flex: 1, paddingLeft: 16, paddingTop: 19}}>
                    <Text style={{color: '#000', fontWeight: 'bold'}}>John Doe</Text>
                    <Text style={{color: '#000', opacity: .5}}>September 12, 2019</Text>
                </View>
            </View>
            <View style={{height: 192, backgroundColor: '#FAFAFA'}}>
                <Image style={{flex: 1, width: undefined, height: undefined}}
                       source={{uri: storageImageUrl('chip', 'chip_8_img_1.jpg')}}/>
            </View>
            <View style={{paddingHorizontal: 16, paddingTop: 15}}>
                <Text>{`Greyhound divisively hello coldly wonderfully\nmarginally far upon excluding.`}</Text>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: '#FFF',
                flexDirection: 'row',
                paddingHorizontal: 16,
                alignItems: 'center',
            }}>
                <View>
                    <Image style={[style.img]}
                           resizeMode={'contain'}
                           source={require('../../assets/chip/ic_favorite.png')}/>
                </View>
                <View style={{paddingLeft: 11}}>
                    <Text style={[style.txt]}>13</Text>
                </View>
                <View style={{paddingLeft: 21}}>
                    <Image style={[style.img]}
                           resizeMode={'contain'}
                           source={require('../../assets/chip/ic_share.png')}/>
                </View>
                <View style={{paddingLeft: 11}}>
                    <Text style={[style.txt]}>7</Text>
                </View>
            </View>
        </Surface>
    );
}

const style = StyleSheet.create({
    img: {
        width: 22, height: 24,
        tintColor: '#000',
        opacity: .5,
    },
    txt: {color: '#000', opacity: .5},
});
