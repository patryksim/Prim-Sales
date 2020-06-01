import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import DummyPage from "../../components/DummyPage";
import {storageImageUrl} from "../../tools/Helpers";

import ActivityStyle1 from './../activity/ActivityStyle1';

const MENU_ITEM = [
    {id: 'customerslist', title: 'Clientes', subMenu: [] },
    {id: 'ecommerce8', title: 'Producto', subMenu: [] },
    {id: 'orderslist', title: 'Pedido', subMenu: [] },
    {id: 'verification1', title: 'Sincronización', subMenu: [] },
];

function MenuStyle6() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);

    const onMenuPress = (dt) => {
        // pageContext.pageDispatch({page: dt.id})
        // snackbarRef.current.ShowSnackBarFunction(`menu ${dt.id} clicked`);
        leftMenuRef.current.navigateMenu();
        switch (dt.id) {
            case 'customerslist':
                pageContext.pageDispatch({page: dt.id})
                break;
            case 'ecommerce8':
                pageContext.pageDispatch({page: dt.id})
                break;
            case 'orderslist':
                pageContext.pageDispatch({page: dt.id})
                break;
            case 'verification1':
                snackbarRef.current.ShowSnackBarFunction(`${dt.title} en curso`)
                break;
            default:
                break;
        }
    };

    return (
        <SwipeBackView style={{flex: 1, backgroundColor: 'gray'}}
                       onSwipeBack={() => pageContext.pageDispatch({page: 'pop'})}>
            <SwipeMenuLeft
                ref={leftMenuRef}
                menuWidth={300}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}
                                                              onLogoutPress={() => onMenuPress('Logout')}
                                                              onSettingPress={() => onMenuPress('Setting')}/>}
                renderPage={() => <ActivityStyle1 withHeaderMenu={true} leftMenuRef={leftMenuRef} snackbarRef={snackbarRef}/>}
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
        <View style={{flex: 1, backgroundColor: '#0092fe'}}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <ImageBackground source={{uri: storageImageUrl('menu', 'menu_6_480.jpg')}} style={{height: 160, width: '100%', alignItems: 'center', backgroundColor: 'gray'}}>
                    <Text style={{fontSize: 27, color: 'white', marginTop: 30}}>Michael Angelo</Text>
                    <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>Panamá, PTY</Text>
                </ImageBackground>
                <View style={{width: 86, height: 86, marginTop: -43, borderRadius: 43, backgroundColor: 'blue'}}>
                    <Image source={{uri: storageImageUrl('menu', 'profile_pic_300.png')}}
                           style={{height: '100%', width: '100%', resizeMode: 'contain'}}/>
                </View>
                <View style={{width: '100%', paddingHorizontal: 20}}>
                    <FlatList
                        data={MENU_ITEM}
                        renderItem={({item}) => (
                            <ItemMenu
                                item={item}
                                onMenuPress={onMenuPress}
                            />
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 20,
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

// esta funcion renderiza los items que componen el menu lateral
function ItemMenu({item, onMenuPress}) {
    return (
        <TouchableOpacity
        onPress={() => onMenuPress(item)}
          style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
          }}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>
                {item.title}
        </Text>
        </TouchableOpacity>
      );
}

export default MenuStyle6;