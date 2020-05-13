import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {
        id: '1',
        user: 'Michael Adams',
        avatar: require('../../assets/icon/ic_profile1.png'),
        image: 'news_5_img_1.jpg',
        title: 'Tech Tent: Old phones and safe social',
        text: 'We also talk about the future of work as the robots advance, and we ask whether a retro phone',
        datetime: '15 min',
        category: 'Lifestyle',
        color: '#cc0001'
    },
    {
        id: '2',
        user: 'Michael Adams',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: 'news_5_img_2.jpg',
        title: 'Google AI Defeats Human Go Champions',
        text: 'We also talk about the future of work as the robots advance, and we ask whether a retro phone',
        datetime: '15 min',
        category: 'Techno',
        color: '#0091ea'

    },
    {
        id: '3',
        user: 'Michael Adams',
        avatar: require('../../assets/icon/ic_profile4.png'),
        image: 'news_5_img_3.jpg',
        title: 'Thousands hit as glitch halts BA flights',
        text: 'We also talk about the future of work as the robots advance, and we ask whether a retro phone',
        datetime: '15 min',
        category: 'Business',
        color: '#ff9800'

    },
];

const screenWidth = Dimensions.get('window').width;

function NewsStyle6() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='News'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#cc0001'
                shadow={false}
            />
            <TabHeader titles={['WHAT\'S NEW', 'POPULAR', 'FAVORITED']} bgColor='#cc0001' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <FlatList
                contentContainerStyle={{paddingTop: 10, paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemNews data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemNews({data}) {
    return (
        <View style={{width: screenWidth, padding: 20, borderBottomWidth: 0.5, borderBottomColor: '#bdbdbd'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{flex: 1, marginLeft: 10}}>
                    <Text style={{fontSize: 12, color: '#757575'}}>{data.user}</Text>
                    <View style={{flexDirection: 'row', marginTop: 2, alignItems: 'center'}}>
                        <Text style={{fontSize: 12, color: '#757575'}}>{data.datetime}</Text>
                        <Text style={{fontSize: 12, color: data.color}}> • {data.category}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={require('../../assets/icon/ic_bookmark.png')}
                           style={{height: 24, width: 24, resizeMode: 'contain'}}/>
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
    );
}

export default NewsStyle6;