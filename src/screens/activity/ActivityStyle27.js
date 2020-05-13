import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialInput from "../../components/MaterialInput";
import HeaderChat from "../../components/HeaderChat";
import {storageImageUrl} from "../../tools/Helpers";

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

function ActivityStyle27() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
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
                ListHeaderComponent={() => <ItemHeader title='Yesterday, 24 July 2020'/>}
                keyExtractor={item => item.id}
            />
            <ChatButtonContainer snackbarRef={snackbarRef}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemHeader({title}) {
    return (
        <View style={{
            width: '100%',
            height: 57,
            backgroundColor: 'white',
            justifyContent: 'center',
            paddingLeft: 10
        }}>
            <Text style={{alignSelf: 'center', fontSize: 14, color: '#e0e0e0'}}>{title}</Text>
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
                           style={{height: 150, width: 230, resizeMode: 'cover'}}/>
                    <View style={{flexDirection: 'row', marginRight: 6, padding: 5}}>
                        <Text style={{flex: 1, fontSize: 12, color: '#616161'}}>Remember this photo?</Text>
                        <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
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

const inputWidth = (Dimensions.get('window').width) - 122;

function ChatButtonContainer({snackbarRef}) {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 5,
            paddingHorizontal: 10,
        }}>
            <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('Attachment clicked')}>
                <Image source={require('../../assets/icon/ic_attachment.png')} style={{width: 36, height: 36, tintColor: '#f44336'}}/>
            </TouchableOpacity>
            <MaterialInput style={{flex: 1}} bgColor='white' margin={0} placeholder='Write message'/>
            <View style={{
                width: 0,
                height: 0,
                marginLeft: -5,
                borderTopWidth: 6,
                borderBottomWidth: 6,
                borderLeftWidth: 12,
                borderStyle: 'solid',
                backgroundColor: 'transparent',
                borderTopColor: 'transparent',
                borderBottomColor: 'transparent',
                borderLeftColor: 'white',
            }}/>
            <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('Send clicked')}
                              style={{
                                  width: 50,
                                  height: 50,
                                  marginLeft: 10,
                                  borderRadius: 25,
                                  backgroundColor: '#f44336',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                              }}>
                <Image source={require('../../assets/icon/activity28_send_button.png')}
                       style={{width: 26, height: 26}}/>
            </TouchableOpacity>
        </View>
    );
}

export default ActivityStyle27;