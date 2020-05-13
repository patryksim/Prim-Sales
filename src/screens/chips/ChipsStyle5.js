import React, {useContext, useRef, useState, Component} from 'react';
import {View, Text, Dimensions, TextInput, Image, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Surface from '../../components/Surface';

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;

const {width, height} = Dimensions.get('window');

export default function () {
    const [value, onChangeText] = useState('');
    return (
        <View style={{flex: 1, backgroundColor: '#FFF'}}>

            <MapView
                style={{width: width, height: height}}
                maxZoomLevel={15}
                region={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,

                }}>
                <Marker
                    coordinate={{
                        latitude: LATITUDE,
                        longitude: LONGITUDE,
                    }}
                    title={'Location'}
                    description={'My Location'}
                />
            </MapView>
            <Surface style={{
                backgroundColor: '#FFF',
                height: 48,
                position: 'absolute',
                left: 8,
                right: 8,
                top: 8,
                borderRadius: 2,
            }}>

                <View style={{flexDirection: 'row', height: 48}}>
                    <TouchableOpacity style={{width: 48, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 17, height: 17, tintColor: 'grey'}}
                               source={require('../../assets/chip/ic_search.png')}/>
                    </TouchableOpacity>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <TextInput
                            placeholder={'Search'}
                            style={{height: 40}}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                        />
                    </View>
                    <TouchableOpacity style={{width: 48, alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{width: 17, height: 17, tintColor: 'grey'}}
                               source={require('../../assets/chip/ic_mic.png')}/>
                    </TouchableOpacity>
                </View>
            </Surface>

            <Surface style={{
                height: 152,
                backgroundColor: '#FFF',
                position: 'absolute',
                left: 8,
                right: 8,
                bottom: 8,
                borderRadius: 2,
            }}>
                <Surface style={{
                    width: 56,
                    height: 56,
                    backgroundColor: '#cd4dcc',
                    position: 'absolute',
                    top: -28,
                    borderRadius: 60,
                    right: 19,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{width: 24, height: 19, tintColor: '#FFF'}}
                           source={require('../../assets/chip/ic_car_compact.png')}/>
                </Surface>
                <View style={{marginLeft: 12, flex: 1,borderRadius:2}}>
                    <Text style={{marginTop: 14, fontSize: 16}}>Gotham City</Text>
                    <View style={{flexDirection: 'row', paddingTop: 14, alignItems: 'center'}}>
                        {
                            star.map((y) => {
                                return (
                                    <Image key={y} style={{width: 20, height: 20, marginRight: 6}}
                                           source={require('../../assets/bottom/star.png')}/>
                                );
                            })
                        }
                        <Text style={{marginLeft: 9}}>4,2</Text>
                    </View>
                </View>
                <View style={{height: 65, borderTopWidth: 1, borderColor: 'grey'}}>
                    <Text style={{color: '#7903d1', left: 12, top: 12}}>5 min away</Text>
                </View>
            </Surface>
        </View>
    );
}

const star = [1, 2, 3, 4];
