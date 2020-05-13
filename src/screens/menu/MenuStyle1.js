import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import SwipeBackView from "../../components/SwipeBack";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import DummyPage from "../../components/DummyPage";
import DrawerMenuLeft from "../../components/DrawerMenuLeft";

const screenWidth = Dimensions.get('window').width;

const DATA = [
    {id: '1', title: 'Photos', bgColor: '#ff5722', icon: require('../../assets/icon/ic_menu1_photos.png')},
    {id: '2', title: 'Videos', bgColor: '#00bfa5', icon: require('../../assets/icon/ic_menu1_videos.png')},
    {id: '3', title: 'Messages', bgColor: '#7cb342', icon: require('../../assets/icon/ic_menu1_messages.png')},
    {id: '4', title: 'Settings', bgColor: '#448aff', icon: require('../../assets/icon/ic_menu1_settings.png')},
    {id: '5', title: 'Friends', bgColor: '#fbc02d', icon: require('../../assets/icon/ic_menu1_friends.png')},
    {id: '6', title: 'Notifications', bgColor: '#d81b60', icon: require('../../assets/icon/ic_menu1_notifs.png')},
];

function MenuStyle1() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);

    const onMenuPress = (title) => {
        snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        leftMenuRef.current.navigateMenu();
    };

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: 'gray'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <DrawerMenuLeft
                ref={leftMenuRef}
                style={{marginTop: 56}}
                menuWidth={screenWidth}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}/>}
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
                bgColor='#8e24aa'
            />
            <DummyPage/>
        </View>
    );
}

function LeftMenuContainer({onMenuPress}) {
    return (
        <View style={{width: screenWidth, backgroundColor: '#8e24aa'}}>
            <FlatList
                data={DATA}
                contentContainerStyle={{alignItems: 'space-between'}}
                renderItem={({item}) => <ItemMenu data={item} onMenuPress={onMenuPress}/>}
                keyExtractor={item => item.id}
                numColumns={3}
            />
        </View>
    );
}

function ItemMenu({data, onMenuPress}) {
    return (
        <TouchableOpacity style={{width: '32%', margin: 1, alignItems: 'center', paddingVertical: 20}} onPress={() => onMenuPress(data.title)}>
            <View style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: data.bgColor
            }}>
                <Image source={data.icon}
                       style={{height: '35%', width: '35%', resizeMode: 'contain'}}/>
            </View>
            <Text style={{fontSize: 12, color: 'white', marginTop: 8}}>{data.title}</Text>
        </TouchableOpacity>
    );

}

export default MenuStyle1;