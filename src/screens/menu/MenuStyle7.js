import React, {useContext, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import SwipeBackView from "../../components/SwipeBack";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import DummyPage from "../../components/DummyPage";
import MaterialInput from "../../components/MaterialInput";
import DrawerMenuLeft from "../../components/DrawerMenuLeft";

const DATA = [
    {
        id: '1',
        title: 'Feed',
        subMenu: [{id: '1a', title: 'Popular'}, {id: '1b', title: 'Recent'}, {id: '1c', title: 'Favorite'}]
    },
    {id: '2', title: 'Explore', subMenu: [{id: '2a', title: 'Sub Menu 1'}, {id: '2b', title: 'Sub Menu 1'}]},
    {id: '3', title: 'Activity', subMenu: [{id: '3a', title: 'Sub Menu 2'}, {id: '3b', title: 'Sub Menu 2'}]},
    {id: '4', title: 'Group', subMenu: []},
    {id: '5', title: 'Setting', subMenu: []},
];

const screenWidth = Dimensions.get('window').width;

function MenuStyle7() {
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
        <View style={{width: screenWidth, height: '100%', paddingTop: 20, backgroundColor: '#f1f5f7'}}>
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
                <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Search'/>
                <Image source={require('../../assets/icon/ic_search_gray.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </View>
            <View style={{width: '100%'}}>
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
        </View>
    );
}

function ItemMenu({data, selected, onSelect}) {
    const [isSubMenuOpen, setSubmenu] = useState(true);
    if (data.subMenu.length > 0) {
        let subMenuItem = [];
        data.subMenu.map((dt) => {
            subMenuItem.push(
                <TouchableOpacity key={dt.id} onPress={() => onSelect(dt.id, dt.title)}
                                  style={{
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      paddingHorizontal: 35,
                                      paddingVertical: 5,
                                  }}>
                    <Text style={{fontSize: 14}}>{dt.title}</Text>
                </TouchableOpacity>
            )
        });
        return (
            <View>
                <TouchableOpacity onPress={() => setSubmenu(!isSubMenuOpen)} style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTopColor: '#e5e9eb',
                    borderTopWidth: 1,
                    paddingVertical: 20,
                    paddingHorizontal: 30
                }}>
                    <Text style={{fontSize: 14, fontWeight: 'bold'}}>{data.title}</Text>
                    <Image source={require('../../assets/icon/ic_chevron_right.png')}
                           style={{
                               height: 12,
                               width: 12,
                               tintColor: 'gray',
                               transform: [{rotate: isSubMenuOpen ? '90deg' : '0deg'}],
                               resizeMode: 'contain'
                           }}/>
                </TouchableOpacity>
                {isSubMenuOpen && subMenuItem}
            </View>
        );
    } else {
        return (
            <TouchableOpacity onPress={() => onSelect(data.id, data.title)}
                              style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  justifyContent: 'space-between',
                                  borderTopColor: '#e5e9eb',
                                  borderTopWidth: 1,
                                  paddingVertical: 20,
                                  paddingHorizontal: 30
                              }}>
                <Text style={{fontSize: 14}}>{data.title}</Text>
                <Image source={require('../../assets/icon/ic_chevron_right.png')}
                       style={{height: 12, width: 12, tintColor: 'gray', resizeMode: 'contain'}}/>
            </TouchableOpacity>
        );
    }
}

export default MenuStyle7;