import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import MaterialInput from "../../components/MaterialInput";
import DummyPage from "../../components/DummyPage";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', title: 'Feed'},
    {id: '2', title: 'Explore'},
    {id: '3', title: 'Photos'},
    {id: '4', title: 'Videos'},
    {id: '5', title: 'Messages'},
];

function MenuStyle19() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);

    const onMenuPress = (title) => {
        snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        leftMenuRef.current.navigateMenu();
    };

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: 'gray'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <SwipeMenuLeft
                ref={leftMenuRef}
                menuWidth={300}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}/>}
                renderPage={() => <DummyPage withHeaderMenu={true} leftMenuRef={leftMenuRef} snackbarRef={snackbarRef}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function LeftMenuContainer({onMenuPress}) {
    const [selected, setSelected] = useState(new Map());

    const onSelect = useCallback(
        (id, title) => {
            const newSelected = new Map();
            newSelected.set(id, !selected.get(id));
            setSelected(newSelected);
            onMenuPress(title);
        },
        [selected],
    );

    return (
        <View style={{flex: 1, paddingBottom: 20, backgroundColor: '#f1f5f7'}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                marginBottom: 50,
                padding: 10,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={{uri: storageImageUrl('menu', 'profile_pic_300.png')}}
                       style={{height: 50, width: 50, resizeMode: 'contain', marginRight: 20}}/>
                <View>
                    <Text style={{fontSize: 16, color: '#616161'}}>James Richardson</Text>
                    <Text style={{fontSize: 12, color: '#616161'}}>San Fransisco, CA</Text>
                </View>
            </View>
            <FlatList
                data={DATA}
                renderItem={({item}) => <ItemMenu
                    data={item}
                    onMenuPress={onMenuPress}
                    selected={!!selected.get(item.id)}
                    onSelect={onSelect}
                />}
                keyExtractor={item => item.id}
            />
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginBottom: 10,
            }}>
                <TouchableOpacity style={{padding: 10}} onPress={() => onMenuPress('Setting')}>
                    <Image source={require('../../assets/icon/ic_setting.png')}
                           style={{height: 18, width: 18, tintColor: 'black', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#448aff'
                }}
                                  onPress={() => onMenuPress('Profile')}>
                    <Image source={require('../../assets/icon/ic_menu9_profile.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 10}} onPress={() => onMenuPress('Logout')}>
                    <Image source={require('../../assets/icon/ic_logout.png')}
                           style={{height: 18, width: 18, tintColor: 'red', resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ItemMenu({data, selected, onSelect}) {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 35,
            paddingVertical: 25,
        }}
                          onPress={() => onSelect(data.id, data.title)}>
            <Text style={{fontSize: 20, color: '#263238'}}>{data.title}</Text>
            <Image source={require('../../assets/icon/ic_chevron_right.png')}
                   style={{height: 15, width: 15, tintColor: 'black', resizeMode: 'contain'}}/>
        </TouchableOpacity>
    );

}


export default MenuStyle19;