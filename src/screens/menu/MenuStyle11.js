import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import MaterialInput from "../../components/MaterialInput";
import DummyPage from "../../components/DummyPage";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const MENU_ITEM = [
    {id: '1', title: 'Dashboard', icon: require('../../assets/icon/ic_menu9_dashboard.png')},
    {id: '2', title: 'Explore', icon: require('../../assets/icon/ic_menu9_explore.png')},
    {id: '3', title: 'Profile', icon: require('../../assets/icon/ic_menu9_profile.png')},
    {id: '4', title: 'Messages', icon: require('../../assets/icon/ic_menu9_message.png')},
    {id: '5', title: 'Setting', icon: require('../../assets/icon/ic_menu9_setting.png')},
];

function MenuStyle11() {
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
            <HeaderThreeButton
                title='Menu'
                isHome={true}
                navPress={() => leftMenuRef.current.navigateMenu()}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
            />
            <SwipeMenuLeft
                ref={leftMenuRef}
                menuWidth={94}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}
                                                              onLogoutPress={() => onMenuPress('Logout')}
                                                              onSettingPress={() => onMenuPress('Setting')}/>}
                renderPage={() => <DummyPage/>}
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
        <View style={{flex: 1, padding: 10, alignItems: 'center', backgroundColor: '#f1f5f7'}}>
            <View style={{flex: 1, marginBottom: 10}}>
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
                <TouchableOpacity onPress={onLogoutPress}
                                  style={{
                                      width: 60,
                                      height: 60,
                                      margin: 3,
                                      borderRadius: 30,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      backgroundColor: '#ff1744',
                                      elevation: 3,
                                      shadowOffset: {width: 0, height: 2},
                                      shadowOpacity: 0.3
                                  }}>
                    <Image source={require('../../assets/icon/ic_logout.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
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
                              marginTop: 20,
                              justifyContent: 'space-between',
                          }}>
            <View style={{
                width: 60,
                height: 60,
                margin: 3,
                borderRadius: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: selected ? '#448aff' : 'white',
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={data.icon}
                       style={{
                           height: 18,
                           width: 18,
                           tintColor: selected ? 'white' : '#263238',
                           resizeMode: 'contain'
                       }}/>
            </View>
        </TouchableOpacity>
    );
}


export default MenuStyle11;