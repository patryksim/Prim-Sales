import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import SwipeMenuRight from "../../components/SwipeMenuRight";

const DATA = [
    {
        id: '1',
        user: 'Christina',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...',
        datetime: '17.53'
    },
    {
        id: '2',
        user: 'Ludwig Beethoven',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Hi there! I am sorry i can’t go there right now, I have another appoinment...',
        datetime: '13.33'
    },
    {
        id: '3',
        user: 'Remi Boucher',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'Do you have a time to talk about our meeting last Saturday? Beacuse i have a great vision about it, Please reply, thanks!',
        datetime: '17.53'
    },
    {
        id: '4',
        user: 'Steve Rogers',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'Hi there! I am sorry i can’t go there right now, I have another appoinment...',
        datetime: '17.53'
    },
    {
        id: '5',
        user: 'Ludwig Beethoven',
        avatar: require('../../assets/icon/ic_profile2.png'),
        text: 'Hi there! I am sorry i can’t go there right now, I have another appoinment...',
        datetime: '13.33'
    },
    {
        id: '6',
        user: 'Remi Boucher',
        avatar: require('../../assets/icon/ic_profile1.png'),
        text: 'Do you have a time to talk about our meeting last Saturday? Beacuse i have a great vision about it, Please reply, thanks!',
        datetime: '17.53'
    },
];

function ActivityStyle21() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    onPressItemMenu = (item) => {
        snackbarRef.current.ShowSnackBarFunction(item.user + ' deleted')
    };

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='Chat'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
            />
            <FlatList
                contentContainerStyle={{paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemActivity data={item} onPressItemMenu={onPressItemMenu}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemActivity({data, onPressItemMenu}) {
    const itemRef = useRef(null);
    return (
        <View>
            <SwipeMenuRight
                ref={itemRef}
                menuWidth={100}
                renderMenuComponent={() => <ItemMenu onPressItemMenu={onPressItemMenu} data={data} itemRef={itemRef}/>}
                renderPage={() => <ItemData data={data}/>}
            />
        </View>
    );
}

function ItemMenu({onPressItemMenu, data, itemRef}) {

    onPressMenu = () => {
        itemRef.current.navigateMenu();
        onPressItemMenu(data);
    };

    return (
        <TouchableOpacity
            style={{width: 100, flex: 1, backgroundColor: '#f44336', alignItems: 'center', justifyContent: 'center'}}
            onPress={onPressMenu}>
            <Image source={require('../../assets/icon/ic_close.png')}
                   style={{width: 17, height: 17, tintColor: 'white'}}/>
        </TouchableOpacity>
    );
}

function ItemData({data}) {
    return (
        <View style={{flex: 1, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0'}}>
            <View style={{flex: 1, padding: 15, flexDirection: 'row'}}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{flex: 1}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{
                            flex: 1,
                            fontSize: 14,
                            color: '#616161',
                            fontWeight: 'bold',
                            marginLeft: 10
                        }}>{data.user}</Text>
                        <Text style={{
                            fontSize: 12,
                            color: '#bdbdbd',
                            fontWeight: 'bold',
                            marginRight: 10
                        }}>{data.datetime}</Text>
                        <Image source={require('../../assets/icon/ic_check.png')}
                               style={{height: 16, width: 10, tintColor: '#0091ea', resizeMode: 'contain'}}/>
                    </View>
                    <Text style={{fontSize: 14, color: '#616161', paddingHorizontal: 10}}>{data.text}</Text>
                </View>
            </View>
        </View>
    );
}

export default ActivityStyle21;