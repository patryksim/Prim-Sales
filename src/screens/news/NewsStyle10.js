import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const DATA = [
    {
        id: '1',
        user: 'Christina Meyers',
        avatar: require('../../assets/icon/ic_profile1.png'),
        image: 'news_10_img_1.jpg',
        text: 'We also talk about the future of work as the robots advance, and we ask whether a retro phone',
        datetime: 'Fri, 12 May 2017 • 14.30'
    },
    {
        id: '2',
        user: 'Jared Adams',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: 'news_10_img_2.jpg',
        text: 'We also talk about the future of work as the robots advance, and we ask whether a retro phone',
        datetime: 'Fri, 12 May 2017 • 14.30'
    },
];

const screenWidth = Dimensions.get('window').width;

function NewsStyle10() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='Instagram Feeds'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                enableMore={false}
                bgColor='#cc0001'
            />
            <FlatList
                contentContainerStyle={{paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemNews data={item} snackbarRef={snackbarRef}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemNews({data, snackbarRef}) {
    return (
        <View style={{width: screenWidth, flexDirection: 'row'}}>
            <View style={{
                flex: 1,
                marginHorizontal: 10,
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <View style={{padding: 10, flexDirection: 'row', alignItems: 'space-between'}}>
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
                    <TouchableOpacity style={{
                        width: 100,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: 6,
                        justifyContent: 'flex-end'
                    }}
                                      onPress={() => snackbarRef.current.ShowSnackBarFunction('retweet clicked')}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{height: 22, width: 22, tintColor: '#b0bec5', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#b0bec5', marginLeft: 10}}>25</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color: '#37474f', fontSize: 14, marginHorizontal: 15, marginTop: 10}}>We also talk about
                    the future of work as the robots</Text>
                <Text style={{color: '#ff9800', fontSize: 14, marginHorizontal: 15, marginVertical: 10}}>#advance #retro
                    #instagram</Text>
                <Image source={{uri: storageImageUrl('news', data.image)}}
                       style={{height: 230, width: '100%', resizeMode: 'cover'}}/>
                <View style={{
                    padding: 10,
                    marginVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{width: 100, flexDirection: 'row', alignItems: 'center', marginLeft: 6}}
                                      onPress={() => snackbarRef.current.ShowSnackBarFunction('detail comment clicked')}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ff9800'}}>10 COMMENTS</Text>
                    </TouchableOpacity>
                    <View style={{flex: 1}}/>
                    <TouchableOpacity style={{width: 70, alignItems: 'center', justifyContent: 'center'}}
                                      onPress={() => snackbarRef.current.ShowSnackBarFunction('share clicked')}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ff9800'}}>SHARE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: 70, alignItems: 'center', justifyContent: 'center'}}
                                      onPress={() => snackbarRef.current.ShowSnackBarFunction('open clicked')}>
                        <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ff9800'}}>OPEN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default NewsStyle10;