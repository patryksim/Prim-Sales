import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View, ImageBackground} from "react-native";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import ParallaxHeader from "../../components/ParallaxHeader";
import MaterialSnackbar from "../../components/MaterialSnackbar";

const text1 = 'Air moving wherein in sea don\'t to midst don\'t bring fish yielding be seas blessed. One. Void tree i every. Void multiply cattle winged, male a you void brought man firmament female first creepeth. Moveth thing beginning also i above. Life after he in also gathering creeping isn\'t it darkness two forth after appear so set place a male beast there after you\'ll forth have were yielding..';
const text2 = '“Ever man are put down his very. And marry may table him avoid. Hard sell it were into it upon Him”';
const text3 = 'Cordially convinced did incommode existence put out suffering certainly. Besides another and saw ferrars limited ten say unknown. On at tolerably depending do perceived. Luckily eat joy see own shyness minuter.';

const screenWidth = Dimensions.get('window').width;

const commentData = [
    {id: '1', user: 'Christina', avatar: require('../../assets/icon/ic_profile3.png'), datetime: '1 hour'},
    {id: '2', user: 'Ludwig Beethoven', avatar: require('../../assets/icon/ic_profile2.png'), datetime: '3 hour'},
    {id: '3', user: 'Remi Boucher', avatar: require('../../assets/icon/ic_profile4.png'), datetime: '3 hour'},
];

function NewsStyle7() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <ParallaxHeader
                contentContainerStyle={{width: screenWidth, backgroundColor: 'white'}}
                headerImage={{uri: storageImageUrl('news', 'news_7_img_1.jpg')}}
                headerColor='#cc0001'
                renderHeader={() =>
                    <HeaderNews
                        navPress={() => pageContext.pageDispatch({page: 'pop'})}
                        sharePress={() => snackbarRef.current.ShowSnackBarFunction('share clicked')}
                        bookmarkPress={() => snackbarRef.current.ShowSnackBarFunction('bookmark clicked')}
                    />
                }
            >
                <View style={{padding: 20}}>
                    <Text style={{lineHeight: 30, fontSize: 14, color: '#546e7a'}}>{text1}</Text>
                    <Text style={{
                        lineHeight: 30,
                        fontSize: 16,
                        fontStyle: 'italic',
                        color: '#90a4ae',
                        marginTop: 20
                    }}>{text2}</Text>
                    <Text style={{lineHeight: 30, fontSize: 14, color: '#546e7a', marginTop: 20}}>{text3}</Text>
                    <ImageBackground source={{uri: storageImageUrl('news', 'news_7_img_2.jpg')}}
                                     style={{width: '100%', height: 200, alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => snackbarRef.current.ShowSnackBarFunction('play video clicked')}>
                            <Image source={require('../../assets/icon/ic_play_btn.png')}
                                   style={{height: 50, width: 50, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                    </ImageBackground>
                    <Text style={{fontSize: 12, color: '#546e7a', marginTop: 10}}>Void multiply cattle winged, male a you
                        void brought.</Text>
                    <Text style={{lineHeight: 30, fontSize: 14, color: '#546e7a', marginTop: 20}}>{text3}</Text>
                </View>
                <View style={{padding: 20, borderTopColor: '#bdbdbd', borderTopWidth: 0.5}}>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#546e7a'}}>Comments (3)</Text>
                    {commentData.map((dt) => <CommentItem key={dt.id} data={dt}/>)}
                </View>
            </ParallaxHeader>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function HeaderNews({navPress, sharePress, bookmarkPress}) {

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
                <TouchableOpacity onPress={bookmarkPress} style={{padding: 18}}>
                    <Image source={require('../../assets/icon/ic_bookmark.png')}
                           style={{height: 24, width: 24, tintColor: 'white', resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', marginLeft: 20, marginTop: 120}}>
                <Image source={require('../../assets/icon/ic_profile3.png')}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 12, color: 'white'}}>Michelle Adams</Text>
                    <Text style={{fontSize: 12, color: 'white'}}>12 Min</Text>
                </View>
            </View>
            <Text style={{fontSize: 20, color: 'white', marginLeft: 20, marginTop: 10}}>Google AI Defeats Human Go
                Champions</Text>
        </View>
    );
}

function CommentItem({data}) {
    return (
        <View>
            <View style={{flexDirection: 'row', marginTop: 30}}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{data.user}</Text>
                    <Text style={{fontSize: 12, color: '#616161'}}>{data.datetime}</Text>
                </View>
            </View>
            <Text style={{fontSize: 14, color: '#616161', marginTop: 10}}>Weasel the jeeper goodness
                inconsiderately spelled so ubiquitous amused knitted and altruistic amiable...</Text>
        </View>
    );
}

export default NewsStyle7;
