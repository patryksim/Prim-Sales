import React, {useContext, useRef, useState} from 'react';
import {FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import DummyPage from "../../components/DummyPage";
import SwipeBackView from "../../components/SwipeBack";
import {storageImageUrl} from "../../tools/Helpers";
import DrawerMenuLeft from "../../components/DrawerMenuLeft";

const MENU_ITEM = [
    {id: '1', title: 'Explore', icon: require('../../assets/icon/food_2_menu_1.png')},
    {id: '2', title: 'Cookbook', icon: require('../../assets/icon/food_2_menu_2.png')},
    {id: '3', title: 'My Receipes', icon: require('../../assets/icon/food_2_menu_3.png')},
    {id: '4', title: 'Favorite', icon: require('../../assets/icon/food_2_menu_4.png')},
    {id: '5', title: 'Friends', icon: require('../../assets/icon/food_2_menu_5.png')},
    {id: '6', title: 'Settings', icon: require('../../assets/icon/food_2_menu_6.png')},
];

function FoodStyle2() {
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
                renderPage={() => <MainContent navPress={() => leftMenuRef.current.navigateMenu()}
                                               snackbarRef={snackbarRef}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </SwipeBackView>
    );
}

function MainContent({navPress, snackbarRef}) {
    return (
        <View style={{flex: 1}}>
            <HeaderThreeButton
                title='Food'
                isHome={true}
                navPress={navPress}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff3d00'
            />
            <DummyPage/>
        </View>
    );
}

function LeftMenuContainer({selected, onSelect}) {

    return (
        <View style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
            <ImageBackground source={{uri: storageImageUrl('food', 'food_2_img_1.jpg')}}
                             style={{width: '100%', height: 170, justifyContent: 'flex-end'}}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    paddingBottom: 30,
                    backgroundColor: 'black',
                    opacity: 0.5
                }}/>
                <View style={{
                    position: 'absolute',
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    paddingBottom: 30,
                }}>
                    <Image source={require('../../assets/icon/ic_profile2.png')}
                           style={{height: 40, width: 40, resizeMode: 'cover', marginLeft: 20}}/>
                    <View>
                        <Text
                            style={{fontSize: 14, color: 'white', fontWeight: 'bold', marginLeft: 10}}>Michael
                            Hendley</Text>
                        <Text style={{fontSize: 12, color: 'white', marginLeft: 10, marginTop: 4}}>Part Time Chef</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={{marginTop: 15}}>
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
    return (
        <TouchableOpacity onPress={() => onSelect(item.id, item.title)}
                          style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              paddingVertical: 15,
                              paddingHorizontal: 20,
                              backgroundColor: selected ? '#f1f5f7' : 'transparent'
                          }}>
            <Image source={item.icon}
                   style={{height: 34, width: 34, resizeMode: 'contain'}}/>
            <Text style={{
                fontSize: 14,
                color: '#212121',
                fontWeight: selected ? 'bold' : 'normal',
                marginLeft: 15
            }}>{item.title}</Text>
        </TouchableOpacity>
    );
}

export default FoodStyle2;