import React, {useContext, useRef} from 'react';
import {Animated, Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialInput from "../../components/MaterialInput";
import HeaderChat from "../../components/HeaderChat";
import {storageImageUrl} from "../../tools/Helpers";
import useBottomMenu from "../../hooks/UseBottomMenu";

const DATA = [
    {
        id: '1',
        fromMe: false,
        type: 'text',
        text: 'Do you have a time to talk about our meeting last Saturday? Beacuse i have a great news fror you',
        image: null,
        datetime: '14.22',
        isDelivered: false
    },
    {
        id: '2',
        fromMe: true,
        type: 'text',
        text: 'Meet me at 10 PM',
        image: null,
        datetime: '14.22',
        isDelivered: true
    },
    {
        id: '3',
        fromMe: false,
        type: 'image',
        text: null,
        image: storageImageUrl('activity', 'activity_26_img.jpg'),
        datetime: '14.22',
        isDelivered: true
    },
    {
        id: '4',
        fromMe: true,
        type: 'text',
        text: 'Wow, that’s great!',
        image: null,
        datetime: '09.08',
        isDelivered: true
    },
];

const MENU = [
    {id: '1', title: 'Photos', bgColor: '#ff5722', icon: require('../../assets/icon/ic_activity29_camera.png')},
    {id: '2', title: 'Videos', bgColor: '#00bfa5', icon: require('../../assets/icon/ic_activity29_video.png')},
    {id: '3', title: 'Document', bgColor: '#7cb342', icon: require('../../assets/icon/ic_activity29_document.png')},
    {id: '4', title: 'Location', bgColor: '#448aff', icon: require('../../assets/icon/ic_activity29_location.png')},
    {id: '5', title: 'Contact', bgColor: '#fbc02d', icon: require('../../assets/icon/ic_activity29_contact.png')},
    {id: '6', title: 'Audio', bgColor: '#d81b60', icon: require('../../assets/icon/ic_activity29_audio.png')},
];

const screenWidth = Dimensions.get('window').width;

function ActivityStyle29() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [isMenuOpen, slideAnim, navigateMenu] = useBottomMenu(300);

    const onMenuPress = (title) => {
        snackbarRef.current.ShowSnackBarFunction(`menu ${title} clicked`);
        navigateMenu();
    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderChat
                user='Remi Boucher'
                lastseen='2 hour ago'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
            />
            <FlatList
                contentContainerStyle={{paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemActivity data={item}/>}
                keyExtractor={item => item.id}
            />
            <Animated.View
                style={{
                    position: 'absolute',
                    width: screenWidth,
                    bottom: slideAnim,
                    backgroundColor: 'white',
                    elevation: 2,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3
                }}>
                <FlatList
                    data={MENU}
                    contentContainerStyle={{alignItems: 'space-between'}}
                    renderItem={({item}) => <ItemMenu data={item} onMenuPress={onMenuPress}/>}
                    keyExtractor={item => item.id}
                    numColumns={3}
                />
            </Animated.View>
            <ChatButtonContainer snackbarRef={snackbarRef} onAttachmentPress={() => navigateMenu()}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemActivity({data}) {
    if (data.fromMe) {
        return (
            <SendItem data={data}/>
        );
    } else {
        return (
            <ReceiveItem data={data}/>
        );
    }
}

function SendItem({data}) {
    return (
        <View style={{flexDirection: 'row', alignSelf: 'flex-end', marginTop: 20, paddingLeft: 60}}>
            <View style={{
                justifyContent: 'space-between',
                padding: 10,
                marginTop: 10,
                backgroundColor: '#f44336',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 1,
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.1,
            }}>
                <Text style={{fontSize: 13, color: 'white'}}>{data.text}</Text>
                <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <Text style={{fontSize: 12, color: 'white', alignSelf: 'flex-end'}}>{data.datetime}</Text>
                    <Image source={require('../../assets/icon/ic_check.png')}
                           style={{
                               height: 16,
                               width: 12,
                               marginLeft: 6,
                               tintColor: data.isDelivered ? 'white' : 'transparent',
                               resizeMode: 'contain'
                           }}/>
                </View>
            </View>
            <View style={{
                width: 0,
                height: 0,
                marginTop: 20,
                marginRight: 20,
                borderTopWidth: 6,
                borderBottomWidth: 6,
                borderLeftWidth: 12,
                borderStyle: 'solid',
                backgroundColor: 'transparent',
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent',
                borderLeftColor: '#f44336',
            }}/>
        </View>
    );
}

function ReceiveItem({data}) {
    if (data.type === 'image') {
        return (
            <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginTop: 20, paddingRight: 60}}>
                <View style={{
                    width: 0,
                    height: 0,
                    marginTop: 20,
                    marginLeft: 20,
                    borderTopWidth: 6,
                    borderBottomWidth: 6,
                    borderRightWidth: 12,
                    borderStyle: 'solid',
                    backgroundColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderRightColor: 'white',
                }}/>
                <View style={{
                    justifyContent: 'space-between',
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 1,
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.1,
                }}>
                    <Image source={{uri: data.image}}
                           style={{height: 190, width: 230, resizeMode: 'cover'}}/>
                    <Text style={{
                        fontSize: 12,
                        color: 'white',
                        alignSelf: 'flex-end',
                        marginRight: 6,
                        marginTop: -30
                    }}>{data.datetime}</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={{flexDirection: 'row', alignSelf: 'flex-start', marginTop: 20, paddingRight: 60}}>
                <View style={{
                    width: 0,
                    height: 0,
                    marginTop: 20,
                    marginLeft: 20,
                    borderTopWidth: 6,
                    borderBottomWidth: 6,
                    borderRightWidth: 12,
                    borderStyle: 'solid',
                    backgroundColor: 'transparent',
                    borderTopColor: 'transparent',
                    borderBottomColor: 'transparent',
                    borderRightColor: 'white',
                }}/>
                <View style={{
                    justifyContent: 'space-between',
                    padding: 10,
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 1,
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.1,
                }}>
                    <Text style={{fontSize: 13, color: '#616161'}}>{data.text}</Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#bdbdbd',
                        alignSelf: 'flex-end',
                        marginRight: 6
                    }}>{data.datetime}</Text>
                </View>
            </View>
        );
    }
}

function ChatButtonContainer({snackbarRef, onAttachmentPress}) {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            paddingVertical: 5,
            paddingHorizontal: 15,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3
        }}>
            <TouchableOpacity onPress={onAttachmentPress}>
                <Image source={require('../../assets/icon/ic_attachment.png')} style={{width: 36, height: 36}}/>
            </TouchableOpacity>
            <MaterialInput style={{flex: 1}} bgColor='transparent' margin={0} placeholder='Write message'/>
            <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('Send clicked')}>
                <Image source={require('../../assets/icon/activity26_send_button.png')}
                       style={{width: 36, height: 27}}/>
            </TouchableOpacity>
        </View>
    );
}

function ItemMenu({data, onMenuPress}) {
    return (
        <TouchableOpacity style={{width: '32%', margin: 1, alignItems: 'center', paddingVertical: 20}}
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
                       style={{height: '50%', width: '50%', resizeMode: 'contain'}}/>
            </View>
            <Text style={{fontSize: 12, color: '#616161', marginTop: 8}}>{data.title}</Text>
        </TouchableOpacity>
    );
}

export default ActivityStyle29;