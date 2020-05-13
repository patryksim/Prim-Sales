import React, {useContext, useEffect, useRef, useState} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import SoundPlayer from "react-native-sound-player";

const DATA1 = [
    {id: '1', title: 'ROCK', image: 'music_1_header_1.png'},
    {id: '2', title: 'HIP HOP', image: 'music_1_header_2.png'},
    {id: '3', title: 'ROCK', image: 'music_1_header_1.png'},
];

const DATA2 = [
    {id: '1', title: 'Glass Animal', description: 'Pork Soda (Deluxe)', image: 'music_1_post_1.png'},
    {id: '2', title: 'MEW', description: 'Visuals', image: 'music_1_post_2.png'},
    {id: '3', title: 'Zedd', description: 'Pork Soda (Deluxe)', image: 'music_1_post_3.png'},
    {id: '4', title: 'Metallica', description: 'Pork Soda (Deluxe)', image: 'music_1_post_4.png'},
];

const screenWidth = Dimensions.get('window').width;

function MusicStyle1 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    const [isPlaying, setPlaying] = useState(false);

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

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Browse'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                isHome={true}
                enableMore={false}
                bgColor='#212121'
            />
            <ScrollView>
                <ItemTitle title='Browse By Genre'/>
                <FlatList
                    contentContainerStyle={{padding: 5}}
                    horizontal
                    data={DATA1}
                    renderItem={({item}) => <ItemImage data={item}/>}
                    keyExtractor={item => item.id}
                />
                <ItemTitle title='Top 40 Albums'/>
                <MultiColumnView
                    containerStyle={{padding: 5}}
                    data={DATA2}
                    numColumns={2}
                    renderItem={(item) => <TopItem data={item}/>}
                />

            </ScrollView>
            <View style={{height: 64, backgroundColor: '#212121', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
                <View style={{flex: 1, marginLeft: 5}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>Carry Me to Safety - Live at Copenhagen...</Text>
                    <Text style={{fontSize: 12, color: '#757575'}}>MEW</Text>
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

function ItemImage({data}) {
    return (
        <ImageBackground source={{uri: storageImageUrl('music', data.image)}}
                         style={{
                             height: 165,
                             width: 220,
                             alignItems: 'center',
                             justifyContent: 'center',
                             padding: 10,
                             margin: 5,
                             borderRadius: 3,
                             shadowRadius: 3,
                             shadowOffset: {width: 0, height: 2},
                             shadowOpacity: 0.3,
                             overflow: 'hidden'
                         }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'white'}}>{data.title}</Text>
        </ImageBackground>
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
                    <Text style={{fontSize: 14, color: '#212121'}}>12 Songs</Text>
                </View>
                <TouchableOpacity style={{padding: 5}}>
                    <Image source={require('../../assets/icon/ic_more.png')} style={{height: 15, width: 4, tintColor: '#bdbdbd'}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MusicStyle1;