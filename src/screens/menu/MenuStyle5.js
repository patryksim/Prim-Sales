import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import DummyPage from "../../components/DummyPage";

const MENU_ITEM = [
    {id: '1', title: 'Explore', notifCount: 0},
    {id: '2', title: 'Timeline', notifCount: 0},
    {id: '3', title: 'Photos', notifCount: 0},
    {id: '4', title: 'Videos', notifCount: 0},
    {id: '5', title: 'Messages', notifCount: 2},
    {id: '6', title: 'Setting', notifCount: 0},
    {id: '7', title: 'Logout', notifCount: 0},
];

function MenuStyle5() {
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
        <View style={{flex: 1, paddingVertical: 20, paddingLeft: 20, backgroundColor: '#f1f5f7'}}>
            <FlatList
                data={MENU_ITEM}
                renderItem={({item}) => (
                    <ItemMenu
                        item={item}
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

function ItemMenu({item, selected, onSelect}) {
    return (
        <TouchableOpacity onPress={() => onSelect(item.id, item.title)}
                          style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              paddingVertical: 20,
                              paddingHorizontal: 20
                          }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 20, color: '#616161'}}>{item.title}</Text>
                <View style={{
                    width: 26,
                    height: 26,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 13,
                    marginLeft: 10,
                    backgroundColor: '#2979ff',
                    opacity: item.notifCount > 0 ? 1 : 0
                }}>
                    <Text style={{fontSize: 14, color: 'white'}}>{item.notifCount}</Text>
                </View>
            </View>
            <Image source={require('../../assets/icon/ic_chevron_right.png')}
                   style={{height: 12, width: 12, resizeMode: 'contain'}}/>
        </TouchableOpacity>
    );
}


export default MenuStyle5;