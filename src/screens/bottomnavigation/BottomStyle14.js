import React, {useRef, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import Surface from '../../components/Surface';
import RootBottomNav1 from './RootBottomNav1';
import MapView, {Marker} from 'react-native-maps';

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.05;

const markerPosition = [
    {id: '1', lat: 37.7919422, lng: -122.4350607},
    {id: '2', lat: 37.7922921, lng: -122.4308393},
    {id: '3', lat: 37.7874647, lng: -122.4326111},
    {id: '4', lat: 37.8004063, lng: -122.4270608, image: require('../../assets/icon/map1_button2.png')},
    {id: '5', lat: 37.7967161, lng: -122.4373491, image: require('../../assets/icon/map1_button2.png')},
];

const {width, height} = Dimensions.get('window');

export default function () {
    const [tab, setTab] = useState('recent');
    const renderSeparator = () => {
        return (
            <View
                style={{
                    width: 10,
                }}
            />
        );
    };
    return (
        <View style={{flex: 1}}>
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

            <View style={{position: 'absolute', bottom: 0, right: 0, left: 0}}>
                <Surface style={{marginBottom: 0, marginLeft: 0, marginRight: 0}}>
                    <View style={{height: 56, backgroundColor: '#FFF', flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                            <Image style={{tintColor: '#3a57f9', width: 25, height: 25}}
                                   source={require('../../assets/bottom/home.png')}/>
                            <Text style={{color: '#969696'}}>{'  '}Home</Text>
                        </TouchableOpacity>
                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={{
                                height: 60,
                                width: 60,
                                borderRadius: 100,
                                backgroundColor: '#3a57f9',
                                position: 'absolute',
                                top: -25,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <Image source={require('../../assets/bottom/plus.png')}/>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                            <Image style={{tintColor: '#3a57f9', width: 25, height: 25}}
                                   source={require('../../assets/bottom/cog.png')}/>
                            <Text style={{color: '#969696'}}>{'  '}Setting</Text>
                        </TouchableOpacity>
                    </View>
                </Surface>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    img: {
        width: 28, height: 28,
    },
});
