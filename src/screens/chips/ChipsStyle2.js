import React, {useContext, useRef, useState, Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {PageContext} from '../../../App';
import {Button, Header} from './ChipComponents';

export default function () {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#fafafa'}}>
            <Header img={require('../../assets/chip/ic_arrow_back.png')}
                    onPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View style={{
                flexDirection: 'row',
                paddingTop: 30,
                borderBottomWidth: 1,
                paddingBottom: 44,
                borderBottomColor: '#d3d3d3',
            }}>
                <View style={{width: 110, marginRight: 10, marginLeft: 15}}>
                    <Button btn_color={'#FFF'} type={'flat'}>
                        NORMAL
                    </Button>
                </View>
                <View style={{width: 110}}>
                    <Button text_color={'#FFF'} btn_color={'#cd4dcc'} type={'flat'}>
                        PRIMARY
                    </Button>
                </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 50, paddingHorizontal: 20}}>
                <TouchableOpacity style={{alignItems: 'center'}}>
                    <Image style={{width: 20, height: 20, tintColor: 'grey'}}
                           source={require('../../assets/icon/ic_home.png')}/>
                </TouchableOpacity>
                <View style={{paddingLeft: 22, flex: 1}}>
                    <View style={{marginBottom: 16}}>
                        <Text style={{fontSize: 16}}>Settings</Text>

                    </View>
                    <View>

                        <Text style={{fontSize: 12}}>Total</Text>
                        <Text style={{fontSize: 22, marginTop: 15, marginBottom: 10}}>128 GB</Text>
                        <View style={{height: 17, backgroundColor: '#ff7fb4'}}>
                            <View style={{height: 17, width: 189, backgroundColor: '#ff4994'}}>

                            </View>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <View style={{width: 189}}>
                                <Text style={{fontSize: 12, color: '#4a4a4a'}}>App</Text>
                                <Text style={{marginTop: 10, fontSize: 12, color: '#4a4a4a'}}>102 GB</Text>
                            </View>
                            <View style={{width: 189}}>
                                <Text style={{fontSize: 12, color: '#4a4a4a'}}>Data</Text>
                                <Text style={{marginTop: 10, fontSize: 12, color: '#4a4a4a'}}>8,9 GB</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}


