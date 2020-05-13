import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import SoundPlayer from "react-native-sound-player";
import HeaderOneButton from "../../components/HeaderOneButton";
import FloatingButton from "../../components/FloatingButton";

const DATA2 = [
    {id: '1', title: 'Rocket brothers', duration: '2.35'},
    {id: '2', title: 'Mouthful of Wasps', duration: '2.35'},
    {id: '3', title: 'The Aftermath', duration: '2.35'},
    {id: '4', title: 'Mom In Love, Dad In Space', duration: '2.35'},
    {id: '5', title: 'Kaliformia', duration: '2.35'},
    {id: '6', title: 'Rocket brothers', duration: '2.35'},
    {id: '7', title: 'Mouthful of Wasps', duration: '2.35'},
    {id: '8', title: 'The Aftermath', duration: '2.35'},
    {id: '9', title: 'Mom In Love, Dad In Space', duration: '2.35'},
    {id: '10', title: 'Kaliformia', duration: '2.35'},
];

const screenWidth = Dimensions.get('window').width;

function MusicStyle9 () {
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
            <HeaderOneButton title='Workout Playlist' bgColor='#212121' navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
            <FloatingButton onPress={playAudio}
                            image={isPlaying ? require('../../assets/icon/ic_pause_white2.png') : require('../../assets/icon/ic_play2.png')}
                            imageStyle={{width: 32, height: 32}}
                            style={{backgroundColor: '#cc0001', position: 'relative', alignSelf: 'flex-end', marginTop: -30, marginRight: 15}}/>
            <FlatList
                data={DATA2}
                renderItem={({item}) => <PlaylistItem data={item} isActive={JSON.stringify(current) === JSON.stringify(item)} onPress={onPress}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function PlaylistItem({data, isActive, onPress}) {
    return (
        <TouchableOpacity style={{flexDirection: 'row', width: screenWidth, padding: 10, alignItems: 'center'}} onPress={() => onPress(data)}>
            <Text style={{width: 30, fontSize: 14, color: '#bdbdbd'}}>{data.id}</Text>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 14, color: isActive ? '#ff3d00' : '#212121'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: isActive ? '#ff3d00' : '#757575', marginTop: 4}}>{data.duration}</Text>
            </View>
            <TouchableOpacity style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_more.png')} style={{height: 15, width: 4, tintColor: '#bdbdbd'}}/>
            </TouchableOpacity>
        </TouchableOpacity>
    );
}

export default MusicStyle9;