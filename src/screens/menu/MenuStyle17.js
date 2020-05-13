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
    {id: '1', title: 'Dashboard', bgColor: '#ff5722', icon: require('../../assets/icon/ic_menu9_dashboard.png')},
    {id: '2', title: 'Explore', bgColor: '#00bfa5', icon: require('../../assets/icon/ic_menu9_explore.png')},
    {id: '3', title: 'Photos', bgColor: '#7cb342', icon: require('../../assets/icon/ic_menu13_photos.png')},
    {id: '4', title: 'Video', bgColor: '#448aff', icon: require('../../assets/icon/ic_menu13_videos.png')},
    {id: '5', title: 'Friends', bgColor: '#fbc02d', icon: require('../../assets/icon/ic_menu13_group.png')},
    {id: '6', title: 'Messages', bgColor: '#d81b60', icon: require('../../assets/icon/ic_menu9_message.png')},
    {id: '7', title: 'Profile', bgColor: '#d81b60', icon: require('../../assets/icon/ic_menu9_profile.png')},
    {id: '8', title: 'Setting', bgColor: '#d81b60', icon: require('../../assets/icon/ic_menu9_setting.png')},
];

const screenWidth = Dimensions.get('window').width;

function MenuStyle17() {
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
                renderPage={(isMenuOpen) => <MainContent navPress={() => leftMenuRef.current.navigateMenu()} isHome={!isMenuOpen}  snackbarRef={snackbarRef}/>}
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
        <View style={{width: screenWidth, paddingBottom: 20, backgroundColor: '#f1f5f7'}}>
            <View style={{width: '100%', height: 120, alignItems: 'center', backgroundColor: 'white'}}>
                <Text style={{fontSize: 27, color: '#616161', marginTop: 20}}>Michael Angelo</Text>
                <Text style={{fontSize: 14, color: '#616161', marginTop: 5}}>Manhattan, NY</Text>
            </View>
            <View style={{width: '100%', alignItems: 'center', marginTop: -34, marginBottom: -30}}>
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
                contentContainerStyle={{alignItems: 'space-between'}}
                renderItem={({item}) =>
                    <ItemMenu
                        data={item}
                        selected={!!selected.get(item.id)}
                        onSelect={onSelect}
                    />}
                keyExtractor={item => item.id}
                numColumns={4}
            />
        </View>
    );
}

function ItemMenu({data, selected, onSelect}) {
    let tintColorImage;
    if (selected){
        tintColorImage = 'white'
    } else {
        tintColorImage = (data.id === '4' || data.id === '5') ? 'black' : 'gray'
    }
    return (
        <TouchableOpacity style={{width: '24%', margin: 1, alignItems: 'center', paddingVertical: 15}}
                          onPress={() => onSelect(data.id, data.title)}>
            <View style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: selected ? '#2979ff' : 'white',
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={data.icon}
                       style={{
                           height: '35%',
                           width: '35%',
                           tintColor: tintColorImage,
                           resizeMode: 'contain'
                       }}/>
            </View>
            <Text style={{fontSize: 12, marginTop: 8}}>{data.title}</Text>
        </TouchableOpacity>
    );

}

export default MenuStyle17;