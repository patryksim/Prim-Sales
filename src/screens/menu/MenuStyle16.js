import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import SwipeBackView from "../../components/SwipeBack";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import DummyPage from "../../components/DummyPage";
import {storageImageUrl} from "../../tools/Helpers";
import DrawerMenuLeft from "../../components/DrawerMenuLeft";

const DATA = [
    {
        id: '1',
        title: 'Explore',
        notifCount: 32,
        icon: require('../../assets/icon/ic_menu13_explore.png')
    },
    {
        id: '2',
        title: 'Messages',
        notifCount: 0,
        icon: require('../../assets/icon/ic_menu13_message.png')
    },
    {
        id: '3',
        title: 'Photos',
        notifCount: 0,
        icon: require('../../assets/icon/ic_menu13_photos.png')
    },
    {
        id: '4',
        title: 'Videos',
        notifCount: 0,
        icon: require('../../assets/icon/ic_menu13_videos.png')
    },
    {
        id: '5',
        title: 'Group',
        notifCount: 0,
        icon: require('../../assets/icon/ic_menu13_group.png')
    },
    {
        id: '6',
        title: 'Settings',
        notifCount: 0,
        icon: require('../../assets/icon/ic_menu13_setting.png')
    },
];

const screenWidth = Dimensions.get('window').width;

function MenuStyle16() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);

    const onMenuPress = (title) => {
        snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        leftMenuRef.current.navigateMenu();
    };

    const [selected, setSelected] = useState(new Map());

    const onSelect = (id, title) => {
        const newSelected = new Map();
        newSelected.set(id, !selected.get(id));
        setSelected(newSelected);
        onMenuPress(title);
    };

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: 'gray'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <DrawerMenuLeft
                ref={leftMenuRef}
                style={{marginTop: 56}}
                menuWidth={screenWidth}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress} selected={selected} onSelect={onSelect}/>}
                renderPage={(isMenuOpen) => <MainContent navPress={() => leftMenuRef.current.navigateMenu()} isHome={!isMenuOpen} snackbarRef={snackbarRef}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function MainContent({navPress, isHome, snackbarRef}) {
    return (
        <View style={{flex: 1}}>
            <HeaderThreeButton
                title='Menu'
                isHome={isHome}
                navPress={navPress}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
            />
            <DummyPage/>
        </View>
    );
}

function LeftMenuContainer({onMenuPress, selected, onSelect}) {
    return (
        <View style={{width: screenWidth, height: '100%', backgroundColor: '#263238'}}>
            <View style={{width: '100%', height: 120, alignItems: 'center', backgroundColor: 'white'}}>
                <Text style={{fontSize: 27, color: '#616161', marginTop: 20}}>Michael Angelo</Text>
                <Text style={{fontSize: 14, color: '#616161', marginTop: 5}}>Manhattan, NY</Text>
            </View>
            <View style={{width: '100%', alignItems: 'center', marginTop: -34, marginBottom: -10}}>
                <Image source={{uri: storageImageUrl('menu', 'profile_pic_300.png')}}
                       style={{height: 68, width: 68, resizeMode: 'contain'}}/>
                <View style={{width: 100, alignItems: 'flex-end'}}>
                    <View style={{
                        width: 20,
                        height: 20,
                        marginRight: 10,
                        marginTop: -67,
                        marginBottom: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                        marginLeft: 10,
                        backgroundColor: '#2979ff',
                    }}>
                        <Text style={{fontSize: 14, color: 'white'}}>2</Text>
                    </View>
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
            paddingHorizontal: 25,
            paddingVertical: 20,
            backgroundColor: selected ? '#1e2b31' : 'transparent'
        }}
                          onPress={() => onSelect(data.id, data.title)}>
            <View style={{flexDirection: 'row'}}>
                <Image source={data.icon} style={{height: 20, width: 20, marginHorizontal: 15, resizeMode: 'contain'}}/>
                <Text style={{fontSize: 14, color: 'white'}}>{data.title}</Text>
            </View>
            <View style={{
                width: 21,
                height: 21,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                marginLeft: 10,
                backgroundColor: '#1f2c32',
                opacity: data.notifCount > 0 ? 1 : 0
            }}>
                <Text style={{fontSize: 12, color: 'white'}}>{data.notifCount}</Text>
            </View>
        </TouchableOpacity>
    );

}

export default MenuStyle16;