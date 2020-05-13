import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TabHeader from "../../components/TabHeader";

const topStoriesData = [
    {id: '1', image: 'news_4_img_1.jpg', title: 'The World Global Warming Annual Summit ', writter: 'Michael Adams'},
    {id: '2', image: 'news_4_img_2.jpg', title: 'US President Inaugurations held in Washington', writter: 'Roy Montgomery'},
    {id: '3', image: 'news_4_img_3.jpg', title: 'Spotlight on Medtech Outsourcing and Innovation', writter: 'Roy Montgomery'},
];

const recentUpdateData = [
    {id: '1', image: 'news_4_img_2.jpg', title: 'Vettel is Ferrari Number One - Hamilton', category: 'SPORT', color: '#ff5722'},
    {id: '2', image: 'news_4_img_3.jpg', title: 'The City in Pakistan that Loves a British Hairstyles', category: 'LIFESTYLE', color: '#afb42b'},
];

const screenWidth = Dimensions.get('window').width;

function NewsStyle4() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    let topStoriesLayout = [];
    let recentUpdateLayout = [];
    for (let i = 0; i < topStoriesData.length; i++) {
        topStoriesLayout.push(<ItemTopStories key={i} data={topStoriesData[i]}/>)
    }
    for (let i = 0; i < recentUpdateData.length; i++) {
        recentUpdateLayout.push(<ItemRecentUpdates key={i} data={recentUpdateData[i]}/>)
    }

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='Explore'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#cc0001'
                shadow={false}
            />
            <TabHeader titles={['WHAT\'S NEW', 'POPULAR', 'FAVORITED']} bgColor='#cc0001' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView>
                <ImageBackground source={{uri: storageImageUrl('news', 'news_4_bg.jpg')}}
                                 style={{
                                     width: screenWidth,
                                     height: 190,
                                     alignItems: 'center',
                                     justifyContent: 'center',
                                     paddingHorizontal: 50
                                 }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 20,
                        color: 'white',
                        textAlign: 'center'
                    }}>How Terriers & Royals Gatecrashed Final</Text>
                    <Text style={{fontSize: 14, marginTop: 10, color: 'white', textAlign: 'center'}}>Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit, sed do eiusmod.</Text>
                </ImageBackground>
                <Text style={{color: '#616161', fontSize: 14, marginTop: 30, marginLeft: 10, marginBottom: 10}}>Top Stories</Text>
                <View style={{
                    margin: 10,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                }}>
                    {topStoriesLayout}
                </View>
                <Text style={{color: '#616161', fontSize: 14, marginTop: 30, marginLeft: 10, marginBottom: 10}}>Recent Updates</Text>
                {recentUpdateLayout}
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemTopStories({data}) {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 15,
            borderBottomColor: '#bdbdbd',
            borderBottomWidth: 0.5
        }}>
            <Image source={{uri: storageImageUrl('news', data.image)}}
                   style={{
                       width: 80,
                       height: 80,
                       borderRadius: 3,
                       overflow: 'hidden',
                       shadowOffset: {width: 0, height: 2},
                       shadowOpacity: 0.3
                   }}/>
            <View style={{flex: 1, paddingLeft: 15}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#616161'}}>{data.title}</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 20, marginTop: 10}}>{data.writter}</Text>
            </View>
        </View>
    );
}

function ItemRecentUpdates({data}) {
    return (
        <View style={{width: screenWidth}}>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 5,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
            }}>
                <Image source={{uri: storageImageUrl('news', data.image)}}
                       style={{
                           width: '100%',
                           height: 160,
                           borderRadius: 3,
                           overflow: 'hidden',
                           shadowOffset: {width: 0, height: 2},
                           shadowOpacity: 0.3
                       }}/>
                <View style={{padding: 10}}>
                    <View style={{width: 100, alignItems: 'center', borderRadius: 5, padding: 2, backgroundColor: data.color}}>
                        <Text style={{fontSize: 14, color: 'white'}}>{data.category}</Text>
                    </View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', color: '#263238', marginVertical: 8}}>{data.title}</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain', tintColor: 'gray'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#263238'}}>15 min</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default NewsStyle4;