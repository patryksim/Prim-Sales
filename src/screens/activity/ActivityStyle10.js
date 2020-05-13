import React, {useContext, useRef} from 'react';
import {Image, Text, View, ImageBackground} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {
        id: '1',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: '',
        title: 'Shanghai City Landscape',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic.',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        user: 'Christina',
        avatar: require('../../assets/icon/ic_profile1.png'),
        image: 'activity_10_img_2.jpg',
        title: 'Japanese Dining',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic.',
        datetime: '2 hour ago'
    },
];

function ActivityStyle10() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <ImageBackground source={{uri: storageImageUrl('activity', 'activity_10_img_1.jpg')}}
                         style={{flex: 1, backgroundColor: 'gray'}}>
            <MainContent data={DATA[0]}/>
            <MainContent data={DATA[1]}/>
            <View style={{position: 'absolute', width: '100%'}}>
                <HeaderThreeButton
                    title='Activity'
                    isHome={true}
                    navPress={() => pageContext.pageDispatch({page: 'pop'})}
                    searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                    morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                    bgColor='transparent'
                />

            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </ImageBackground>
    );
}

function MainContent({data}) {
    return (
        <ImageBackground source={{uri: storageImageUrl('activity', data.image)}} style={{flex: 1, justifyContent: 'flex-end', padding: 25}}>
            <View style={{flexDirection: 'row'}}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 14}}>
                        <Text style={{fontWeight: 'bold', color: 'white'}}>{data.user}</Text>
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 4, alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, color: 'white', marginLeft: 5}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20, color: 'white'}}>{data.title}</Text>
            <Text style={{fontSize: 14, marginTop: 5, color: 'white'}}>{data.text}</Text>
            <View style={{
                marginTop: 5,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_love_red.png')}
                           style={{width: 10, height: 10, tintColor: 'gray', resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>1347</Text>
                    <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                           style={{
                               width: 14,
                               height: 10,
                               tintColor: 'gray',
                               marginLeft: 25,
                               resizeMode: 'contain'
                           }}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>19546</Text>
                </View>
            </View>
        </ImageBackground>

    );
}

export default ActivityStyle10;