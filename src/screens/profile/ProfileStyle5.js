import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import MaterialButton from "../../components/MaterialButton";
import MapView, {Marker} from 'react-native-maps';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ASPECT_RATIO = screenWidth / screenHeight;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0522;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

function ProfileStyle5() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Profile'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
            />
            <View style={{
                width: '100%',
                paddingVertical: 20,
                flexDirection: 'row',
                paddingLeft: 20,
                backgroundColor: '#f1f5f7',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/icon/ic_profile1.png')}
                       style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                <View style={{flex: 1, marginHorizontal: 20}}>
                    <Text style={{fontSize: 20, color: '#616161'}}>Michael Angelo</Text>
                    <View style={{flexDirection: 'row', flex: 1, marginVertical: 10}}>
                        <MaterialButton title='Follow Me'
                                        style={{flex: 1, backgroundColor: '#42bd41', marginTop: 5, marginRight: 5}}
                                        buttonPress={() => snackbarRef.current.ShowSnackBarFunction('follow me clicked')}/>
                        <MaterialButton title='Share'
                                        style={{flex: 1, backgroundColor: 'white', marginTop: 5, marginLeft: 5}}
                                        buttonPress={() => snackbarRef.current.ShowSnackBarFunction('share clicked')}/>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'row', backgroundColor: 'white', borderTopColor: '#e4e4e4', borderTopWidth: 0.5}}>
                <TouchableOpacity style={{
                    width: '33%',
                    height: '100%',
                    alignItems: 'center',
                }}>
                    <TabTitle title='359' subtitle='Stories'/>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                    <TabTitle title='10,289' subtitle='Followers'/>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                    <TabTitle title='4,317' subtitle='Followings'/>
                </TouchableOpacity>
            </View>
            <MapView
                // style={{width: 280, height: 150}}
                style={{width: screenWidth, height: screenHeight}}
                initialRegion={{
                    latitude: LATITUDE,
                    longitude: LONGITUDE,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}>
                <Marker key='123' coordinate={{latitude: 37.78825, longitude: -122.4324}} pinColor='blue'/>
            </MapView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function TabTitle({title, subtitle}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: '#616161'}}>{title}</Text>
            <Text style={{fontSize: 12, color: '#616161'}}>{subtitle}</Text>
        </View>
    );
}

export default ProfileStyle5;