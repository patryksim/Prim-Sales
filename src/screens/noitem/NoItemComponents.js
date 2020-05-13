import React from 'react';
import {Image, TextInput, TouchableOpacity, View, Text} from 'react-native';

export function NoItemHeader({value, onChange, leftPress, rigtPress, withSearch = true, title, bg_color = '#FFF', color = 'grey'}) {
    return (
        <View style={{flexDirection: 'row', height: 56, backgroundColor: bg_color}}>
            <TouchableOpacity onPress={leftPress}
                              style={{width: 60, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 18, height: 18, tintColor: color}}
                       source={require('../../assets/icon/ic_home.png')}/>
            </TouchableOpacity>
            <View style={{flex: 1, justifyContent: 'center'}}>
                {
                    withSearch
                        ?
                        <TextInput
                            placeholder={'Search'}
                            style={{height: 40, borderColor: 'gray', borderWidth: 0}}
                            onChangeText={onChange}
                            value={value}
                        />
                        :
                        <Text style={{color: color, fontWeight: 'bold'}}>
                            {
                                title
                            }
                        </Text>
                }
            </View>
            <TouchableOpacity onPress={rigtPress} style={{width: 60, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 20, height: 20, tintColor: color}}
                       source={require('../../assets/icon/ic_search_gray.png')}/>

            </TouchableOpacity>
        </View>
    );
}

export function Dot({dataArr, page}) {
    // console.warn(page)
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            {
                dataArr.map((x, y) => {
                    return (
                        <Text key={y}
                              style={{color: page === y ? '#7ed321' : '#eaeaea', fontSize: 8, marginRight: 7}}>●</Text>

                    );
                })
            }
        </View>
    );
}
