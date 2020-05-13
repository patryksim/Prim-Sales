import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const DATA_TYPE = {
    TEXT: 'text',
    IMAGE: 'image',
    ADD_FRIEND: 'addfriend',
};

const DATA = [
    {
        id: '1',
        type: DATA_TYPE.TEXT,
        action: 'Posted',
        user: 'Christopher Nolan',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: '',
        title: 'Shanghai City Landscape',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        type: DATA_TYPE.IMAGE,
        action: 'Liked a Post',
        user: 'Christopher Nolan',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: 'activity_13_img_1.jpg',
        title: 'Shanghai City Landscape',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: '14:30'
    },
    {
        id: '3',
        type: DATA_TYPE.ADD_FRIEND,
        action: 'Added 3 friends',
        user: 'Christopher Nolan',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: '',
        title: '',
        text: '',
        datetime: '3 days ago'
    },
    {
        id: '4',
        type: DATA_TYPE.TEXT,
        action: 'Posted',
        user: 'Christopher Nolan',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: '',
        title: 'Shanghai City Landscape',
        text: 'Weasel the jeeper goodness inconsiderately spelled so ubiquitous.',
        datetime: '4 days ago'
    },
];

function ActivityStyle15() {
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
        <View>
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
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_profile1.png')}
                           style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                    <View style={{flex: 1, marginLeft: 10}}>
                        <Text style={{fontSize: 14}}>
                            <Text style={{fontWeight: 'bold', color: '#616161'}}>Gabriella Madelaine</Text>
                            <Text style={{color: '#616161'}}> {data.action}</Text>
                        </Text>
                        <View style={{flexDirection: 'row', marginTop: 2, alignItems: 'center'}}>
                            <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Text style={{fontSize: 14, color: '#2979ff'}}>Like</Text>
                    </TouchableOpacity>
                </View>
                {data.type === DATA_TYPE.TEXT && (
                    <>
                        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20, color: '#616161'}}>{data.title}</Text>
                        <Text style={{fontSize: 14, marginTop: 5, color: '#616161'}}>{data.text}</Text>
                    </>
                )}
                {data.type === DATA_TYPE.IMAGE && (
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20, backgroundColor: '#fafafa'}}>
                        <Image source={{uri: storageImageUrl('activity', data.image)}}
                               style={{height: 100, width: '30%', resizeMode: 'cover'}}/>
                        <View style={{padding: 10, flex: 1}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#616161'}}>{data.title}</Text>
                            <Text style={{fontSize: 10, color: '#bdbdbd'}}>Posted by Tony Ramirez</Text>
                            <Text style={{fontSize: 12, marginTop: 5, color: '#616161'}}>{data.text}</Text>
                        </View>
                    </View>
                )}
                {data.type === DATA_TYPE.ADD_FRIEND && (
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                        <Image source={require('../../assets/icon/ic_profile1.png')}
                               style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 20}}/>
                        <Image source={require('../../assets/icon/ic_profile2.png')}
                               style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 20}}/>
                        <Image source={require('../../assets/icon/ic_profile3.png')}
                               style={{width: 40, height: 40, resizeMode: 'contain', marginRight: 20}}/>
                    </View>

                )}
                <View style={{
                    marginTop: 5,
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
        </View>
    );
}

export default ActivityStyle15;