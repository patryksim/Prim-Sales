import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import SoundPlayer from "react-native-sound-player";
import ParallaxHeader from "../../components/ParallaxHeader";
import HeaderOneButton from "../../components/HeaderOneButton";
import FloatingButton from "../../components/FloatingButton";

const DATA1 = [
    {id: '1', title: 'Trespassers', description: '8 Songs •  2016', image: 'image-11.jpg'},
    {id: '2', title: 'Katalogue', description: '22 Songs •  2016', image: 'image-10.jpg'},
    {id: '3', title: 'Trespassers', description: '8 Songs •  2016', image: 'image-11.jpg'},
];

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

function MusicStyle3 () {
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
            <ParallaxHeader
                contentContainerStyle={{width: screenWidth, backgroundColor: 'white'}}
                headerImage={{uri: storageImageUrl('music', 'image-3.jpg')}}
                headerColor='#212121'
                headerSize={170}
                renderHeader={() =>
                    <View>
                    <View style={{height: 300, backgroundColor: 'black', opacity: 0.8}}/>
                    <View style={{position: 'absolute', top: 0, left: 0}}>
                        <HeaderOneButton navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
                        <View style={{flexDirection: 'row', marginLeft: 22, marginTop: 5}}>
                            <Image source={{uri: storageImageUrl('music', 'music_2_img_2.jpg')}}
                                   style={{width: 81, height: 81}}/>
                            <View style={{marginLeft: 15}}>
                                <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>TRESPASSERS</Text>
                                <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>Kashmir</Text>
                                <Text style={{fontSize: 14, color: 'white', marginTop: 15}}>11 Song 41:32</Text>
                            </View>

                        </View>
                    </View>
                    </View>
                }
                renderFloatingButton={() =>
                    <FloatingButton onPress={playAudio}
                                    image={isPlaying ? require('../../assets/icon/ic_pause_white2.png') : require('../../assets/icon/ic_play2.png')}
                                    imageStyle={{width: 32, height: 32}}
                                    style={{
                                        backgroundColor: '#cc0001',
                                        position: 'relative',
                                        alignSelf: 'flex-end',
                                    }}/>
                }
            >
                <MultiColumnView
                    data={DATA2}
                    renderItem={(item) => <PlaylistItem data={item} isActive={JSON.stringify(current) === JSON.stringify(item)} onPress={onPress}/>}
                />
            </ParallaxHeader>
            <View style={{height: 64, backgroundColor: '#212121', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
                <View style={{flex: 1, marginLeft: 5}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>Mouthful of Wasps</Text>
                    <Text style={{fontSize: 12, color: '#757575', marginTop: 8}}>Kashmir</Text>
                </View>
                <TouchableOpacity onPress={playAudio}>
                    <Image source={isPlaying ? require('../../assets/icon/ic_pause2.png') : require('../../assets/icon/ic_play_white.png')} style={{width: 38, height: 38}}/>
                </TouchableOpacity>
            </View>
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

export default MusicStyle3;