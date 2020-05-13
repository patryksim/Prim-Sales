import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TabHeader from "../../components/TabHeader";

const topStoriesData = [
    {
        id: '1',
        image: 'news_4_img_1.jpg',
        title: 'The World Global Warming Annual Summit ',
        writter: 'Jared Adams',
        datetime: '12 May 2020'
    },
    {
        id: '2',
        image: 'news_4_img_2.jpg',
        title: 'US President Inaugurations held in Washington',
        writter: 'Jared Adams',
        datetime: '12 May 2020'
    },
    {
        id: '3',
        image: 'news_4_img_3.jpg',
        title: 'Spotlight on Medtech Outsourcing and Innovation',
        writter: 'Jared Adams',
        datetime: '12 May 2020'
    },
];

const screenWidth = Dimensions.get('window').width;

function NewsStyle11() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='Youtube Videos'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#cc0001'
                shadow={false}
            />
            <TabHeader titles={['HOME', 'TRENDING', 'SUBSCRIPTION']} bgColor='#cc0001' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView>
                <ImageBackground source={{uri: storageImageUrl('news', 'news_4_bg.jpg')}}
                                 style={{
                                     width: screenWidth,
                                     height: 190,
                                     justifyContent: 'flex-end',
                                     paddingBottom: 20,
                                     paddingHorizontal: 20
                                 }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        marginTop: 20,
                        color: 'white',
                    }}>Beautiful WordPress Themes With Lots of Features</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: 'white',
                            lineHeight: 20,
                            marginTop: 10
                        }}>Jared Adams</Text>
                        <Text style={{
                            fontSize: 14,
                            marginLeft: 25,
                            color: 'white',
                            lineHeight: 20,
                            marginTop: 10
                        }}>12 May 2020</Text>
                    </View>
                </ImageBackground>
                {topStoriesData.map((dt) => <ItemTopStories key={dt.id} data={dt}/>)}
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemTopStories({data}) {
    return (
        <View style={{
            width: screenWidth,
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
        }}>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                padding: 15,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
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
                        <Text style={{
                            fontSize: 14,
                            color: '#37474f',
                            lineHeight: 20,
                            marginTop: 10
                        }}>{data.writter}</Text>
                        <Text style={{
                            fontSize: 14,
                            color: '#78909c',
                            lineHeight: 20,
                            marginTop: 10
                        }}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default NewsStyle11;