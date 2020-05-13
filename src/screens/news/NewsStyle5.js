import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const DATA = [
    {
        id: '1',
        user: 'Michael Adams',
        avatar: require('../../assets/icon/ic_profile1.png'),
        image: 'news_5_img_1.jpg',
        title: 'Tech Tent: Old phones and safe social',
        text: 'We also talk about the future of work as the robots advance, and we ask whether a retro phone',
        datetime: '15 min'
    },
    {
        id: '2',
        user: 'Michael Adams',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: 'news_5_img_2.jpg',
        title: 'Google AI Defeats Human Go Champions',
        text: 'We also talk about the future of work as the robots advance, and we ask whether a retro phone',
        datetime: '15 min'
    },
    {
        id: '3',
        user: 'Michael Adams',
        avatar: require('../../assets/icon/ic_profile4.png'),
        image: 'news_5_img_3.jpg',
        title: 'Thousands hit as glitch halts BA flights',
        text: 'We also talk about the future of work as the robots advance, and we ask whether a retro phone',
        datetime: '15 min'
    },
];

const screenWidth = Dimensions.get('window').width;

function NewsStyle5() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <ImageBackground source={{uri: storageImageUrl('news', 'news_5_bg.jpg')}}
                         imageStyle={{height: 200}} style={{flex: 1, alignItems: 'center', backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Technology'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                enableMore={false}
                shadow={false}
            />
            <FlatList
                contentContainerStyle={{paddingTop: 100, paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemNews data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

function ItemNews({data}) {
    return (
        <View style={{width: screenWidth}}>
            <View style={{
                marginHorizontal: 10,
                marginTop: 10,
                padding: 15,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <Image source={data.avatar}
                           style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 14}}>
                            <Text style={{fontWeight: 'bold', color: '#616161'}}>{data.user}</Text>
                        </Text>
                        <View style={{flexDirection: 'row', marginTop: 2, alignItems: 'center'}}>
                            <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icon/ic_more.png')}
                               style={{height: 15, width: 10, tintColor: '#bdbdbd', resizeMode: 'contain'}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', marginTop: 15}}>
                    <Image source={{uri: storageImageUrl('news', data.image)}}
                           style={{height: 100, width: '30%', resizeMode: 'cover'}}/>
                    <View style={{paddingLeft: 20, flex: 1}}>
                        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#616161'}}>{data.title}</Text>
                        <Text style={{fontSize: 14, marginTop: 5, color: '#616161', lineHeight: 25}}>{data.text}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default NewsStyle5;