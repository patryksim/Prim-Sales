import React, {useRef, useState} from 'react';
import {Image, Text, TouchableOpacity, View, ImageBackground, FlatList, Modal, Linking} from "react-native";
import ExpandableScrollView from "../components/ExpandableScrollView";
import {HOME_MENU} from "../tools/Constants";
import DrawerMenuLeft from "../components/DrawerMenuLeft";
import {openUrl} from "../tools/Helpers";

const DATA = [
    {id: 'home', title: 'Material App'},
    {id: 'other', title: 'Other App'},
    {id: 'rate', title: 'Rate this App'},
    {id: 'source', title: 'Get Source Code'},
    {id: 'about', title: 'About'},
];

const otherAppUrl = 'https://codecanyon.net/user/uicreativenet/portfolio';
const playstoreUrl = 'https://play.google.com/store/apps/details?id=com.mediatechindo.rnmaterial';
const sourceUrl = 'https://codecanyon.net/item/material-design-react-native/26413749?s_rank=1';

function HomeScreen() {
    const leftMenuRef = useRef(null);
    const [visible, setVisible] = useState(false);

    const onMenuPress = (dt) => {
        leftMenuRef.current.navigateMenu();
        if (dt.id === '5'){
            setVisible(true);
        }

        switch (dt.id) {
            case 'other' :
                openUrl(otherAppUrl);
                break;
            case 'rate' :
                openUrl(playstoreUrl);
                break;
            case 'source' :
                openUrl(sourceUrl);
                break;
            case 'about' :
                setVisible(true);
                break;
            default:
                break;
        }
    };

    return (
        <ImageBackground source={require('../assets/icon/home_bg.jpg')} style={{flex: 1}}>
            <DrawerMenuLeft
                ref={leftMenuRef}
                menuWidth={230}
                renderMenuComponent={() => <LeftMenuContainer onMenuPress={onMenuPress}/>}
                renderPage={() => <MainContent navPress={() => leftMenuRef.current.navigateMenu()}/>}
            />
            <AboutAppDialog visible={visible} onDissmiss={() => setVisible(false)}/>
        </ImageBackground>
    );
}

function MainContent({navPress}) {
    return (
        <ImageBackground source={require('../assets/icon/home_bg.jpg')} style={{flex: 1}}>
            <HomeHeader navPress={navPress} searchPress={() => {}} morePress={() => {}}/>
            <Image style={{width: 100, height: 100, alignSelf: 'center', marginVertical: 40}}
                   source={require('../assets/icon/logo.png')}/>
            <ExpandableScrollView data={HOME_MENU}/>
        </ImageBackground>
    );
}

function LeftMenuContainer({onMenuPress}) {
    return (
        <View style={{flex: 1, elevation: 20, backgroundColor: '#5d47e3'}}>
            <Image style={{width: 56, height: 56, alignSelf: 'center', marginVertical: 40}}
                   source={require('../assets/icon/logo.png')}/>
            <FlatList
                data={DATA}
                renderItem={({item}) => <ItemMenu data={item} onMenuPress={onMenuPress}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

function ItemMenu({data, onMenuPress}) {
    return (
        <TouchableOpacity style={{paddingHorizontal: 25, paddingVertical: 15}} onPress={() => onMenuPress(data)}>
            <Text style={{fontSize: 16, color: 'white'}}>{data.title}</Text>
        </TouchableOpacity>
    );
}

function HomeHeader ({navPress, searchPress, morePress}) {

    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: '#3023ae',
            elevation: 10,
            shadowOffset: {width: 0, height: 5},
            shadowOpacity: 0.3
        }}>
            <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                <Image source={require('../assets/icon/ic_home.png')} style={{height: 16, width: 18, tintColor: '#48d7ff', resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <Text style={{flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white'}}>Material App</Text>
            <TouchableOpacity onPress={searchPress} style={{padding: 10}}>
                <Image source={require('../assets/icon/ic_search.png')} style={{height: 18, width: 18, tintColor: '#48d7ff', resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={morePress} style={{padding: 18}}>
                <Image source={require('../assets/icon/ic_more.png')} style={{height: 20, width: 4, tintColor: '#48d7ff', resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
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
                        <Image style={{width: 56, height: 56, alignSelf: 'center', marginVertical: 40}}
                               source={require('../assets/icon/logo.png')}/>
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

export default HomeScreen;
