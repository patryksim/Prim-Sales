import React, {useContext, useRef, useState} from 'react';
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeBackView from "../../components/SwipeBack";
import DrawerMenuLeft from "../../components/DrawerMenuLeft";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import DummyPage from "../../components/DummyPage";
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {storageImageUrl} from "../../tools/Helpers";

const MENU_ITEM = [
    {id: '1', title: 'Map', icon: require('../../assets/icon/map4_ic_map.png')},
    {id: '2', title: 'My Place', icon: require('../../assets/icon/map4_ic_place.png')},
    {id: '3', title: 'Traffic', icon: require('../../assets/icon/map4_ic_traffic.png')},
    {id: '4', title: 'Routes', icon: require('../../assets/icon/map4_ic_routes.png')},
    {id: '0'},
    {id: '5', title: 'Setting', icon: require('../../assets/icon/map4_ic_setting.png')},
    {id: '6', title: 'Help', icon: require('../../assets/icon/map4_ic_help.png')},
    {id: '7', title: 'Send Feedback', icon: require('../../assets/icon/map4_ic_feedback.png')},
];

function MapStyle4() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);
    const [selected, setSelected] = useState(new Map());

    const onMenuPress = (title) => {
        if (title != null) {
            snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        }
        leftMenuRef.current.navigateMenu();
    };

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
                menuWidth={300}
                renderMenuComponent={() => <LeftMenuContainer selected={selected} onSelect={onSelect}/>}
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
                title='Map'
                isHome={true}
                navPress={navPress}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#2979ff'
            />
            <DummyPage/>
        </View>
    );
}

function LeftMenuContainer({selected, onSelect}) {
     const [isExpanded, setExpanded] = useState(true);

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <ImageBackground source={{uri: storageImageUrl('map', 'map_4_bg.jpg')}}
                             style={{width: '100%', height: 170, justifyContent: 'flex-end', paddingBottom: 20}}>
                <Image source={require('../../assets/icon/ic_profile1.png')}
                       style={{height: 54, width: 54, resizeMode: 'cover', marginLeft: 20, marginBottom: 35}}/>
                <View style={{flexDirection: 'row', marginLeft: 20, justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>laurabrooke@gmail.com</Text>
                    <TouchableOpacity onPress={() => setExpanded(!isExpanded)} style={{paddingHorizontal: 15}}>
                        <Image source={require('../../assets/icon/ic_expand.png')}
                               style={{height: 22, width: 22, resizeMode: 'cover', transform: [{ rotate: isExpanded ? '0deg' : '180deg'}]}}/>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            {!isExpanded && (
                <TouchableOpacity>
                    <Text style={{fontSize: 14, color: 'black', padding: 20}}>laurabrooke@gmail.com</Text>
                </TouchableOpacity>
            )}
            <View style={{marginTop: 15, height: isExpanded ? undefined : 0}}>
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
    );
}

function ItemMenu({item, selected, onSelect}) {
    if (item.id === '0'){
        return (
            <View style={{width: '100%', height: 0.5, backgroundColor: '#b0bec5', marginVertical: 15}}/>
        );
    } else {
        return (
            <TouchableOpacity onPress={() => onSelect(item.id, item.title)}
                              style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  paddingVertical: 15,
                                  paddingHorizontal: 20,
                              }}>
                <Image source={item.icon}
                       style={{height: 22, width: 22, tintColor: selected ? '#2979ff' : undefined, resizeMode: 'contain'}}/>
                <Text style={{
                    fontSize: 14,
                    color: selected ? '#4285f4' : 'black',
                    fontWeight: selected ? 'bold' : 'normal',
                    marginLeft: 30
                }}>{item.title}</Text>
            </TouchableOpacity>
        );
    }
}

export default MapStyle4;