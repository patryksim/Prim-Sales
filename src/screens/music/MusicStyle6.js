import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import SoundPlayer from "react-native-sound-player";
import TabHeader from "../../components/TabHeader";

const DATA2 = [
    {id: '1', title: 'Niall Horan', description: '8 Albums', image: 'music_2_img_1.jpg'},
    {id: '2', title: 'Kashmir', description: '3 Albums', image: 'music_2_img_2.jpg'},
    {id: '3', title: 'Alt-J', description: '8 Albums', image: 'music_6_image_3.jpg'},
    {id: '4', title: 'Whitney Houston', description: '3 Albums', image: 'music_6_image_4.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function MusicStyle6 () {
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
            <HeaderThreeButton
                title='Browse'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                isHome={true}
                bgColor='#212121'
                shadow={false}
            />
            <TabHeader titles={['ALBUM', 'ARTIST', 'GENRE', 'RELEASE']}
                       defaultTitleColor='gray' activeTitleColor='white'
                       bgColor='#212121' activeIndex={1} onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView>
                <ItemTitle title='Top 40 Artist'/>
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

function ItemTitle({title}) {
    return (
        <View style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingLeft: 20,
            backgroundColor: 'white',
        }}>
            <Text style={{fontSize: 14, color: '#616161'}}>{title}</Text>
            <TouchableOpacity style={{padding: 20}}>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ff3d00'}}>See All</Text>
            </TouchableOpacity>
        </View>
    );
}

function TopItem({data}) {
    let cardMargin = 5;
    let cardWidth = (screenWidth / 2) - (cardMargin * 3);

    return (
        <View style={{
            backgroundColor: 'white',
            width: cardWidth,
            margin: cardMargin,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
        }}>
            <View style={{height: 190, overflow: 'hidden',}}>
                <Image style={{height: '100%', width: '100%'}}
                       source={{uri: storageImageUrl('music', data.image)}}/>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                <View>
                    <Text style={{fontSize: 14, color: '#212121'}}>{data.title}</Text>
                    <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.description}</Text>
                </View>
                <TouchableOpacity style={{padding: 5}}>
                    <Image source={require('../../assets/icon/ic_more.png')} style={{height: 15, width: 4, tintColor: '#bdbdbd'}}/>
                </TouchableOpacity>
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

export default MusicStyle6;