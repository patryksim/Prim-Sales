import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MapView, {Marker, Polyline} from "react-native-maps";
import SwipeBackView from "../../components/SwipeBack";
import MapNavigation from "../../components/MapNavigation";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LATITUDE = 37.79025;
const LONGITUDE = -122.4224;
const LATITUDE_DELTA = 0.015;

const markerPosition = [
    {id: '1', latitude: 37.8006944, longitude: -122.4369776},
    {id: '2', latitude: 37.7791388, longitude: -122.4210772},
];

const polylinePosition = [
    {latitude: markerPosition[0].latitude, longitude: markerPosition[0].longitude},
    {latitude: 37.7998062, longitude: -122.4369776},
    {latitude: 37.8012419, longitude: -122.4246744},
    {latitude: 37.7791388, longitude: -122.4200772},
    {latitude: markerPosition[1].latitude, longitude: markerPosition[1].longitude},
];

function MapStyle7() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const [viewWidth, setViewWidth] = useState(screenWidth);
    const [viewHeight, setViewHeight] = useState(screenHeight);
    const [latDelta, setLatDelta] = useState(LATITUDE_DELTA);

    const MAP_WIDTH = viewWidth;
    const MAP_HEIGHT = viewHeight - 56 - 150;
    const ASPECT_RATIO = MAP_WIDTH / MAP_HEIGHT;
    const LONGITUDE_DELTA = latDelta * ASPECT_RATIO;

    return (
        <SwipeBackView onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}
                       style={{flex: 1, backgroundColor: '#f1f5f7'}} onLayout={(event) => {
            let {x, y, width, height} = event.nativeEvent.layout;
            setViewWidth(width);
            setViewHeight(height);
        }}>
            <HeaderMap/>
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
                {markerPosition.map((dt) => <MapMarker key={dt.id} lat={dt.latitude} lng={dt.longitude}/>)}
                <Polyline
                    coordinates={polylinePosition}
                    strokeColor="black"
                    strokeWidth={6}
                />
            </MapView>
            <MapNavigation style={{position: 'absolute', elevation: 10, right: 10, bottom: 170}}
                           zoomInPress={() => setLatDelta(latDelta / 2)}
                           zoomOutPress={() => setLatDelta(latDelta * 2)}
                           myLocationPress={() => snackbarRef.current.ShowSnackBarFunction('button my location clicked')}/>
            <ResumeItem snackbarRef={snackbarRef}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function HeaderMap() {
    return (
        <View style={{
            width: '100%',
            backgroundColor: '#2979ff',
        }}>
            <View style={{flexDirection: 'row', padding: 30}}>
                <Image source={require('../../assets/icon/ic_turn_right_big.png')}
                       style={{height: 42, width: 42, resizeMode: 'contain'}}/>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 12, color: 'white'}}>50 m turn right</Text>
                    <Text style={{fontSize: 24, color: 'white'}}>Arrowsmit Ave</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 17, backgroundColor: '#263238'}}>
                <Text style={{fontSize: 14}}>
                    <Text style={{color: '#78909c'}}>Current street</Text>
                    <Text style={{color: 'white'}}> Nelson Road</Text>
                </Text>
            </View>
        </View>
    );
}

function MyLocationMarker() {
    return (
        <Marker key='123' coordinate={{latitude: 37.7921731, longitude: -122.4228264}}>
            <View style={{
                width: 44,
                height: 44,
                borderRadius: 22,
                borderWidth: 2,
                borderColor: 'white',
                backgroundColor: '#2979ff',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={require('../../assets/icon/ic_near_me.png')}
                       style={{height: 20, width: 20, resizeMode: 'contain', transform: [{ rotate: '300deg'}]}}/>
            </View>
        </Marker>
    );
}

function MapMarker({lat, lng}) {
    return (
        <Marker coordinate={{latitude: lat, longitude: lng}}>
            <View style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 6,
                borderColor: '#448aff',
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center'
            }}/>
        </Marker>
    );
}

function ResumeItem({snackbarRef}) {
    return (
        <View style={{
            height: 75,
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexDirection: 'row'
        }}>
            <TouchableOpacity style={{padding: 20, alignItems: 'flex-end'}}>
                <Image source={require('../../assets/icon/ic_close.png')} style={{width: 17, height: 17}}/>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#212121'}}>12 min</Text>
                <Text style={{fontSize: 12, color: '#757575', marginTop: 5, marginBottom: 5}}>3.8 km • 10:37</Text>
            </View>
            <TouchableOpacity style={{padding: 10, marginRight: 15}}>
                <Image source={require('../../assets/icon/ic_home.png')} style={{height: 16, width: 18, tintColor: 'red', resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

export default MapStyle7;