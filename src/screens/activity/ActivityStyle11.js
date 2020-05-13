import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import FloatingButton from "../../components/FloatingButton";

const DATA = [
    {
        id: '1',
        user: 'Christina',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: null,
        title: 'Today’s Post from Greenland!',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic.',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        user: 'Christina',
        avatar: require('../../assets/icon/ic_profile1.png'),
        image: 'activity_11_img.jpg',
        title: 'Shanghai City Landscape',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous amused knitted and altruistic.',
        datetime: '2 hour ago'
    },
];

function ActivityStyle11() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
            <HeaderThreeButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
            />
            <FlatList
                contentContainerStyle={{paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemActivity data={item}/>}
                keyExtractor={item => item.id}
            />
            <FloatingButton onPress={() => snackbarRef.current.ShowSnackBarFunction('button plus clicked')}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemActivity({data}) {
    return (
        <View style={{flex: 1, justifyContent: 'flex-end', borderBottomColor: '#eeeeee', borderBottomWidth: 1}}>
            <View style={{flexDirection: 'row', padding: 15}}>
                <Image source={data.avatar}
                       style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize: 14}}>
                        <Text style={{fontWeight: 'bold', color: '#616161'}}>{data.user}</Text>
                        <Text style={{color: '#616161'}}> Posted</Text>
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 4, alignItems: 'center'}}>
                        <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
            {data.image !== null && (
                <Image source={{uri: storageImageUrl('activity', data.image)}}
                       style={{width: '100%', height: 190, marginTop: 10, resizeMode: 'cover'}}/>
            )}
            <Text style={{fontSize: 20, paddingHorizontal: 15, fontWeight: 'bold', marginTop: 20, color: '#616161'}}>{data.title}</Text>
            <Text style={{fontSize: 14, paddingHorizontal: 15, marginTop: 5, color: '#616161'}}>{data.text}</Text>
            <View style={{
                marginTop: 5,
                padding: 15,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_love_red.png')}
                           style={{width: 10, height: 10, tintColor: 'gray', resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>1347</Text>
                    <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                           style={{
                               width: 14,
                               height: 10,
                               tintColor: 'gray',
                               marginLeft: 25,
                               resizeMode: 'contain'
                           }}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>19546</Text>
                </View>
            </View>
        </View>

    );
}

export default ActivityStyle11;