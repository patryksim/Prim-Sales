import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import SwipeBackView from "../../components/SwipeBack";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import DummyPage from "../../components/DummyPage";
import DrawerMenuLeft from "../../components/DrawerMenuLeft";

const DATA = [
    {id: '1', title: 'Profile', bgColor: '#ff5722', icon: require('../../assets/icon/ic_menu4_profile.png')},
    {id: '2', title: 'Messages', bgColor: '#00bfa5', icon: require('../../assets/icon/ic_menu4_message.png')},
    {id: '3', title: 'Settings', bgColor: '#7cb342', icon: require('../../assets/icon/ic_menu4_setting.png')},
    {id: '4', title: 'Group', bgColor: '#448aff', icon: require('../../assets/icon/ic_menu4_group.png')},
    {id: '5', title: 'Photos', bgColor: '#fbc02d', icon: require('../../assets/icon/ic_menu4_photos.png')},
    {id: '6', title: 'Videos', bgColor: '#d81b60', icon: require('../../assets/icon/ic_menu4_videos.png')},
    {id: '7', title: 'Logout', bgColor: '#d81b60', icon: require('../../assets/icon/ic_menu4_logout.png')},
];

const screenWidth = Dimensions.get('window').width;

function MenuStyle4() {
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
                renderPage={() => <MainContent navPress={() => leftMenuRef.current.navigateMenu()} snackbarRef={snackbarRef}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function MainContent({navPress, snackbarRef}) {
    return (
        <View style={{flex: 1}}>
            <HeaderThreeButton
                title='Menu'
                isHome={true}
                navPress={navPress}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#263238'
            />
            <DummyPage/>
        </View>
    );
}

function LeftMenuContainer({onMenuPress, selected, onSelect}) {
    return (
        <View style={{width: screenWidth, height: '100%', paddingTop: 20, backgroundColor: '#263238'}}>
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
            paddingLeft: 20,
            paddingVertical: 22,
            backgroundColor: selected ? '#1e2b31' : 'transparent'
        }}
                          onPress={() => onSelect(data.id, data.title)}>
            <Image source={data.icon} style={{height: 20, width: 20, marginHorizontal: 15, resizeMode: 'contain'}}/>
            <Text style={{fontSize: 14, color: 'white'}}>{data.title}</Text>
        </TouchableOpacity>
    );

}

export default MenuStyle4;