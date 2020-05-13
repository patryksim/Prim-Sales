import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";

const MENU = [
    {id: '1', title: 'Photos', bgColor: '#ff5722', icon: require('../../assets/icon/ic_menu1_photos.png')},
    {id: '2', title: 'Videos', bgColor: '#00bfa5', icon: require('../../assets/icon/ic_menu1_videos.png')},
    {id: '3', title: 'Messages', bgColor: '#ff5252', icon: require('../../assets/icon/ic_menu1_messages.png')},
    {id: '4', title: 'Settings', bgColor: '#448aff', icon: require('../../assets/icon/ic_menu1_settings.png')},
    {id: '5', title: 'Friends', bgColor: '#fbc02d', icon: require('../../assets/icon/ic_menu1_friends.png')},
    {id: '6', title: 'Notifications', bgColor: '#d81b60', icon: require('../../assets/icon/ic_menu1_notifs.png')},
];

function ProfileStyle26() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onMenuPress = (title) => {
        snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
    };
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Profile'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
            />
            <View style={{backgroundColor: 'white', padding: 15, alignItems: 'center'}}>
                <Text style={{fontSize: 17, color: '#616161'}}>Michael Angelo</Text>
                <Text style={{fontSize: 12, color: '#8c8c8c', marginTop: 4}}>Manhattan, NY</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'space-around'}}>
                <View style={{paddingTop: 50, alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_profile4.png')}
                           style={{width: 84, height: 84, resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 27, color: '#616161', marginTop: 10}}>Michael Angelo</Text>
                    <Text style={{fontSize: 14, color: '#757575', marginTop: 4}}>Manhattan, NY</Text>
                </View>
                <View style={{marginBottom: 20}}>
                    <FlatList
                        data={MENU}
                        contentContainerStyle={{alignItems: 'space-between'}}
                        renderItem={({item}) => <ItemMenu data={item} onMenuPress={onMenuPress}/>}
                        keyExtractor={item => item.id}
                        numColumns={3}
                    />
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemMenu({data, onMenuPress}) {
    return (
        <TouchableOpacity style={{width: '32%', margin: 1, alignItems: 'center', paddingVertical: 15}}
                          onPress={() => onMenuPress(data.title)}>
            <View style={{
                width: 56,
                height: 56,
                borderRadius: 28,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: data.bgColor
            }}>
                <Image source={data.icon}
                       style={{height: '30%', width: '30%', resizeMode: 'contain'}}/>
            </View>
            <Text style={{fontSize: 12, color: '#616161', marginTop: 8}}>{data.title}</Text>
        </TouchableOpacity>
    );
}

export default ProfileStyle26;