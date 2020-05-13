import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";

const DATA = [
    {id: '1', title: 'Home', detail: '3354 Hylton Road Park', icon: require('../../assets/icon/ic_place_home.png'), color: '#00c853'},
    {id: '2', title: 'Work', detail: 'University of Worcester Arena', icon: require('../../assets/icon/ic_place_work.png'), color: '#8e24aa'},
    {id: '3',title: 'Sainsbury’s Supermarket',detail: '4486 St Johns Road', icon: require('../../assets/icon/ic_location_gray.png'), color: 'gray'},
];

function MapStyle9() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <SwipeBackView onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}
                       style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderMap
                title='My Places'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                addPress={() => snackbarRef.current.ShowSnackBarFunction('add clicked')}
            />
            <FlatList
                data={DATA}
                renderItem={({item}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function HeaderMap({navPress, title, addPress}) {

    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: '#2979ff',
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
        }}>
            <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_chevron_left.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <Text style={{flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white'}}>{title}</Text>
            <TouchableOpacity onPress={addPress} style={{padding: 18}}>
                <Image source={require('../../assets/icon/ic_plus_white.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

function ItemData({data}) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 20}}>
            <View style={{
                width: 36,
                height: 36,
                borderRadius: 18,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: data.color
            }}>
                <Image source={data.icon}
                       style={{height: 22, width: 22, resizeMode: 'contain', tintColor: 'white'}}/>
            </View>
            <View style={{flex: 1, marginLeft: 20}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#263238'}}>{data.title}</Text>
                <Text style={{fontSize: 14, color: '#757575', marginTop: 4}}>{data.detail}</Text>
            </View>
            <TouchableOpacity style={{padding: 18}}>
                <Image source={require('../../assets/icon/ic_more.png')}
                       style={{height: 20, width: 4, tintColor: '#bdbdbd', resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

export default MapStyle9;