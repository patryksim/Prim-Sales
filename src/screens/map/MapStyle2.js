import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MapView, {Marker} from "react-native-maps";
import MaterialInput from "../../components/MaterialInput";
import SwipeBackView from "../../components/SwipeBack";
import StarBar from "../../components/StarBar";
import {storageImageUrl} from "../../tools/Helpers";
import MapNavigation from "../../components/MapNavigation";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.05;

const searchData = [
    {id: '1', title: 'Kennington Lane Cafe', address: '383 Kennington Lane Vauxhall, London, England (1.3 Km)', image: 'map_2_img_1.jpg'},
    {id: '2', title: 'Mimos Cafe Bar', address: '19 London Street | Paddington, London, England (1.9 Km)', image: 'map_2_img_2.jpg'}
];

const markerPosition = [
    {id: '1', lat: 37.7919422, lng: -122.4350607},
    {id: '2', lat: 37.7922921, lng: -122.4308393},
    {id: '3', lat: 37.7874647, lng: -122.4326111},
    {id: '4', lat: 37.8004063, lng: -122.4270608, image: require('../../assets/icon/map1_button2.png')},
    {id: '5', lat: 37.7967161, lng: -122.4373491, image: require('../../assets/icon/map1_button2.png')},
];

function MapStyle2() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const [viewWidth, setViewWidth] = useState(screenWidth);
    const [viewHeight, setViewHeight] = useState(screenHeight);
    const [latDelta, setLatDelta] = useState(LATITUDE_DELTA);

    const MAP_WIDTH = viewWidth;
    const MAP_HEIGHT = viewHeight - 56;
    const ASPECT_RATIO = MAP_WIDTH / MAP_HEIGHT;
    const LONGITUDE_DELTA = latDelta * ASPECT_RATIO;

    return (
        <SwipeBackView onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}
                       style={{flex: 1, backgroundColor: '#f1f5f7'}} onLayout={(event) => {
            let {x, y, width, height} = event.nativeEvent.layout;
            setViewWidth(width);
            setViewHeight(height);
        }}>
            <HeaderMap
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                talkPress={() => snackbarRef.current.ShowSnackBarFunction('talk clicked')}
            />
            <MapView
                style={{width: MAP_WIDTH, height: MAP_HEIGHT}}
                maxZoomLevel={15}
                region={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: latDelta,
                    longitudeDelta: LONGITUDE_DELTA,
                }}>
                <MyLocationMarker/>
                {markerPosition.map((dt) => <MapMarker key={dt.id} lat={dt.lat} lng={dt.lng} image={dt.image}/>)}
            </MapView>
            <View style={{position: 'absolute', elevation: 10, left: 0, bottom: 0, right: 0, backgroundColor: 'white'}}>
                {searchData.map((dt) => <ItemSearch key={dt.id} data={dt}/>)}
            </View>
            <MapNavigation style={{position: 'absolute', elevation: 10, left: 10, top: 85}}
                              zoomInPress={() => setLatDelta(latDelta / 2)}
                              zoomOutPress={() => setLatDelta(latDelta * 2)}
                              myLocationPress={() => snackbarRef.current.ShowSnackBarFunction('button my location clicked')}/>

            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function MyLocationMarker() {
    return (
        <Marker key='123' coordinate={{latitude: 37.79225, longitude: -122.4224}}>
            <View style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: '#2979ff',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={require('../../assets/icon/ic_near_me.png')}
                       style={{height: 20, width: 20, resizeMode: 'contain'}}/>
            </View>
        </Marker>
    );
}

function MapMarker({lat, lng, image}) {
    return (
        <Marker coordinate={{latitude: lat, longitude: lng}}>
            <View style={{
                width: image !== undefined ? 34 : 14,
                height: image !== undefined ? 34 : 14,
                borderRadius: image !== undefined ? 17 : 7,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: '#f4511e',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {image !== undefined && (
                    <Image source={require('../../assets/icon/map1_button2.png')}
                           style={{height: 20, width: 20, tintColor: 'white', resizeMode: 'contain'}}/>
                )}
            </View>
        </Marker>
    );
}

function HeaderMap({navPress, talkPress}) {
    return (
        <View style={{
            width: '100%',
            height: 65,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 8,
            backgroundColor: '#2979ff',
        }}>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                marginRight: 20,
                paddingRight: 15,
            }}>
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_chevron_left.png')}
                           style={{height: 18, width: 18, tintColor: 'gray', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Cafe'/>
                <TouchableOpacity onPress={talkPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_mic.png')}
                           style={{height: 22, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ItemSearch({data}) {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20, borderBottomWidth: 0.5, borderBottomColor: '#b0bec5'}}>
            <View style={{flex: 1, paddingRight: 10}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#212121'}}>{data.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <StarBar rating={4} containerStyle={{marginTop: 5, marginBottom: 5}}/>
                    <Text style={{marginLeft: 5, fontSize: 14, color: '#757575'}}> Cafe</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/icon/ic_near_me.png')}
                           style={{height: 16, width: 16, tintColor: 'gray', resizeMode: 'contain'}}/>
                    <Text style={{marginLeft: 5, fontSize: 12, color: '#757575'}}>{data.address}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 4}}>
                    <Image source={require('../../assets/icon/ic_history.png')}
                           style={{height: 12, width: 12, tintColor: 'gray', resizeMode: 'contain'}}/>
                    <Text style={{marginLeft: 9, fontSize: 12, color: '#757575'}}>Open Until 20.00 PM</Text>
                </View>
            </View>
            <Image source={{uri: storageImageUrl('map', data.image)}}
                   style={{height: 85, width: 100, resizeMode: 'cover'}}/>
        </View>
    );
}

export default MapStyle2;