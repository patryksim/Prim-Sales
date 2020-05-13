import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Dimensions, TextInput, Image} from 'react-native';
import {Header} from './ChipComponents';
import {PageContext} from '../../../App';
import {storageImageUrl} from '../../tools/Helpers';

export default function () {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Header rigthImage={require('../../assets/chip/ic_checked.png')} tintColor={'#FFF'} title={'Tag'}
                    bgColor={'#7903d1'} img={require('../../assets/chip/ic_menu.png')}
                    opacity={1}
                    onPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View style={{height: 192, backgroundColor: '#D3D3D3'}}>
                <Image style={{flex: 1, width: undefined, height: undefined}}
                       source={{uri: storageImageUrl('chip', 'chip_13_img_1.jpg')}}/>
            </View>
            <View style={{height: 93, borderBottomWidth: 1, borderBottomColor: '#D3D3D3'}}>
                <View style={{paddingLeft: 15, paddingTop: 20}}>
                    <Text style={{color: '#1e1e1e', opacity: .5, fontWeight: 'bold'}}>Title</Text>
                    <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>Scott Masterson</Text>
                </View>
            </View>
            <View style={{height: 93, borderBottomWidth: 1, borderBottomColor: '#D3D3D3'}}>
                <View style={{paddingLeft: 15, paddingTop: 20}}>
                    <Text style={{color: '#1e1e1e', opacity: .5, fontWeight: 'bold'}}>Tag</Text>

                    <View style={{flexDirection: 'row', marginTop: 12}}>
                        <Tag tag={'Food'}/>
                        <Tag tag={'Travel'}/>
                    </View>
                </View>
            </View>
            <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
                <Text style={{fontWeight: 'bold', color: '#1e1e1e', opacity: .5}}>Descriptions</Text>
                <Text style={{color: '#1e1e1e', opacity: .5, marginTop: 20}}>Proin vulputate a augue dictum placerat.
                    Vestibulum malesuada condimentum orci sit amet posuere. Quisque finibus augue in leo rhoncus varius.
                    Donec ultrices felis eget convallis feugiat. Maecenas ullamcorper ac dui ac accumsan. Quisque vel
                    nulla fringilla, faucibus magna ac, fermentum ante. Ut in eros nec sapien elementum rhoncus. Mauris
                    ut nibh a lorem consequat egestas eget in ex. Nam egestas tristique neque. </Text>
            </View>
        </View>
    );
}

function Tag({tag}) {
    return (
        <View style={{
            backgroundColor: '#d3d3d3',
            paddingHorizontal: 10,
            justifyContent: 'center',
            borderRadius: 15,
            height: 30,
            marginRight: 10,
        }}>
            <Text>Food</Text>
        </View>
    );
}
