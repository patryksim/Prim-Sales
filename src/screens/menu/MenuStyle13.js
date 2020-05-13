import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import SwipeBackView from "../../components/SwipeBack";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import DummyPage from "../../components/DummyPage";
import MaterialInput from "../../components/MaterialInput";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";

const DATA = [
    {
        id: '1',
        title: 'Explore',
        notifCount: 32,
        readStatus: true,
        icon: require('../../assets/icon/ic_menu13_explore.png')
    },
    {
        id: '2',
        title: 'Messages',
        notifCount: 2,
        readStatus: false,
        icon: require('../../assets/icon/ic_menu13_message.png')
    },
    {
        id: '3',
        title: 'Photos',
        notifCount: 0,
        readStatus: true,
        icon: require('../../assets/icon/ic_menu13_photos.png')
    },
    {
        id: '4',
        title: 'Videos',
        notifCount: 0,
        readStatus: true,
        icon: require('../../assets/icon/ic_menu13_videos.png')
    },
    {
        id: '5',
        title: 'Group',
        notifCount: 0,
        readStatus: true,
        icon: require('../../assets/icon/ic_menu13_group.png')
    },
    {
        id: '6',
        title: 'Settings',
        notifCount: 0,
        readStatus: true,
        icon: require('../../assets/icon/ic_menu13_setting.png')
    },
];

function MenuStyle13() {
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
                menuWidth={300}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}/>}
                renderPage={() => <DummyPage/>}
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
        <View style={{flex: 1, paddingTop: 15, alignItems: 'center', backgroundColor: '#263238'}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                marginBottom: 20,
                marginHorizontal: 20,
                paddingRight: 15,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Search'/>
                <Image source={require('../../assets/icon/ic_search_gray.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </View>
            <View style={{width: '100%'}}>
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
                              paddingVertical: 22,
                              paddingHorizontal: 30,
                              backgroundColor: selected ? '#1f2c32' : 'transparent'
                          }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={data.icon}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                <Text style={{fontSize: 14, color: 'white', fontWeight: selected ? 'bold' : 'normal', marginLeft: 15}}>{data.title}</Text>
            </View>
            <View style={{
                width: 21,
                height: 21,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: data.readStatus ? 4 : 13,
                marginLeft: 10,
                backgroundColor: data.readStatus ? '#1f2c32' : '#2979ff',
                opacity: data.notifCount > 0 ? 1 : 0
            }}>
                <Text style={{fontSize: 12, color: 'white'}}>{data.notifCount}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MenuStyle13;