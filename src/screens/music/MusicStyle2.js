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
    {id: '1', title: 'Trespassers', description: '8 Songs •  2016', image: 'music_2_img_1.jpg'},
    {id: '2', title: 'Katalogue', description: '22 Songs •  2016', image: 'music_2_img_2.jpg'},
    {id: '3', title: 'Trespassers', description: '8 Songs •  2016', image: 'music_2_img_1.jpg'},
];

const DATA2 = [
    {id: '1', title: 'Rocket brothers', duration: '2.35'},
    {id: '2', title: 'Mouthful of Wasps', duration: '2.35'},
    {id: '3', title: 'The Aftermath', duration: '2.35'},
    {id: '4', title: 'Mom In Love, Dad In Space', duration: '2.35'},
    {id: '5', title: 'Kaliformia', duration: '2.35'},
];

const screenWidth = Dimensions.get('window').width;

function MusicStyle2 () {
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
            <ParallaxHeader
                contentContainerStyle={{width: screenWidth, backgroundColor: 'white'}}
                headerImage={{uri: storageImageUrl('music', 'image-12.jpg')}}
                headerColor='#212121'
                renderHeader={() =>
                    <View style={{alignItems: 'center'}}>
                        <HeaderOneButton title='Artist' navPress={() => pageContext.pageDispatch({page: 'pop'})}/>
                        <Text style={{fontSize: 24, color: 'white', marginTop: 50}}>KASHMIR</Text>
                        <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>12,394 Mothly Listeners</Text>
                        <View style={{
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderColor: 'white',
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            marginTop: 15
                        }}>
                            <Image source={require('../../assets/icon/ic_follow_white.png')}
                                   style={{width: 17, height: 17}}/>
                            <Text style={{fontSize: 14, color: 'white', marginLeft: 10}}>FOLLOW</Text>
                        </View>
                        <Text style={{fontSize: 14, color: 'white', marginTop: 5}}>12,394 Followers</Text>
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
                <ItemTitle title='Featured Albums'/>
                <FlatList
                    contentContainerStyle={{padding: 5}}
                    horizontal
                    data={DATA1}
                    renderItem={({item}) => <FeaturedItem data={item}/>}
                    keyExtractor={item => item.id}
                />
                <ItemTitle title='Popular Songs'/>
                <MultiColumnView
                    data={DATA2}
                    renderItem={(item) => <PopularItem data={item}/>}
                />
            </ParallaxHeader>
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
            paddingLeft: 10,
            backgroundColor: 'white',
        }}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#616161'}}>{title}</Text>
        </View>
    );
}

function FeaturedItem({data}) {
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

function PopularItem({data}) {
    return (
        <View style={{flexDirection: 'row', width: screenWidth, padding: 10, alignItems: 'center'}}>
            <Text style={{width: 30, fontSize: 14, color: '#bdbdbd'}}>{data.id}</Text>
            <View style={{flex: 1}}>
                <Text style={{fontSize: 14, color: '#212121'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: '#757575', marginTop: 4}}>{data.duration}</Text>
            </View>
            <TouchableOpacity style={{padding: 10}}>
                <Image source={require('../../assets/icon/ic_more.png')} style={{height: 15, width: 4, tintColor: '#bdbdbd'}}/>
            </TouchableOpacity>
        </View>
    );
}

export default MusicStyle2;