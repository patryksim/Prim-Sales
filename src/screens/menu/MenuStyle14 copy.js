import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import DummyPage from "../../components/DummyPage";
import {storageImageUrl} from "../../tools/Helpers";

const MENU_ITEM = [
    {id: '1', title: 'Feed', notifCount: 32},
    {id: '2', title: 'Explore', notifCount: 0},
    {id: '3', title: 'Activity', notifCount: 0},
    {id: '4', title: 'Group', notifCount: 0},
    {id: '5', title: 'Setting', notifCount: 0},
];

function MenuStyle14() {
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
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                padding: 10,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={{uri: storageImageUrl('menu', 'profile_pic_300.png')}}
                       style={{height: 50, width: 50, resizeMode: 'contain', marginRight: 20}}/>
                <View>
                    <Text style={{fontSize: 16, color: '#616161'}}>Michael Hendley</Text>
                    <Text style={{fontSize: 12, color: '#616161'}}>Manhattan, NY</Text>
                </View>
            </View>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingVertical: 40
            }}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 27, color: '#8c8c8c'}}>56</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c'}}>Photos</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 27, color: '#8c8c8c'}}>14</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c'}}>Stories</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 27, color: '#8c8c8c'}}>136</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c'}}>Friends</Text>
                </View>
            </View>
            <View style={{flex: 1, width: '100%', marginTop: 20}}>
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
        </View>
    );
}

function ItemMenu({data, selected, onSelect}) {
    return (
        <TouchableOpacity onPress={() => onSelect(data.id, data.title)}
                          style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              backgroundColor: selected ? '#e9e9e9' : 'transparent',
                              borderTopColor: '#e0e0e0',
                              borderTopWidth: 0.5,
                              padding: 15,
                              borderTopLeftRadius: 5,
                              borderBottomLeftRadius: 5,
                          }}>
            <Text style={{fontSize: 14, fontWeight: selected ? 'bold' : 'normal'}}>{data.title}</Text>
            <View style={{
                width: 22,
                height: 22,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                marginLeft: 10,
                backgroundColor: '#448aff',
                opacity: data.notifCount > 0 ? 1 : 0
            }}>
                <Text style={{fontSize: 12, color: 'white'}}>{data.notifCount}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default MenuStyle14;