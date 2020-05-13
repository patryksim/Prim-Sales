import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import MaterialInput from "../../components/MaterialInput";
import DummyPage from "../../components/DummyPage";
import {storageImageUrl} from "../../tools/Helpers";

const MENU_ITEM = [
    {id: '1', title: 'Feed', notifCount: 32},
    {id: '2', title: 'Explore', notifCount: 0},
    {id: '3', title: 'Activity', notifCount: 0},
    {id: '4', title: 'Group', notifCount: 0},
    {id: '5', title: 'Photos', notifCount: 0},
    {id: '6', title: 'Videos', notifCount: 0},
    {id: '7', title: 'Setting', notifCount: 0},
];

function MenuStyle10() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);

    const onMenuPress = (title) => {
        snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        leftMenuRef.current.navigateMenu();
    };

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: 'gray'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <SwipeMenuLeft
                ref={leftMenuRef}
                menuWidth={300}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}/>}
                renderPage={() => <DummyPage withHeaderMenu={true} leftMenuRef={leftMenuRef}
                                             snackbarRef={snackbarRef}/>}
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
        <View style={{flex: 1, paddingVertical: 20, paddingLeft: 20, backgroundColor: '#263238'}}>
            <View style={{width: '100%', alignItems: 'center', paddingTop: 20}}>
                <Image source={{uri: storageImageUrl('menu', 'profile_pic_300.png')}}
                       style={{height: 85, width: 85, resizeMode: 'contain'}}/>
                <Text style={{fontSize: 27, color: 'white', marginTop: 20}}>Michael Angelo</Text>
                <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>Manhattan, NY</Text>
            </View>
            <FlatList
                data={MENU_ITEM}
                renderItem={({item}) => (
                    <ItemMenu
                        data={item}
                        selected={!!selected.get(item.id)}
                        onSelect={onSelect}
                    />
                )}
                keyExtractor={item => item.id}
                extraData={selected}
            />
        </View>
    );
}

function ItemMenu({data, selected, onSelect}) {
    return (
        <TouchableOpacity onPress={() => onSelect(data.id, data.title)}
                          style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              backgroundColor: selected ? '#448aff' : 'transparent',
                              padding: 15,
                              borderTopLeftRadius: 5,
                              borderBottomLeftRadius: 5,
                          }}>
            <Text style={{fontSize: 14, color: 'white', fontWeight: selected ? 'bold' : 'normal'}}>{data.title}</Text>
            <View style={{
                width: 26,
                height: 26,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                marginLeft: 10,
                backgroundColor: '#19252b',
                opacity: data.notifCount > 0 ? 1 : 0
            }}>
                <Text style={{fontSize: 14, color: 'white'}}>{data.notifCount}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default MenuStyle10;