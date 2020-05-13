import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import SoundPlayer from "react-native-sound-player";

const DATA = [
    {id: '1', title: 'Workout Playlist', description: '240 songs', image: 'playlist_1.png'},
    {id: '2', title: 'My Favorite Playlist', description: '240 songs', image: 'playlist_2.png'},
    {id: '3', title: 'All Time Rock', description: '240 songs', image: 'playlist_3.png'},
    {id: '4', title: 'Blues', description: '240 songs', image: 'playlist_4.png'},
    {id: '5', title: 'Study Songs', description: '240 songs', image: 'playlist_5.png'},
    {id: '6', title: 'Popstars', description: '240 songs', image: 'playlist_6.png'},
];

const screenWidth = Dimensions.get('window').width;

function MusicStyle8 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [isPlaying, setPlaying] = useState(false);
    const [current, setCurrent] = useState({});

    useEffect(() => {
        _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({success}) => {
            setPlaying(false);
            console.log('finished playing', success)
        });

        return (() => {
            _onFinishedPlayingSubscription.remove()
        })
    }, []);

    const playAudio = () => {
        if (isPlaying){
            SoundPlayer.pause();
            setPlaying(false);
        } else {
            try {
                SoundPlayer.playUrl(storageImageUrl('activity', 'audio.wav'));
                setPlaying(true);
            } catch (e) {
                console.log(`cannot play the sound file`, e)
            }
        }
    };

    const onPress = (dt) => {
        setCurrent(dt);
    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderMusic
                title='My Playlists'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                addPress={() => snackbarRef.current.ShowSnackBarFunction('add clicked')}
                bgColor='black'
            />
            <FlatList
                data={DATA}
                renderItem={({item}) => <PlaylistItem data={item} isActive={JSON.stringify(current) === JSON.stringify(item)} onPress={onPress}/>}
                keyExtractor={item => item.id}
            />
            <View style={{height: 64, backgroundColor: '#212121', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
                <Image source={{uri: storageImageUrl('music', 'music_2_img_2.jpg')}}
                       style={{width: 34, height: 34}}/>
                <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>Mouthful of Wasps</Text>
                    <Text style={{fontSize: 12, color: '#757575'}}>Kashmir</Text>
                </View>
                <TouchableOpacity onPress={playAudio}>
                    <Image source={isPlaying ? require('../../assets/icon/ic_pause2.png') : require('../../assets/icon/ic_play_white.png')} style={{width: 38, height: 38}}/>
                </TouchableOpacity>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function HeaderMusic ({navPress, title, bgColor, addPress}) {

    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: bgColor,
        }}>
            <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_chevron_left.png')}
                       style={{height: 18, width: 18, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <Text style={{flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white'}}>{title}</Text>
            <TouchableOpacity onPress={addPress} style={{padding: 18}}>
                <Image source={require('../../assets/icon/ic_plus_white.png')} style={{height: 16, width: 16, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

function PlaylistItem({data, isActive, onPress}) {
    return (
        <TouchableOpacity
            style={{
                flexDirection: 'row',
                width: screenWidth,
                paddingHorizontal: 10,
                paddingVertical: 15,
                alignItems: 'center'
            }}
            onPress={() => onPress(data)}>
            <Image source={{uri: storageImageUrl('music', data.image)}}
                   style={{width: 34, height: 34, marginLeft: 10}}/>
            <View style={{flex: 1, marginLeft: 15}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#212121'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: '#757575', marginTop: 4}}>{data.description}</Text>
            </View>
            <TouchableOpacity style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_more.png')}
                       style={{height: 15, width: 4, tintColor: '#bdbdbd'}}/>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export default MusicStyle8;