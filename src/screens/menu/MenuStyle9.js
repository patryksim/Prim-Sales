import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import MaterialInput from "../../components/MaterialInput";
import DummyPage from "../../components/DummyPage";

const MENU_ITEM = [
    {id: '1', title: 'Dashboard', icon: require('../../assets/icon/ic_menu9_dashboard.png')},
    {id: '2', title: 'Explore', icon: require('../../assets/icon/ic_menu9_explore.png')},
    {id: '3', title: 'Profile', icon: require('../../assets/icon/ic_menu9_profile.png')},
    {id: '4', title: 'Messages', icon: require('../../assets/icon/ic_menu9_message.png')},
    {id: '5', title: 'Setting', icon: require('../../assets/icon/ic_menu9_setting.png')},
];

function MenuStyle9() {
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
                menuWidth={94}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}
                                                              onLogoutPress={() => onMenuPress('Logout')}
                                                              onSettingPress={() => onMenuPress('Setting')}/>}
                renderPage={() => <DummyPage withHeaderMenu={true} leftMenuRef={leftMenuRef}
                                             snackbarRef={snackbarRef}/>}
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
        <View style={{flex: 1, padding: 10, alignItems: 'center', backgroundColor: '#263238'}}>
            <View style={{flex: 1}}>
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
            <TouchableOpacity style={{padding: 10, marginBottom: 10}} onPress={onLogoutPress}>
                <Image source={require('../../assets/icon/ic_logout.png')}
                       style={{height: 18, width: 18, tintColor: 'red', resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

function ItemMenu({data, selected, onSelect}) {
    return (
        <TouchableOpacity onPress={() => onSelect(data.id, data.title)}
                          style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              marginTop: 20,
                              justifyContent: 'space-between',
                          }}>
            <View style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: selected ? '#448aff' : 'transparent'
            }}>
                <Image source={data.icon}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </View>
        </TouchableOpacity>
    );
}


export default MenuStyle9;