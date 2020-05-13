import React, {useRef, useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button, CircleButton, Header} from './ChipComponents';
import HeaderOneButton from '../../components/HeaderOneButton';
import Surface from '../../components/Surface';
import {PageContext} from '../../../App';

export default function () {
    const pageContext = useContext(PageContext);
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>
            {/*<HeaderOneButton isHome={true}/>*/}
            <Header onPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <View style={{paddingHorizontal: 15, marginTop: 30, flex: 1}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, paddingRight: 15}}>

                        <Button>
                            NORMAL
                        </Button>
                    </View>
                    <View style={{flex: 1, paddingRight: 15}}>

                        <Button btn_color={'#7903d1'} text_color={'#FFF'}>
                            PRIMARY
                        </Button>
                    </View>
                    <View style={{flex: 1}}>

                        <Button btn_color={'#cd4dcc'} text_color={'#FFF'}>
                            ACCENT
                        </Button>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 28}}>
                    <View style={{flex: 1, paddingRight: 15}}>

                        <Button type={'shadow'} btn_color={'#FFF'}>
                            NORMAL
                        </Button>
                    </View>
                    <View style={{flex: 1, paddingRight: 15}}>

                        <Button type={'shadow'} btn_color={'#FFF'} text_color={'#7903d1'}>
                            PRIMARY
                        </Button>
                    </View>
                    <View style={{flex: 1}}>

                        <Button type={'shadow'} btn_color={'#FFF'} text_color={'#cd4dcc'}>
                            ACCENT
                        </Button>
                    </View>
                </View>
                <View style={{flexDirection: 'row', paddingTop: 28}}>
                    <View style={{flex: 1, paddingRight: 15}}>

                        <Button type={'outline'} btn_color={'#FFF'}>
                            NORMAL
                        </Button>
                    </View>
                    <View style={{flex: 1, paddingRight: 15}}>

                        <Button type={'outline'} borderColor={'#7903d1'} btn_color={'#FFF'} text_color={'#7903d1'}>
                            PRIMARY
                        </Button>
                    </View>
                    <View style={{flex: 1}}>

                        <Button type={'outline'} borderColor={'#cd4dcc'} btn_color={'#FFF'} text_color={'#cd4dcc'}>
                            ACCENT
                        </Button>
                    </View>
                </View>
            </View>
            {/*    -------------------   */}
            <View style={{flexDirection: 'row', height: 100}}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <CircleButton/>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <CircleButton imgstyle={{width: 20, height: 20}} img={require('../../assets/chip/ic_plus.png')}
                                  tint_color={'#FFF'} bg_color={'#7903d1'}/>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <CircleButton imgstyle={{width: 20, height: 20}} img={require('../../assets/chip/ic_pencil.png')} tint_color={'#FFF'}
                                  bg_color={'#cd4dcc'}/>

                </View>
            </View>
        </View>
    );
}
