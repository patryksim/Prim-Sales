import React, {useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialInput from "../../components/MaterialInput";
import SwipeBackView from "../../components/SwipeBack";
import StarBar from "../../components/StarBar";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', title: 'Kennington Lane Cafe', address: '383 Kennington Lane Vauxhall, London, England (1.3 Km)', image: 'map_2_img_1.jpg'},
    {id: '2', title: 'Mimos Cafe Bar', address: '19 London Street | Paddington, London, England (1.9 Km)', image: 'map_2_img_2.jpg'},
    {id: '3', title: 'St Johns Cafe', address: '19 London Street | Paddington, London, England (1.9 Km)', image: 'map_10_img_1.jpg'},
    {id: '4', title: 'Kennington Lane Cafe', address: '383 Kennington Lane Vauxhall, London, England (1.3 Km)', image: 'map_2_img_1.jpg'},
    {id: '5', title: 'Mimos Cafe Bar', address: '19 London Street | Paddington, London, England (1.9 Km)', image: 'map_2_img_2.jpg'},
];

function MapStyle10() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <SwipeBackView onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}
                       style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderMap
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                talkPress={() => snackbarRef.current.ShowSnackBarFunction('talk clicked')}
            />
            <FlatList
                data={DATA}
                renderItem={({item}) => <ItemSearch data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function HeaderMap({navPress, talkPress}) {
    const [selected, setSelected] = useState(0);
    return (
        <View style={{
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#2979ff',
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                paddingRight: 10,
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
            <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 12}}>
                <NavigationButton text='Near me' isSelected={selected === 1} onPress={() => setSelected(1)}/>
                <NavigationButton text='Open 24 hours' isSelected={selected === 2} onPress={() => setSelected(2)}/>
                <NavigationButton text='Budget' isSelected={selected === 3} onPress={() => setSelected(3)}/>
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
                              backgroundColor: isSelected ? 'white' : '#2962ff',
                              paddingVertical: 8,
                              paddingHorizontal: 15,
                              borderRadius: 20
                          }}>
            <Text style={{fontSize: 12, color: isSelected ? '#2979ff' : 'white', marginLeft: 10}}>{text}</Text>
        </TouchableOpacity>
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

export default MapStyle10;