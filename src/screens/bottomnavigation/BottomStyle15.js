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
const star = [1, 2, 3, 4];
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

            <View style={{position: 'absolute', left: 0, right: 0}}>
                <Surface style={{margin: 10, borderRadius: 5}}>
                    <View style={{height: 56, backgroundColor: '#FFF', borderRadius: 5, flexDirection: 'row'}}>
                        <TouchableOpacity
                            style={{width: 56, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={require('../../assets/icon/ic_home.png')}
                                   style={{height: 16, width: 18, resizeMode: 'contain', tintColor: 'grey'}}/>
                        </TouchableOpacity>
                        <View style={{flex: 1, justifyContent: 'center'}}>
                            <Text style={{fontWeight: 'bold', color: 'grey'}}>Settings</Text>

                        </View>
                        <TouchableOpacity
                            style={{width: 56, height: 56, alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={require('../../assets/icon/ic_search_gray.png')}
                                   style={{height: 16, width: 18, resizeMode: 'contain', tintColor: 'grey'}}/>
                        </TouchableOpacity>
                    </View>
                </Surface>
            </View>

            <View style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                minHeight: 300,
                backgroundColor: '#FFF',
            }}>
                <View style={{
                    backgroundColor: '#ff2e93',
                    height: 70,
                    width: 70,
                    borderRadius: 700,
                    position: 'absolute',
                    right: 40,
                    top: -30,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image style={{width: 30, height: 30, tintColor: '#FFF'}}
                           source={require('../../assets/icon/pin.png')}/>
                </View>
                <View style={{
                    padding: 25,
                }}>
                    <Text style={{fontWeight: 'bold', fontSize: 16}}>Gotham Resto</Text>
                    <View style={{flexDirection: 'row', paddingVertical: 10}}>
                        {
                            star.map((x, y) => {
                                return (
                                    <Image key={y} style={{width: 20, height: 20, marginRight: 7}}
                                           source={require('../../assets/bottom/star.png')}/>
                                );
                            })
                        }
                        <Text style={{color: '#000', opacity: .5, fontWeight: 'bold', paddingLeft: 8}}>4,2</Text>
                    </View>
                    <Text style={{color: '#3a57f9', opacity: .74, fontWeight: 'bold'}}>21 minutes</Text>
                </View>
                <List img={require('../../assets/icon/pin.png')}/>
                <List img={require('../../assets/bottom/phone.png')} title={'+01 234 567 89'}/>
                <List img={require('../../assets/icon/clock.png')} title={'09.00 AM - 09.00 PM'}/>
            </View>
        </View>
    );
}

const List = ({img = require('../../assets/icon/pin.png'), title = '334 Gotham City, Metropolis'}) => {
    return (
        <View style={{flexDirection: 'row', height: 56, borderTopWidth: 0.5, alignItems: 'center'}}>
            <View style={{width: 70, height: 70, alignItems: 'center', justifyContent: 'center'}}>
                <Image style={{width: 20, height: 20, tintColor: '#3a57f9'}}
                       source={img}/>
            </View>
            <View style={{flex: 1}}>
                <Text style={{color: '#000', opacity: .5, fontWeight: 'bold'}}>{title}</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    img: {
        width: 28, height: 28,
    },
});
