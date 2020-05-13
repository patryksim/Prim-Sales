import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const DATA = [
    {
        id: '1',
        type: 'picture',
        user: 'Gabriella Madelaine',
        avatar: require('../../assets/icon/ic_profile1.png'),
        image: 'activity_4_img_1.jpg',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        type: 'picture',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: 'activity_4_img_2.jpg',
        datetime: '3 days ago'
    },
    {
        id: '3',
        type: 'picture',
        user: 'Gabriella Madelaine',
        avatar: require('../../assets/icon/ic_profile1.png'),
        image: 'activity_4_img_1.jpg',
        datetime: '3 days ago'
    },
];

function ActivityStyle4() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
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
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemActivity({data}) {
    return (
        <View style={{flexDirection: 'row'}}>
            <View style={{
                flex: 1,
                marginHorizontal: 15,
                marginTop: 15,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <View style={{padding: 10, flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={data.avatar}
                           style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginLeft: 10,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161'}}>{data.user} </Text>
                        <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
                <Image source={{uri: storageImageUrl('activity', data.image)}}
                       style={{height: 170, width: '100%', resizeMode: 'cover'}}/>
                <View style={{
                    padding: 10,
                    marginVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>1347</Text>
                        <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                               style={{width: 14, height: 10, marginLeft: 25, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>19546</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ActivityStyle4;