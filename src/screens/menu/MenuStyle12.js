import React, {useCallback, useContext, useRef, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import SwipeMenuLeft from "../../components/SwipeMenuLeft";
import SwipeBackView from "../../components/SwipeBack";
import MaterialInput from "../../components/MaterialInput";
import DummyPage from "../../components/DummyPage";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialButton from "../../components/MaterialButton";

const MENU_ITEM = [
    {id: '1', title: 'Feed', notifCount: 32},
    {id: '2', title: 'Explore', notifCount: 0},
    {id: '3', title: 'Activity', notifCount: 0},
    {id: '4', title: 'Group', notifCount: 0},
    {id: '5', title: 'Setting', notifCount: 0},
];

function MenuStyle12() {
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
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}/>}
                renderPage={() => <DummyPage withHeaderMenu={true} leftMenuRef={leftMenuRef}
                                             snackbarRef={snackbarRef}/>}
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
        <View style={{flex: 1, paddingTop: 20, backgroundColor: '#f1f5f7'}}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: 'white',
                marginHorizontal: 20,
                marginBottom: 20,
                paddingRight: 15,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <MaterialInput bgColor='transparent' margin={0} placeholder='Search'/>
                <Image source={require('../../assets/icon/ic_search_gray.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </View>
            <View style={{width: '100%', alignItems: 'center', paddingTop: 20}}>
                <Image source={{uri: storageImageUrl('menu', 'profile_pic_300.png')}}
                       style={{height: 67, width: 67, resizeMode: 'contain'}}/>
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
            <View style={{flex: 1, width: '100%'}}>
                <FlatList
                    data={MENU_ITEM}
                    renderItem={({item}) => (
                        <ItemMenu
                            data={item}
                            selected={!!selected.get(item.id)}
                            onSelect={onSelect}
                        />
                    )}
                    keyExtractor={item => item.id}
                    extraData={selected}
                />
            </View>
            <MaterialButton title='Logout' style={{height: 55, width: '100%', backgroundColor: '#cfd8dc'}}
                            titleStyle={{color: 'black'}}
                            buttonPress={() => onMenuPress('Logout clicked')}/>
        </View>
    );
}

function ItemMenu({data, selected, onSelect}) {
    return (
        <TouchableOpacity onPress={() => onSelect(data.id, data.title)}
                          style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              backgroundColor: selected ? '#e0e0e0' : 'transparent',
                              borderTopColor: '#e0e0e0',
                              borderTopWidth: 0.5,
                              padding: 15,
                              borderTopLeftRadius: 5,
                              borderBottomLeftRadius: 5,
                          }}>
            <Text style={{fontSize: 14, fontWeight: selected ? 'bold' : 'normal'}}>{data.title}</Text>
            <View style={{
                width: 26,
                height: 26,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 4,
                marginLeft: 10,
                backgroundColor: '#cfd8dc',
                opacity: data.notifCount > 0 ? 1 : 0
            }}>
                <Text style={{fontSize: 14, color: 'white'}}>{data.notifCount}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default MenuStyle12;