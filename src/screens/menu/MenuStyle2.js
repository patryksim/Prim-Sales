import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import MaterialInput from "../../components/MaterialInput";
import DummyPage from "../../components/DummyPage";

const MENU_ITEM = [
    {id: '1', title: 'Profile'},
    {id: '2', title: 'Notifications'},
    {id: '3', title: 'Settings'},
    {id: '4', title: 'Feeds'},
    {id: '5', title: 'Photos'},
    {id: '6', title: 'Videos'},
    {id: '7', title: 'Logout'},
];

function MenuStyle2() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);

    const onMenuPress = (title) => {
        snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        leftMenuRef.current.navigateMenu();
    };

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: 'gray'}} onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <SwipeMenuLeft
                ref={leftMenuRef}
                menuWidth={300}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}/>}
                renderPage={() => <DummyPage withHeaderMenu={true} leftMenuRef={leftMenuRef} snackbarRef={snackbarRef}/>}
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
        <View style={{flex: 1, paddingVertical: 20, paddingLeft: 20, backgroundColor: '#f1f5f7'}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                marginRight: 20,
                marginBottom: 30,
                paddingRight: 15,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Search'/>
                <Image source={require('../../assets/icon/ic_search_gray.png')} style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </View>
            <FlatList
                data={MENU_ITEM}
                renderItem={({item}) => (
                    <ItemMenu
                        id={item.id}
                        title={item.title}
                        selected={!!selected.get(item.id)}
                        onSelect={onSelect}
                    />
                )}
                keyExtractor={item => item.id}
                extraData={selected}
            />
        </View>
    );
}

function ItemMenu({id, title, selected, onSelect}) {
    return (
        <TouchableOpacity onPress={() => onSelect(id, title)}
                          style={{backgroundColor: selected ? 'white' : 'transparent', padding: 20}}>
            <Text style={{fontSize: 14, color: '#616161', fontWeight: selected ? 'bold' : 'normal'}}>{title}</Text>
        </TouchableOpacity>
    );
}


export default MenuStyle2;