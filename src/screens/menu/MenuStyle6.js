import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import DummyPage from "../../components/DummyPage";
import {storageImageUrl} from "../../tools/Helpers";

const MENU_ITEM = [
    {
        id: '1',
        title: 'Stories',
        subMenu: [{id: '1a', title: 'Popular'}, {id: '1b', title: 'Recent'}, {id: '1c', title: 'Favorite'}]
    },
    {id: '2', title: 'Feed', subMenu: []},
    {id: '3', title: 'Messages', subMenu: []},
    {id: '4', title: 'Profile', subMenu: []},
];

function MenuStyle6() {
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
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}
                                                              onLogoutPress={() => onMenuPress('Logout')}
                                                              onSettingPress={() => onMenuPress('Setting')}/>}
                renderPage={() => <DummyPage withHeaderMenu={true} leftMenuRef={leftMenuRef} snackbarRef={snackbarRef}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function LeftMenuContainer({onMenuPress, onLogoutPress, onSettingPress}) {
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
        <View style={{flex: 1, backgroundColor: '#8e24aa'}}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <ImageBackground source={{uri: storageImageUrl('menu', 'menu_6_480.jpg')}} style={{height: 160, width: '100%', alignItems: 'center', backgroundColor: 'gray'}}>
                    <Text style={{fontSize: 27, color: 'white', marginTop: 30}}>Michael Angelo</Text>
                    <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>Manhattan, NY</Text>
                </ImageBackground>
                <View style={{width: 86, height: 86, marginTop: -43, borderRadius: 43, backgroundColor: 'blue'}}>
                    <Image source={{uri: storageImageUrl('menu', 'profile_pic_300.png')}}
                           style={{height: '100%', width: '100%', resizeMode: 'contain'}}/>
                </View>
                <View style={{width: '100%', paddingHorizontal: 20}}>
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
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
            }}>
                <TouchableOpacity style={{padding: 10}} onPress={onLogoutPress}>
                    <Image source={require('../../assets/icon/ic_logout.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 10}} onPress={onSettingPress}>
                    <Image source={require('../../assets/icon/ic_setting.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ItemMenu({item, selected, onSelect}) {
    const [isSubMenuOpen, setSubmenu] = useState(true);
    if (item.subMenu.length > 0) {
        let subMenuItem = [];
        item.subMenu.map((dt) => {
            subMenuItem.push(
                <TouchableOpacity key={dt.id} onPress={() => onSelect(dt.id, dt.title)}
                                  style={{
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      paddingHorizontal: 20,
                                      paddingVertical: 5,
                                  }}>
                    <Text style={{fontSize: 14, color: 'white'}}>{dt.title}</Text>
                </TouchableOpacity>
            )
        });
        return (
            <View>
                <TouchableOpacity onPress={() => setSubmenu(!isSubMenuOpen)} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 20
                }}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>{item.title}</Text>
                </TouchableOpacity>
                {isSubMenuOpen && subMenuItem}
            </View>
        );
    } else {
        return (
            <TouchableOpacity onPress={() => onSelect(item.id, item.title)}
                              style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  padding: 20
                              }}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>{item.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default MenuStyle6;