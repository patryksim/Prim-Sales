import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import {Header} from './ChipComponents';
import {PageContext} from '../../../App';
import Surface from '../../components/Surface';
import {storageImageUrl} from '../../tools/Helpers';

const {width} = Dimensions.get('window');

export default function () {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Header img={require('../../assets/chip/ic_arrow_back.png')}
                    onPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View style={{paddingTop: 20, paddingHorizontal: 16, flexDirection: 'row'}}>
                <Surface style={{
                    width: ((width / 2) - 21),
                    backgroundColor: '#FFF',
                    height: 212,
                    marginRight: 5,
                    borderRadius: 2,
                }}>
                    <CardContent title={'Traditional Food'}/>
                </Surface>
                <Surface style={{
                    width: ((width / 2) - 21),
                    backgroundColor: '#FFF',
                    height: 212,
                    marginLeft: 5,
                    borderRadius: 2,
                }}>
                    <CardContent title={'Modern Food'} img={storageImageUrl('chip', 'chip_6_img_2.jpg')}/>

                </Surface>
            </View>
            <View style={{paddingHorizontal: 16, paddingTop: 20}}>

                <Surface style={{backgroundColor: '#7903d1', height: 166, borderRadius: 2}}>
                    <Text style={{color: '#deffffff', marginLeft: 28, marginTop: 18, fontSize: 20}}>Consectetur</Text>
                    <Text style={{color: '#deffffff', marginLeft: 28, marginTop: 9, fontSize: 16}}>Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit, sed do</Text>
                    <Text style={{color: '#deffffff', marginLeft: 28, marginTop: 33, fontSize: 16}}>Read More</Text>
                </Surface>
            </View>
        </View>
    );
}

function CardContent({title = 'title', img = storageImageUrl('chip', 'chip_6_img_1.jpg')}) {
    return (
        <>
            <View style={{height: 164, backgroundColor: 'grey'}}>
                <Image style={{flex: 1, width: undefined, height: undefined}}
                       source={{uri: img}}/>
                <Text style={{
                    color: '#FFF',
                    position: 'absolute',
                    top: 131,
                    left: 15.1,
                    fontWeight: 'bold',
                }}>{title}</Text>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 22, height: 24, opacity: .54}}
                           resizeMode={'contain'}
                           source={require('../../assets/chip/ic_favorite.png')}/>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 22, height: 24, opacity: .54}}
                           resizeMode={'contain'}
                           source={require('../../assets/chip/ic_bookmark.png')}/>
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 22, height: 24, opacity: .54}}
                           resizeMode={'contain'}
                           source={require('../../assets/chip/ic_share.png')}/>
                </View>
            </View>
        </>
    );
}
