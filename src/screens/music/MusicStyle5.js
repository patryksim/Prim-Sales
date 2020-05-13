import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import SoundPlayer from "react-native-sound-player";

const screenWidth = Dimensions.get('window').width;

function MusicStyle5 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [isPlaying, setPlaying] = useState(false);
    const [isRepeat, setRepeat] = useState(false);
    const [isShuffle, setShuffle] = useState(true);
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
        if (isPlaying){
            SoundPlayer.pause();
            setPlaying(false);
            clearInterval(interval);
        } else {
            try {
                SoundPlayer.playUrl(storageImageUrl('activity', 'audio.wav'));
                setPlaying(true);
                getInfo();
            } catch (e) {
                console.log(`cannot play the sound file`, e)
            }
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
        <ImageBackground source={{uri: storageImageUrl('music', 'music_5_bg.jpg')}} style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderMusic
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                playlistPress={() => snackbarRef.current.ShowSnackBarFunction('playlist clicked')}
            />
            <View style={{flex: 1}}/>
            <Text style={{fontSize: 24, color: 'white', marginLeft: 20, marginBottom: 5}}>Mouthful of Wasps</Text>
            <Text style={{fontSize: 14, color: 'white', marginLeft: 20, marginBottom: 20}}>3.03 Trespasser 2016</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, padding: 20, backgroundColor: 'black'}}>
                <Image source={{uri: storageImageUrl('music', 'music_2_img_2.jpg')}}
                       style={{width: 34, height: 34}}/>
                <View style={{flex: 1, marginLeft: 15}}>
                    <Text style={{fontSize: 14, color: 'white'}}>Kashmir</Text>
                    <Text style={{fontSize: 14, color: '#757575', marginTop: 5}}>3 Albums</Text>
                </View>
                <TouchableOpacity style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_plus_white.png')}
                           style={{height: 16, width: 16, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{height: 20, width: 4, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{height: 110, backgroundColor: '#212121'}}/>
            <View style={{position: 'absolute', bottom: 0, left: 0, right: 0, height: 110}}>
                <AudioProgressBar progress={progress} duration={duration}/>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 8,
                    paddingTop: 10,
                }}>
                    <Text style={{fontSize: 14, color: 'white'}}>{progressLabel}</Text>
                    <Text style={{fontSize: 14, color: 'white'}}>3.03</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                }}>
                    <ControlButton image={require('../../assets/icon/ic_repeat.png')} size={24} active={isRepeat}
                                   buttonPress={() => setRepeat(!isRepeat)}/>
                    <ControlButton image={require('../../assets/icon/ic_skip_previous_white.png')} size={38}
                                   buttonPress={() => snackbarRef.current.ShowSnackBarFunction('button skip previous clicked')}/>
                    <ControlButton image={isPlaying ? require('../../assets/icon/ic_pause_white2.png') : require('../../assets/icon/ic_play2.png')} size={38}
                                   buttonPress={playAudio}/>
                    <ControlButton image={require('../../assets/icon/ic_skip_next_white.png')} size={38}
                                   buttonPress={() => snackbarRef.current.ShowSnackBarFunction('button skip next clicked')}/>
                    <ControlButton image={require('../../assets/icon/ic_shuffle.png')} size={24} active={isShuffle}
                                   buttonPress={() => setShuffle(!isShuffle)}/>
                </View>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

function HeaderMusic({navPress, playlistPress}) {
    return (
        <View>
            <View style={{
                height: 56,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                elevation: 3,
            }}>
                <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_chevron_left.png')}
                           style={{height: 18, width: 18, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <Text style={{flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white'}}>Now Playing</Text>
                <TouchableOpacity onPress={playlistPress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_playlist_white.png')}
                           style={{height: 34, width: 34, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function AudioProgressBar({progress, duration, style={}}) {
    let width = (progress / duration) * screenWidth;
    return (
        <View style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
            <View style={{height: 3, width: width, backgroundColor: '#ff3d00'}}/>
            <View style={{height: 3, width: (screenWidth - width), backgroundColor: '#616161'}}/>
        </View>
    );
}

function ControlButton({image, size, buttonPress, active}) {
    return (
        <TouchableOpacity onPress={buttonPress} style={{padding: 10}}>
            <Image source={image}
                   style={{height: size, width: size, resizeMode: 'contain', tintColor: active ? '#ff3d00' : undefined}}/>
        </TouchableOpacity>
    );
}

export default MusicStyle5;