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
    {id: '1', title: 'Feed'},
    {id: '2', title: 'Explore'},
    {id: '3', title: 'Photos'},
    {id: '4', title: 'Videos'},
    {id: '5', title: 'Messages'},
];

const screenWidth = Dimensions.get('window').width;

function MenuStyle15() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const leftMenuRef = useRef(null);

    const onMenuPress = (title) => {
        if (title != null) {
            snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        }
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
                bgColor='#263238'
            />
            <DummyPage/>
        </View>
    );
}

function LeftMenuContainer({onMenuPress, selected, onSelect}) {
    return (
        <View style={{width: screenWidth, height: '100%', paddingTop: 20, backgroundColor: '#263238'}}>
            <View style={{flexDirection: 'row', marginBottom: 40}}>
                <TouchableOpacity style={{paddingVertical: 15, paddingLeft: 10}} onPress={() => onMenuPress()}>
                    <Image source={require('../../assets/icon/ic_chevron_left.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    marginHorizontal: 20,
                    paddingRight: 15,
                }}>
                    <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Search'/>
                    <Image source={require('../../assets/icon/ic_search_gray.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </View>
            </View>
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
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginHorizontal: 20,
                marginBottom: 20,
                paddingRight: 20,
            }}>
                <TouchableOpacity style={{padding: 10}} onPress={() => onMenuPress('Setting')}>
                    <Image source={require('../../assets/icon/ic_setting.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#448aff'
                }}
                                  onPress={() => onMenuPress('Profile')}>
                    <Image source={require('../../assets/icon/ic_menu9_profile.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 10}} onPress={() => onMenuPress('Logout')}>
                    <Image source={require('../../assets/icon/ic_logout.png')}
                           style={{height: 18, width: 18, tintColor: 'red', resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function ItemMenu({data, selected, onSelect}) {
    return (
        <TouchableOpacity style={{
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 35,
            paddingVertical: 25,
        }}
                          onPress={() => onSelect(data.id, data.title)}>
            <Text style={{fontSize: 20, color: 'white'}}>{data.title}</Text>
            <Image source={require('../../assets/icon/ic_chevron_right.png')}
                   style={{height: 15, width: 15, resizeMode: 'contain'}}/>
        </TouchableOpacity>
    );

}

export default MenuStyle15;