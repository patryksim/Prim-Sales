import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MapView, {Marker, Polyline} from "react-native-maps";
import MaterialInput from "../../components/MaterialInput";
import SwipeBackView from "../../components/SwipeBack";
import MapNavigation from "../../components/MapNavigation";
import MaterialButton from "../../components/MaterialButton";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LATITUDE = 37.78225;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.05;

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

function MapStyle6() {
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
            <HeaderMap
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                talkPress={() => snackbarRef.current.ShowSnackBarFunction('talk clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
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
                {markerPosition.map((dt) => <MapMarker key={dt.id} lat={dt.latitude} lng={dt.longitude}/>)}
                <Polyline
                    coordinates={polylinePosition}
                    strokeColor="#2979ff"
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

function HeaderMap({navPress, talkPress, morePress}) {
    const [selected, setSelected] = useState(1);
    return (
        <View style={{
            width: '100%',
            backgroundColor: '#2979ff',
        }}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={navPress} style={{padding: 10, marginTop: 12}}>
                    <Image source={require('../../assets/icon/ic_chevron_left.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <View style={{flex: 1, paddingVertical: 10}}>
                    <View style={{
                        width: '95%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        marginHorizontal: 5,
                    }}>
                        <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                            <Image source={require('../../assets/icon/ic_gps_gray.png')}
                                   style={{height: 22, width: 22, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                        <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0}
                                       placeholder='14 Nelson Street, London'/>
                    </View>
                    <View style={{
                        width: '95%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        marginTop: 10,
                        marginHorizontal: 5,
                    }}>
                        <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                            <Image source={require('../../assets/icon/ic_location_gray.png')}
                                   style={{height: 22, width: 22, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                        <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Mimos Cafe Bar'/>
                    </View>
                </View>
                <TouchableOpacity onPress={morePress} style={{padding: 18, marginTop: 4}}>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{height: 20, width: 4, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 10, marginBottom: 5}}>
                <NavigationButton text='23 min' icon={require('../../assets/icon/ic_car.png')}
                                  isSelected={selected === 1}
                                  onPress={() => setSelected(1)}/>
                <NavigationButton text='44 min' icon={require('../../assets/icon/ic_walk.png')}
                                  isSelected={selected === 2}
                                  onPress={() => setSelected(2)}/>
                <NavigationButton text='15 min' icon={require('../../assets/icon/ic_bus.png')}
                                  isSelected={selected === 3}
                                  onPress={() => setSelected(3)}/>
            </View>
        </View>
    );
}

function NavigationButton({icon, text, onPress, isSelected}) {
    return (
        <TouchableOpacity onPress={onPress}
                          style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              backgroundColor: isSelected ? 'white' : undefined,
                              paddingVertical: 5,
                              paddingHorizontal: 15,
                              borderRadius: 20
                          }}>
            <Image source={icon}
                   style={{height: 22, width: 22, tintColor: isSelected ? '#2979ff' : 'white', resizeMode: 'contain'}}/>
            <Text style={{fontSize: 12, color: isSelected ? '#2979ff' : 'white', marginLeft: 10}}>{text}</Text>
        </TouchableOpacity>
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
            height: 150,
            position: 'absolute',
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'flex-end'
        }}>
            <Text style={{width: screenWidth - 30, fontSize: 16, fontWeight: 'bold', color: '#212121'}}>23 min (1.9 km)</Text>
            <Text style={{width: screenWidth - 30, fontSize: 12, color: '#757575', marginTop: 10, marginBottom: 5}}>Fastest route with traffic jam</Text>
            <MaterialButton title='START NAVIGATION'
                            style={{
                                width: screenWidth - 30,
                                height: 50,
                                marginBottom: 15,
                                marginTop: 10,
                                backgroundColor: '#ff3d00'
                            }}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('start navigation clicked')}/>
        </View>
    );
}

export default MapStyle6;