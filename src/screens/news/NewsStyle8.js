import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TabHeader from "../../components/TabHeader";

const topStoriesData = [
    {id: '1', image: 'news_4_img_1.jpg', title: 'The World Global Warming Annual Summit ', source: 'wpbootstrap.net', datetime: '15 min'},
    {id: '2', image: 'news_4_img_2.jpg', title: 'US President Inaugurations held in Washington', source: 'elegantthemes.com', datetime: '1 hour'},
    {id: '3', image: 'news_4_img_3.jpg', title: 'Spotlight on Medtech Outsourcing and Innovation', source: 'themify.me', datetime: '1 hour'},
];

const screenWidth = Dimensions.get('window').width;

function NewsStyle8() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='Wordpress Blog'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#cc0001'
                shadow={false}
            />
            <TabHeader titles={['RECENT POST', 'THEMES', 'SECURITY']} bgColor='#cc0001' activeIndex={0}
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
                <View style={{
                    margin: 10,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                }}>
                    {topStoriesData.map((dt) => <ItemTopStories key={dt.id} data={dt}/>)}
                </View>
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
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#212121'}}>{data.title}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 14, color: '#757575', lineHeight: 20, marginTop: 10}}>{data.source}</Text>
                    <Text style={{fontSize: 14, color: '#757575', lineHeight: 20, marginTop: 10}}>{data.datetime}</Text>
                </View>
            </View>
        </View>
    );
}

export default NewsStyle8;