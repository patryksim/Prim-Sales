import React, {useContext, useRef} from 'react';
import {FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TabHeader from "../../components/TabHeader";

const DATA1 = [
    {id: '1', title: 'Spirits Musical Behaved on Farther', description: '235 views', image: 'music_14_img_1.jpg'},
    {id: '2', title: 'Spirits Musical Behaved on Farther', description: '235 views', image: 'music_14_img_2.jpg'},
    {id: '3', title: 'Spirits Musical Behaved on Farther', description: '235 views', image: 'music_14_img_1.jpg'},
];

const DATA2 = [
    {id: '1', title: 'Spirits Musical Behaved on Farther', description: '235 views', image: 'music_14_img_3.jpg'},
    {id: '2', title: 'Spirits Musical Behaved on Farther', description: '235 views', image: 'music_14_img_4.jpg'},
    {id: '3', title: 'Spirits Musical Behaved on Farther', description: '235 views', image: 'music_14_img_3.jpg'},
];

function MusicStyle14 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='Browse Videos'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                isHome={true}
                bgColor='#212121'
                shadow={false}
            />
            <TabHeader titles={['TRENDING', 'SUGGESTION', 'MY VIDEOS']}
                       defaultTitleColor='gray' activeTitleColor='white' activeIndex={2}
                       bgColor='#212121' onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView>
                <ImageBackground source={{uri: storageImageUrl('music', 'music_14_header.jpg')}}
                                 style={{width: '100%', height: 120, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_profile2.png')}
                           style={{width: 47, height: 47, resizeMode: 'contain', marginLeft: 15}}/>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <Text style={{fontSize: 16, color: 'white'}}>Michael Hendley</Text>
                        <Text style={{fontSize: 12, color: 'white', marginTop: 8}}>270 Followers •  345 Followings</Text>
                    </View>
                </ImageBackground>
                <ItemTitle title='My Videos'/>
                <FlatList
                    contentContainerStyle={{padding: 5}}
                    horizontal
                    data={DATA1}
                    renderItem={({item}) => <TopItem data={item}/>}
                    keyExtractor={item => item.id}
                />
                <ItemTitle title='Watch Later'/>
                <FlatList
                    contentContainerStyle={{padding: 5}}
                    horizontal
                    data={DATA2}
                    renderItem={({item}) => <TopItem data={item}/>}
                    keyExtractor={item => item.id}
                />
            </ScrollView>
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
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{title}</Text>
            <TouchableOpacity style={{padding: 20}}>
                <Text style={{fontSize: 12, fontWeight: 'bold', color: '#ff3d00'}}>View All</Text>
            </TouchableOpacity>
        </View>
    );
}

function TopItem({data}) {

    return (
        <View style={{
            backgroundColor: 'white',
            width: 146,
            margin: 5,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3,
            shadowRadius: 3,
            borderRadius: 3,
            elevation: 3,
        }}>
            <View style={{height: 100, overflow: 'hidden',}}>
                <ImageBackground style={{height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
                                 source={{uri: storageImageUrl('music', data.image)}}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icon/ic_play2.png')} style={{width: 32, height: 32}}/>
                    </TouchableOpacity>
                </ImageBackground>
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

export default MusicStyle14;