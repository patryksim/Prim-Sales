import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import SoundPlayer from "react-native-sound-player";
import TabHeader from "../../components/TabHeader";

const DATA2 = [
    {id: '1', title: 'Best Albums 2017', description: 'Weasel the jeeper so far toward the universe.', image: 'music_7_img_1.jpg'},
    {id: '2', title: 'Hip Hop of the Month', description: 'Weasel the jeeper so far toward the universe.', image: 'music_7_img_2.jpg'},
    {id: '3', title: 'Top 10 Playlist', description: 'Weasel the jeeper so far toward the universe.', image: 'music_7_img_3.jpg'},
    {id: '4', title: 'Morning Workout Playlist', description: 'Weasel the jeeper so far toward the universe.', image: 'music_7_img_4.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function MusicStyle7 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [isPlaying, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(1);
    let interval = null;

    const onTabChanged = (index) => {

    };

    useEffect(() => {
        _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({success}) => {
            setPlaying(false);
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
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderMusic
                title='Browse'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                playlistPress={() => snackbarRef.current.ShowSnackBarFunction('playlist clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                isHome={true}
                bgColor='#212121'
                shadow={false}
            />
            <TabHeader titles={['OVERVIEW', 'GENRE', 'NEW RELEASE']}
                       defaultTitleColor='gray' activeTitleColor='white'
                       bgColor='#212121' onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView>
                <ImageBackground style={{height: 170, width: '100%', alignItems: 'center', justifyContent: 'center'}}
                                 source={{uri: storageImageUrl('music', 'image-2.jpg')}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center', marginHorizontal: 30}}>WEEKLY DISCOVER PLAYLIST</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_play_white.png')} style={{width: 33, height: 33}}/>
                        <Text style={{fontSize: 14, color: 'white', marginLeft: 10}}>PLAY NOW</Text>
                    </View>
                </ImageBackground>
                <MultiColumnView
                    containerStyle={{padding: 5}}
                    data={DATA2}
                    numColumns={2}
                    renderItem={(item) => <TopItem data={item}/>}
                />

            </ScrollView>
            <AudioProgressBar progress={progress} duration={duration}/>
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

function HeaderMusic ({navPress, title, bgColor, playlistPress, morePress}) {

    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            backgroundColor: bgColor,
        }}>
            <TouchableOpacity onPress={navPress} style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_home.png')} style={{height: 16, width: 18, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <Text style={{flex: 1, paddingHorizontal: 10, fontSize: 20, color: 'white'}}>{title}</Text>
            <TouchableOpacity onPress={playlistPress} style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_playlist_white.png')} style={{height: 32, width: 32, resizeMode: 'contain'}}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={morePress} style={{padding: 18}}>
                <Image source={require('../../assets/icon/ic_more.png')} style={{height: 20, width: 4, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
    );
}

function TopItem({data}) {
    let cardMargin = 5;
    let cardWidth = (screenWidth / 2) - (cardMargin * 3);

    return (
        <View style={{width: cardWidth, margin: cardMargin}}>
            <View style={{height: 190, overflow: 'hidden',}}>
                <ImageBackground style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
                                 source={{uri: storageImageUrl('music', data.image)}}>
                    <Image source={require('../../assets/icon/ic_play_white.png')} style={{width: 33, height: 33}}/>
                    <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>{data.title.toUpperCase()}</Text>
                </ImageBackground>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <View>
                    <Text style={{fontSize: 13, fontWeight: 'bold', color: '#212121'}}>{data.title}</Text>
                    <Text style={{fontSize: 12, color: '#bdbdbd', marginTop: 4}}>{data.description}</Text>
                </View>
            </View>
        </View>
    )
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

export default MusicStyle7;