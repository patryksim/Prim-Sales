import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Dimensions, TextInput, Image} from 'react-native';
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
            <View style={{flex: 1, alignItems: 'center'}}>
                <TosCard title={'Two-line item'} subTitle={'Secondary text'}/>
                <Surface style={{
                    height: 72,
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                    borderRadius: 4,
                    marginTop: 20,
                }}>
                    <View style={{flexDirection: 'row'}}>
                        <View
                            style={{width: 24, alignItems: 'center', justifyContent: 'center'}}>
                            <Image style={{width: 32, height: 32}} source={require('../../assets/chip/ic_lock.png')}/>
                        </View>
                        <View style={{paddingLeft: 24}}>

                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Two-Line Item</Text>
                            <Text style={{color: '#1e1e1e', opacity: .5}}>Secondary Text</Text>
                        </View>
                    </View>
                </Surface>
                <TosCard title={'Two-line item'} subTitle={'Secondary text'} bg={'#1f0a2f'} text_color={'#FFF'}/>
                <TosCustom text={'Success'}/>
                <TosCustom type={'info'} text={'Some Informations'}/>
                <TosCustom type={'error'} text={'Error Message'}/>

            </View>
            {/*<Text>ChipsStyle14</Text>*/}
        </View>
    );
}

function TosCard({title = 'Title', subTitle = 'SubTitle', bg = '#FFF', text_color = '#1e1e1e'}) {
    return (
        <Surface style={{
            height: 72,
            paddingHorizontal: 20,
            justifyContent: 'center',
            borderRadius: 4,
            marginTop: 30,
            backgroundColor: bg,
        }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: text_color}}>{title}</Text>
            <Text style={{color: text_color, opacity: .5}}>{subTitle}</Text>
        </Surface>
    );
}

function TosCustom({type = 'success', text = 'Text'}) {
    let bg_color = '#74d103';
    let img = require('../../assets/chip/ic_checked.png');
    if (type === 'success') {
        bg_color = '#74d103';
        img = require('../../assets/chip/ic_checked.png');
    } else if (type === 'info') {
        bg_color = '#7903d1';
        img = require('../../assets/chip/ic_info.png');

    } else if (type === 'error') {
        bg_color = '#f24221';
        img = require('../../assets/chip/ic_close.png');
    }
    return (
        <View style={{
            marginTop: 20,
            backgroundColor: bg_color,
            height: 50,
            alignItems: 'center',
            flexDirection: 'row',

            borderRadius: 250,
        }}>
            <View
                style={{alignItems: 'center', justifyContent: 'center', paddingLeft: 26, paddingRight: 15}}>
                <Image style={{width: type !== 'success' ? 32 : 24, height: type !== 'success' ? 32 : 24, tintColor: '#FFF'}}
                       source={img}/>
            </View>
            <View style={{alignItems: 'center', minWidth: 50}}>

                <Text style={{fontWeight: 'bold', color: '#FFF'}}>{text}</Text>
            </View>
            <View style={{width: 50}}>

            </View>
        </View>
    );
}
