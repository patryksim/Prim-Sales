import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Dimensions, TextInput, Image, TouchableOpacity} from 'react-native';
import {Header} from './ChipComponents';
import Surface from '../../components/Surface';
import {PageContext} from '../../../App';

export default function () {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Header tintColor={'#FFF'} title={'Tost Custom'} bgColor={'#7903d1'}
                    img={require('../../assets/chip/ic_menu.png')}
                    opacity={1}
                    onPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View style={{marginTop: 20}}>

                <PrimaryTost undo={false}/>
            </View>
            <View style={{marginTop: 20}}>
                <PrimaryTost bg_color={'#cd4dcc'}/>
            </View>
            <View style={{paddingHorizontal: 10, marginTop: 22}}>
                <BoderedTost/>
            </View>
            <View style={{paddingHorizontal: 10, marginTop: 22}}>
                <BoderedTost withIcon={false} revert={true}/>
            </View>
            <View style={{marginTop: 20}}>
                <SuccessTost/>
            </View>
            <View style={{marginTop: 20}}>
                <FlatTost type={'info'} title={'Some Informations'}/>
            </View>
            <View style={{marginTop: 20}}>
                <FlatTost type={'error'} title={'Error Message'}/>
            </View>
            {/*<Text>ChipsStyle14</Text>*/}
        </View>
    );
}

function BoderedTost({withIcon = true, revert = false}) {
    let bg_color = '#FFF';
    let color = '#000';
    let sec_color = '#1e1e1e';
    let undo_color = '#4a4a4a';
    if (revert) {
        bg_color = '#1f0a2f';
        color = '#FFF';
        sec_color = '#FFF';
        undo_color = '#FFF';
    }
    return (
        <Surface style={{
            height: 72,
            borderRadius: 4,
            flexDirection: 'row',
            paddingHorizontal: 8,
            backgroundColor: bg_color,
        }}>
            {
                withIcon
                &&
                <View style={{width: 44, alignItems: 'center', justifyContent: 'center'}}>
                    <Image style={{width: 32, height: 32}} source={require('../../assets/chip/ic_lock.png')}/>
                </View>
            }
            <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: color}}>Two-line item</Text>
                <Text style={{color: sec_color, opacity: .5}}>Secondary text</Text>
            </View>
            <View style={{width: 1, borderWidth: 1, marginVertical: 23, borderColor: '#d3d3d3'}}/>
            <View style={{width: 74, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontWeight: 'bold', color: undo_color}}>UNDO</Text>
            </View>
        </Surface>
    );
}

function SuccessTost({title = 'Success'}) {
    return (
        <View style={{
            height: 50,
            backgroundColor: '#74d103',
            paddingHorizontal: 20,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
        }}>
            <View
                style={{width: 40, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 24, height: 24, tintColor: '#FFF'}}
                       source={require('../../assets/chip/ic_checked.png')}/>
            </View>
            <Text style={{color: '#FFF', fontWeight: 'bold', paddingHorizontal: 10}}>{title}</Text>
            <View style={{width: 40, height: 40}}>

            </View>
        </View>
    );
}

function FlatTost({title = 'Success', type = 'info'}) {
    let bg_color = '#7903d1';
    let img = require('../../assets/chip/ic_info.png');
    if (type === 'info') {
        bg_color = '#7903d1';
        img = require('../../assets/chip/ic_info.png');
    } else if (type === 'error') {
        bg_color = '#f24221';
        img = require('../../assets/chip/ic_close.png');
    }
    return (
        <View style={{
            height: 50,
            backgroundColor: bg_color,
            paddingHorizontal: 20,
            alignItems: 'center',
            flexDirection: 'row',
        }}>
            <View style={{
                width: 40, height: 40,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Image style={{width: 32, height: 32, tintColor: '#FFF'}}
                       source={img}/>
            </View>
            <Text style={{color: '#FFF', fontWeight: 'bold', paddingHorizontal: 10}}>{title}</Text>
        </View>
    );
}

function PrimaryTost({undo = true, text = 'Primary', bg_color = '#7903d1'}) {
    return (
        <View style={{
            height: 50,
            backgroundColor: bg_color,
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
        }}>
            <View style={{flex: 1}}>
                <Text style={{color: '#FFF', fontWeight: 'bold'}}>Primary</Text>
            </View>
            {
                undo
                &&
                <TouchableOpacity style={{paddingHorizontal: 10}}>

                    <Text style={{color: '#FFF', fontWeight: 'bold'}}>UNDO</Text>
                </TouchableOpacity>
            }
        </View>
    );
}

