import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MapView, {Marker} from "react-native-maps";
import MaterialInput from "../../components/MaterialInput";
import SwipeBackView from "../../components/SwipeBack";
import MapNavigation from "../../components/MapNavigation";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.05;

function MapStyle1() {
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
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
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
                <Marker key='123' coordinate={{latitude: 37.78825, longitude: -122.4324}}>
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
            </MapView>
            <BottomMenu button1Press={() => snackbarRef.current.ShowSnackBarFunction('button 1 clicked')}
                        button2Press={() => snackbarRef.current.ShowSnackBarFunction('button 2 clicked')}
                        button3Press={() => snackbarRef.current.ShowSnackBarFunction('button 3 clicked')}
                        button4Press={() => snackbarRef.current.ShowSnackBarFunction('button 4 clicked')}
                        button5Press={() => snackbarRef.current.ShowSnackBarFunction('button 5 clicked')}/>

            <MapNavigation style={{position: 'absolute', elevation: 10, left: 10, top: 85}}
                              zoomInPress={() => setLatDelta(latDelta / 2)}
                              zoomOutPress={() => setLatDelta(latDelta * 2)}
                              myLocationPress={() => snackbarRef.current.ShowSnackBarFunction('button my location clicked')}/>

            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function HeaderMap({searchPress, talkPress}) {
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
                <TouchableOpacity onPress={searchPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_search_gray.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Search places'/>
                <TouchableOpacity onPress={talkPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_mic.png')}
                           style={{height: 22, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function BottomMenu({button1Press, button2Press, button3Press, button4Press, button5Press}) {
    return (
        <View style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            right: 10,
            flexDirection: 'row',
            paddingVertical: 5,
            justifyContent: 'space-around',
            borderRadius: 3,
            shadowRadius: 3,
            alignItems: 'center',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            backgroundColor: 'white'
        }}>
            <MainButton image={require('../../assets/icon/map1_button1.png')} buttonPress={button1Press}/>
            <MainButton image={require('../../assets/icon/map1_button2.png')} buttonPress={button2Press}/>
            <MainButton image={require('../../assets/icon/map1_button3.png')} buttonPress={button3Press}/>
            <MainButton image={require('../../assets/icon/map1_button4.png')} buttonPress={button4Press}/>
            <MainButton image={require('../../assets/icon/map1_button5.png')} buttonPress={button5Press}/>
        </View>
    );
}

function MainButton({image, buttonPress}) {
    return (
        <TouchableOpacity onPress={buttonPress}
                          style={{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={image}
                   style={{height: 28, width: 28, resizeMode: 'contain'}}/>
        </TouchableOpacity>
    );
}

export default MapStyle1;