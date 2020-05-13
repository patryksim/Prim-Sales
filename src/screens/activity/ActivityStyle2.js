import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderFourButton from "../../components/HeaderFourButton";

const DATA = [
    {
        id: '1',
        type: 'picture',
        user: 'Gabriella Madelaine',
        avatar: require('../../assets/icon/ic_profile1.png'),
        actionLabel: 'Posted a photo',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        type: 'text',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        actionLabel: 'Posted a tought',
        datetime: '3 days ago'
    },
    {
        id: '3',
        type: 'picture',
        user: 'Gabriella Madelaine',
        avatar: require('../../assets/icon/ic_profile1.png'),
        actionLabel: 'Posted a photo',
        datetime: '3 days ago'
    },
];

function ActivityStyle2() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderFourButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                editPress={() => snackbarRef.current.ShowSnackBarFunction('edit clicked')}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#ff5722'
            />
            <FlatList
                contentContainerStyle={{paddingBottom: 10}}
                data={DATA}
                renderItem={({item}) => <ItemActivity data={item}/>}
                ListHeaderComponent={() =>
                    <View style={{
                        width: '100%',
                        height: 57,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        paddingLeft: 10
                    }}>
                        <Text style={{fontSize: 14, color: '#616161'}}>Today</Text>
                    </View>
                }
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
                    <Text style={{fontSize: 14, color: '#616161', marginLeft: 10}}>
                        <Text>{data.user} </Text>
                        <Text style={{color: '#bdbdbd'}}>{data.actionLabel}</Text>
                    </Text>
                </View>
                <RenderContent type={data.type}/>
                <View style={{
                    padding: 10,
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
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

function RenderContent({type}) {
    if (type === 'picture') {
        return (
            <View>
                <Image source={{uri: storageImageUrl('activity', 'activity_2_img.jpg')}}
                       style={{height: 170, width: '100%', resizeMode: 'cover'}}/>
                <Text style={{fontSize: 14, color: '#263238', padding: 10}}>Hipster Foods</Text>
                <Text style={{fontSize: 14, color: '#9e9e9e', paddingHorizontal: 10}}>Weasel the jeeper goodness
                    inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much toward.</Text>

            </View>
        );
    } else if (type === 'text') {
        return (
            <Text style={{fontSize: 14, color: '#616161', paddingHorizontal: 10}}>You're a work of art. not everyone
                will understand you, but
                the ones that do, will never forget about you.</Text>
        );
    }
}

export default ActivityStyle2;