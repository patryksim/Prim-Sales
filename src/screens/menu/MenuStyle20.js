import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import SwipeBackView from "../../components/SwipeBack";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import DummyPage from "../../components/DummyPage";
import MaterialInput from "../../components/MaterialInput";
import HeaderOneButton from "../../components/HeaderOneButton";
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

function MenuStyle20() {
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
                renderPage={(isMenuOpen) => <MainContent navPress={() => leftMenuRef.current.navigateMenu()} isHome={!isMenuOpen}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function MainContent({navPress, isHome}) {
    return (
        <View style={{flex: 1}}>
            <HeaderOneButton bgColor='#8e24aa' title='Menu' navPress={navPress} isHome={isHome} shadow={false}/>
            <DummyPage/>
        </View>
    );
}

function LeftMenuContainer({onMenuPress, selected, onSelect}) {
    return (
        <View style={{width: screenWidth, height: '100%', paddingBottom: 56, backgroundColor: '#263238'}}>
            <View style={{padding: 10, alignItems: 'center', backgroundColor: '#8e24aa', marginBottom: 50}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        paddingRight: 15,
                    }}>
                        <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0}
                                       placeholder='Search'/>
                        <Image source={require('../../assets/icon/ic_search_gray.png')}
                               style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                    </View>
                </View>
            </View>
            <View style={{flex: 1}}>
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
            <TouchableOpacity style={{
                height: 55,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                backgroundColor: '#1f2c32'
            }} onPress={() => onMenuPress('Logout')}>
                <Image source={require('../../assets/icon/ic_logout.png')}
                       style={{height: 18, width: 18, tintColor: 'red', resizeMode: 'contain'}}/>
                <Text style={{color: 'white', marginLeft: 10}}>Logout</Text>
            </TouchableOpacity>
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

export default MenuStyle20;