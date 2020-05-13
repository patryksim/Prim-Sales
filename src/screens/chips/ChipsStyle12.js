import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Dimensions, TextInput, Image} from 'react-native';
import {Header} from './ChipComponents';
import {PageContext} from '../../../App';

export default function () {
    const pageContext = useContext(PageContext);
    const [subject, setSubject] = useState('');
    const [compose_mail, setComposeMail] = useState('');
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            <Header img={require('../../assets/chip/ic_menu.png')}
                    onPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View>
                <View style={{
                    paddingTop: 30,
                    paddingLeft: 15,
                    paddingRight: 20,
                    borderBottomWidth: 1,
                    height: 120,
                    borderBottomColor: '#D3D3D3',
                    // paddingBottom:13
                }}>

                    <Text style={{color: '#1e1e1e', opacity: .5}}>to</Text>
                    <View style={{flexDirection: 'row', paddingTop: 10, height: 42}}>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Scott Masterson</Text>
                        </View>
                        <View style={{width: 35, height: 35}}>
                            <Image style={{width: 35, height: 35, tintColor:'#7903d1' }}
                                   source={require('../../assets/chip/ic_contac.png')}/>
                        </View>
                    </View>
                </View>
                <View style={{
                    height: 73,
                    borderBottomColor: '#D3D3D3',
                    borderBottomWidth: 1,
                    justifyContent: 'center',
                    paddingLeft: 15,
                }}>
                    <TextInput
                        placeholder={'Subject'}
                        style={{height: 40}}
                        onChangeText={text => setSubject(text)}
                        value={subject}
                    />
                </View>
                <View style={{
                    height: 73,
                    borderBottomColor: '#D3D3D3',
                    borderBottomWidth: 1,
                    justifyContent: 'center',
                    paddingLeft: 15,
                }}>
                    <TextInput
                        placeholder={'Compose Mail'}
                        style={{height: 40}}
                        onChangeText={text => setComposeMail(text)}
                        value={compose_mail}
                    />
                </View>
            </View>
        </View>
    );
}
