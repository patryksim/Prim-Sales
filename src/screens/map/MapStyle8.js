import React, {useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialInput from "../../components/MaterialInput";
import SwipeBackView from "../../components/SwipeBack";

const DATA = [
    {id: '1', title: '12 min', detail: '3.8 km • 10:37', icon: undefined},
    {id: '2', title: 'My Location', detail: '500 m', icon: require('../../assets/icon/ic_gps_blue.png')},
    {id: '3', title: 'Turn right onto Nelson Road', detail: '200 m', icon: require('../../assets/icon/ic_turn_right.png')},
    {id: '4', title: 'Turn left onto Lambert Road', detail: '130 m', icon: require('../../assets/icon/ic_turn_left.png')},
    {id: '5', title: 'Turn right onto St. Johns Road', detail: '130 m', icon: require('../../assets/icon/ic_turn_right.png')},
    {id: '6', title: 'You are arrived at Arrowsmith Ave', detail: '125 m', icon: require('../../assets/icon/ic_gps_blue.png')},
];

function MapStyle8() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <SwipeBackView onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}
                       style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderMap
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                talkPress={() => snackbarRef.current.ShowSnackBarFunction('talk clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
            />
            <FlatList
                data={DATA}
                renderItem={({item}) => <ItemData key={item.id} data={item}/>}
                keyExtractor={item => item.id}
            />
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

function ItemData({data}) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomColor: '#b0bec5', borderBottomWidth: 0.5}}>
            {data.icon !== undefined && (
                <Image source={data.icon}
                       style={{height: 22, width: 22, resizeMode: 'contain'}}/>
            )}
            <View style={{marginLeft: data.icon === undefined ? 0 : 20}}>
                <Text style={{fontSize: data.icon === undefined ? 20 : 14, fontWeight: data.icon === undefined ? 'bold' : 'normal', color: '#263238'}}>{data.title}</Text>
                <Text style={{fontSize: 14, color: '#757575', marginTop: 4}}>{data.detail}</Text>
            </View>
        </View>
    );
}

export default MapStyle8;