import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, Modal, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import DummyPage from "../../components/DummyPage";
import {storageImageUrl} from "../../tools/Helpers";

import ActivityStyle1 from './../activity/ActivityStyle1';
// import EcommerceStyle21 from './../ecommerce/EcommerceStyle21';

const MENU_ITEM = [
    {id: 'customerslist', title: 'Clientes', subMenu: [] },
    {id: 'ecommerce8', title: 'Producto', subMenu: [] },
    {id: 'ecommerce21', title: 'Pedido', subMenu: [] },
    {id: 'verification1', title: 'Sincronización', subMenu: [] },
    // {id: 'about', title: 'About', subMenu: [] },
];

function MenuStyle14() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);
    const [visible, setVisible] = useState(false);

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
            case 'ecommerce21':
                pageContext.pageDispatch({page: dt.id})
                break;
            case 'about' :
                    setVisible(true);
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
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}/>}
                renderPage={() => <ActivityStyle1 withHeaderMenu={true} leftMenuRef={leftMenuRef} snackbarRef={snackbarRef}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
            {/* <AboutAppDialog visible={visible} onDissmiss={() => setVisible(false)}/> */}
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
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'white',
                padding: 10,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <Image source={{uri: storageImageUrl('menu', 'profile_pic_300.png')}}
                       style={{height: 50, width: 50, resizeMode: 'contain', marginRight: 20}}/>
                <View>
                    <Text style={{fontSize: 16, color: '#616161'}}>Michael Hendley</Text>
                    <Text style={{fontSize: 12, color: '#616161'}}>Manhattan, NY</Text>
                </View>
            </View>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                paddingVertical: 40
            }}>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 27, color: '#8c8c8c'}}>56</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c'}}>Photos</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 27, color: '#8c8c8c'}}>14</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c'}}>Stories</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 27, color: '#8c8c8c'}}>136</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c'}}>Friends</Text>
                </View>
            </View>
            <View style={{flex: 1, width: '100%', marginTop: 20}}>
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
    );
}

function ItemMenu({item, selected, onMenuPress}) {
    return (
        <TouchableOpacity onPress={() => onMenuPress(item)}
                          style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              backgroundColor: selected ? '#e9e9e9' : 'transparent',
                              borderTopColor: '#e0e0e0',
                              borderTopWidth: 0.5,
                              padding: 15,
                              borderTopLeftRadius: 5,
                              borderBottomLeftRadius: 5,
                          }}>
            <Text style={{fontSize: 14, fontWeight: selected ? 'bold' : 'normal'}}>{item.title}</Text>
            <View style={{
                width: 22,
                height: 22,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                marginLeft: 10,
                backgroundColor: '#448aff',
                opacity: item.notifCount > 0 ? 1 : 0
            }}>
                <Text style={{fontSize: 12, color: 'white'}}>{item.notifCount}</Text>
            </View>
        </TouchableOpacity>
    );
}

function AboutAppDialog({visible, onDissmiss}) {

    return (
        <Modal animationType='fade' transparent={true} visible={visible}>
            <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={onDissmiss} style={{flex: 1, width: '100%'}}/>
                <View style={{width: 300, backgroundColor: 'white', borderRadius: 5, overflow: 'hidden'}}>
                    <View style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        justifyContent: 'center',
                        backgroundColor: '#5d47e3',
                        marginTop: 30,
                        alignSelf: 'center'
                    }}>
                        {/* <Image style={{width: 56, height: 56, alignSelf: 'center', marginVertical: 40}}
                               source={require('../assets/icon/logo.png')}/> */}
                    </View>
                    <View style={{alignItems: 'center', paddingHorizontal: 20}}>
                        <Text style={{fontSize: 22, fontWeight: 'bold', color: '#1e1e1e', marginTop: 25}}>About this app</Text>
                        <Text style={{fontSize: 16, color: '#acacac', marginTop: 3}}>Version 1.0</Text>
                        <Text style={{fontSize: 16, color: '#acacac', textAlign: 'center', marginVertical: 10}}>Everything you need for success React Native mobile app developers. Complete solution with high productivity and cost-efficiency.</Text>
                    </View>
                    <LinkText text='Our Port Folio' onPress={() => openUrl(otherAppUrl)}/>
                    <LinkText text='Rate This App' onPress={() => openUrl(playstoreUrl)}/>
                    <TouchableOpacity style={{backgroundColor: '#5d47e3', alignItems: 'center', padding: 20, marginTop: 20}} onPress={() => openUrl(sourceUrl)}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Get Source Code</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={onDissmiss} style={{flex: 1, width: '100%'}}/>
            </View>
        </Modal>

    );
}

function LinkText({text, onPress}) {
    return (
        <TouchableOpacity style={{alignItems: 'center', paddingVertical: 5}} onPress={onPress}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#2f1f9a'}}>{text}</Text>
        </TouchableOpacity>
    );
}


export default MenuStyle14;