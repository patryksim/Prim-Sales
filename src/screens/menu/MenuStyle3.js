import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import MaterialInput from "../../components/MaterialInput";
import DummyPage from "../../components/DummyPage";

const MENU_ITEM = [
    {id: '1', title: 'Explore'},
    {id: '2', title: 'Timeline'},
    {id: '3', title: 'Photos'},
    {id: '4', title: 'Videos'},
    {id: '5', title: 'Messages'},
];

function MenuStyle3() {
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
            <SwipeMenuLeft
                ref={leftMenuRef}
                menuWidth={300}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress} onLogoutPress={() => onMenuPress('Logout')} onSettingPress={() => onMenuPress('Setting')}/>}
                renderPage={() => <DummyPage withHeaderMenu={true} leftMenuRef={leftMenuRef} snackbarRef={snackbarRef}/>}
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
        <View style={{flex: 1, paddingVertical: 20, paddingLeft: 20, backgroundColor: '#8e24aa'}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                marginRight: 20,
                marginBottom: 50,
                paddingRight: 15,
            }}>
                <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Search'/>
                <Image source={require('../../assets/icon/ic_search_gray.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </View>
            <View style={{flex: 1}}>
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
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingRight: 20,
            }}>
                <TouchableOpacity style={{padding: 10}} onPress={onLogoutPress}>
                    <Image source={require('../../assets/icon/ic_logout.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 10}} onPress={onSettingPress}>
                    <Image source={require('../../assets/icon/ic_setting.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ItemMenu({id, title, selected, onSelect}) {
    return (
        <TouchableOpacity onPress={() => onSelect(id, title)}
                          style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: 20
                          }}>
            <Text style={{fontSize: 20, color: 'white'}}>{title}</Text>
            <Image source={require('../../assets/icon/ic_chevron_right.png')}
                   style={{height: 12, width: 12, resizeMode: 'contain'}}/>
        </TouchableOpacity>
    );
}


export default MenuStyle3;