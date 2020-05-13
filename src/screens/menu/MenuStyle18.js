import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from "react-native";
import SwipeBackView from "../../components/SwipeBack";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import DummyPage from "../../components/DummyPage";
import DrawerMenuLeft from "../../components/DrawerMenuLeft";

const DATA = [
    { id: '1', title: 'Feed', notifCount: 32 },
    { id: '2', title: 'Explore', notifCount: 2 },
    { id: '3', title: 'Activity', notifCount: 0 },
    { id: '4', title: 'Group', notifCount: 0 },
    { id: '5', title: 'Photos', notifCount: 0 },
    { id: '6', title: 'Videos', notifCount: 0 },
    { id: '7', title: 'Setting', notifCount: 0 },
];

const screenWidth = Dimensions.get('window').width;

function MenuStyle18() {
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
                bgColor='#8e24aa'
            />
            <DummyPage/>
        </View>
    );
}

function LeftMenuContainer({onMenuPress, selected, onSelect}) {
    return (
        <View style={{width: screenWidth, backgroundColor: 'white'}}>
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
            borderTopWidth: 0.5,
            borderTopColor: '#e0e0e0',
            justifyContent: 'space-between',
            paddingHorizontal: 25,
            paddingVertical: 20,
            backgroundColor: selected ? '#e0e0e0' : 'transparent'
        }}
                          onPress={() => onSelect(data.id, data.title)}>
            <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
                <Text style={{fontSize: 14, fontWeight: selected ? 'bold' : 'normal'}}>{data.title}</Text>
            </View>
            <View style={{
                width: 20,
                height: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: selected ? 10 : 4,
                marginLeft: 10,
                backgroundColor: selected ? '#2979ff' : '#cfd8dc',
                opacity: data.notifCount > 0 ? 1 : 0
            }}>
                <Text style={{fontSize: 12, color: 'white'}}>{data.notifCount}</Text>
            </View>
        </TouchableOpacity>
    );

}

export default MenuStyle18;