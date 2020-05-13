import React, {useContext, useRef, useEffect, useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import MaterialInput from "../../components/MaterialInput";
import HeaderChat from "../../components/HeaderChat";
import {storageImageUrl} from "../../tools/Helpers";
import SoundPlayer from 'react-native-sound-player';
import MapView, {Marker} from 'react-native-maps';

const DATA = [
    {
        id: '1',
        fromMe: false,
        type: 'audio',
        text: '',
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
        type: 'map',
        text: '',
        image: null,
        datetime: '14.22',
        isDelivered: false
    },
    {
        id: '4',
        fromMe: true,
        type: 'text',
        text: 'Meet me at 10 PM',
        image: null,
        datetime: '14.22',
        isDelivered: true
    },
];

function ActivityStyle30() {
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
                keyExtractor={item => item.id}
            />
            <ChatButtonContainer snackbarRef={snackbarRef}/>
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
    if (data.type === 'audio') {
        const [isPlaying, setPlaying] = useState(false);
        const [progressLabel, setProgressLabel] = useState('00.00');
        const [progress, setProgress] = useState(0);
        const [duration, setDuration] = useState(1);
        let interval = null;

        useEffect(() => {
            _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({success}) => {
                setPlaying(false);
                clearInterval(interval);
                console.log('finished playing', success)
            });

            return (() => {
                _onFinishedPlayingSubscription.remove()
            })
        }, []);

        const getInfo = async () => {
            try {
                const info = await SoundPlayer.getInfo();
                console.log('getInfo', info);
                setPlaying(true);
                let prog = Math.round(info.currentTime);
                setProgress(info.currentTime);
                setDuration(info.duration);
                if ( prog < 10){
                    setProgressLabel('00.0' + prog)
                } else {
                    setProgressLabel('00.' + prog)
                }
            } catch (e) {
                console.log('There is no song playing', e)
            }
        };

        const playAudio = () => {
            console.log('play audio clicked');
            try {
                SoundPlayer.playUrl(storageImageUrl('activity', 'audio.wav'));
                getInfo();
            } catch (e) {
                console.log(`cannot play the sound file`, e)
            }
        };

        useEffect(() => {
            if (isPlaying) {
                interval = setInterval(getInfo, 1000)
            }
            return () => {
                clearInterval(interval)
            }
        }, [isPlaying]);


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
                    width: 280,
                    height: 80,
                    justifyContent: 'space-between',
                    marginTop: 10,
                    padding: 10,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 1,
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.1,
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <TouchableOpacity onPress={playAudio}>
                            <Image
                                source={isPlaying ? require('../../assets/icon/ic_pause.png') : require('../../assets/icon/ic_play.png')}
                                style={{width: 42, height: 42, tintColor: '#e4e7e8'}}/>
                        </TouchableOpacity>
                        <AudioProgressBar progress={progress} duration={duration}/>
                    </View>
                    <Text style={{
                        width: '50%',
                        fontSize: 12,
                        color: '#616161',
                        marginLeft: 40,
                        marginTop: -40
                    }}>{progressLabel}</Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#bdbdbd',
                        alignSelf: 'flex-end',
                        marginRight: 6,
                        marginTop: -30
                    }}>{data.datetime}</Text>
                </View>
            </View>
        );
    } else if (data.type === 'map') {
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
                    width: 280,
                    height: 210,
                    justifyContent: 'space-between',
                    marginTop: 10,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 1,
                    shadowOffset: {width: 0, height: 1},
                    shadowOpacity: 0.1,
                }}>
                    <MapView
                        style={{width: 280, height: 150}}
                        initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0022,
                            longitudeDelta: 0.0021,
                        }}>
                        <Marker key='123' coordinate={{latitude: 37.78825, longitude: -122.4324}} pinColor='blue'/>
                    </MapView>
                    <Text style={{
                        width: '50%',
                        fontSize: 12,
                        color: '#616161',
                        marginLeft: 10,
                        marginTop: 5
                    }}>26 Howard St. Chesapeake, VA 23320</Text>
                    <Text style={{
                        fontSize: 12,
                        color: '#bdbdbd',
                        alignSelf: 'flex-end',
                        marginRight: 10,
                        marginBottom: 10
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

function AudioProgressBar({progress, duration}) {
    let width = (progress / duration) * 200;
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{height: 5, width: width, backgroundColor: '#0091ea'}}/>
            <View style={{height: 5, width: (200 - width), backgroundColor: '#ecf0f1'}}/>
        </View>
    );
}

function ChatButtonContainer({snackbarRef}) {
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
            <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('Attachment clicked')}>
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

export default ActivityStyle30;