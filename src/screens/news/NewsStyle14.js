import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import ParallaxHeader from "../../components/ParallaxHeader";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import FloatingButton from "../../components/FloatingButton";

const screenWidth = Dimensions.get('window').width;

const stationData = [
    {id: '1', image: 'news_14_img_1.jpg', title: 'Fox News Talk', description: 'Special Report with Bret Bair'},
];

const showsData = [
    {id: '1', image: 'news_14_img_1.jpg', title: '#Mediabuzz', description: 'New York, US'},
    {id: '2', image: 'news_14_img_2.jpg', title: 'My Favorite Playlist', description: 'London, England'},
    {id: '3', image: 'news_14_img_2.jpg', title: 'All Time Rock', description: 'Hardtalk Interview Newsmaker'},
    {id: '4', image: 'news_14_img_3.jpg', title: 'Blues', description: 'New York, US'},
    {id: '5', image: 'news_14_img_3.jpg', title: 'Study Songs', description: 'New York, US'},
];

function NewsStyle14() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ParallaxHeader
                contentContainerStyle={{width: screenWidth, backgroundColor: 'white'}}
                headerImage={{uri: storageImageUrl('news', 'news_14_bg.jpg')}}
                headerColor='#cc0001'
                renderHeader={() =>
                    <HeaderNews
                        navPress={() => pageContext.pageDispatch({page: 'pop'})}
                        sharePress={() => snackbarRef.current.ShowSnackBarFunction('share clicked')}
                        lovePress={() => snackbarRef.current.ShowSnackBarFunction('love clicked')}
                        morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                    />
                }
                renderFloatingButton={() =>
                    <FloatingButton onPress={() => snackbarRef.current.ShowSnackBarFunction('button play clicked')}
                                    image={require('../../assets/icon/ic_play2.png')}
                                    imageStyle={{width: 32, height: 32}}
                                    style={{
                                        backgroundColor: '#cc0001',
                                        position: 'relative',
                                        alignSelf: 'flex-end',
                                    }}/>
                }
            >
                <View style={{flexDirection: 'row', padding: 20}}>
                    <Image source={{uri: storageImageUrl('news', 'news_14_bg.jpg')}}
                           style={{height: 50, width: 75, resizeMode: 'cover'}}/>
                    <View style={{marginLeft: 15}}>
                        <Text style={{fontSize: 20, color: '#546e7a'}}>Fox News Talk</Text>
                        <Text style={{fontSize: 12, color: '#546e7a'}}>New York, US • 589.6K favorites</Text>
                    </View>
                </View>
                <View style={{padding: 20, borderTopColor: '#bdbdbd', borderTopWidth: 0.5}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#757575'}}>Genre</Text>
                    <Text style={{fontSize: 14, color: '#455a64', marginTop: 4}}>Talk, Politic, National News</Text>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#757575', marginTop: 10}}>Description</Text>
                    <Text style={{fontSize: 14, color: '#455a64', marginTop: 4}}>I should be incapable of drawing a single stroke at
                        the present moment and yet I feel that I never was a
                        greater artist than now. </Text>
                </View>
                <View style={{padding: 20, borderTopColor: '#bdbdbd', borderTopWidth: 0.5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#546e7a'}}>Station</Text>
                    {stationData.map((dt) => <StationItem key={dt.id} data={dt}/>)}
                </View>
                <View style={{padding: 20, borderTopColor: '#bdbdbd', borderTopWidth: 0.5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#546e7a'}}>Shows</Text>
                    {showsData.map((dt) => <StationItem key={dt.id} data={dt}/>)}
                </View>
            </ParallaxHeader>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function HeaderNews({navPress, sharePress, lovePress, morePress}) {

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
                <View style={{flex: 1}}/>
                <TouchableOpacity onPress={sharePress} style={{padding: 10}}>
                    <Image source={require('../../assets/icon/ic_share.png')}
                           style={{height: 18, width: 18, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={lovePress} style={{padding: 18}}>
                    <Image source={require('../../assets/icon/ic_love_stroke.png')}
                           style={{height: 34, width: 34, resizeMode: 'contain'}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={morePress} style={{padding: 18}}>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{height: 20, width: 4, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

function StationItem({data}) {
    return (
        <View style={{flexDirection: 'row', marginVertical: 20}}>
            <Image source={{uri: storageImageUrl('news', data.image)}}
                   style={{height: 40, width: 40, resizeMode: 'cover'}}/>
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: '#616161'}}>{data.description}</Text>
            </View>
        </View>
    );
}

export default NewsStyle14;