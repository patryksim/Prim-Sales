import React, {useContext, useRef} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import {storageImageUrl} from "../../tools/Helpers";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {
        id: '1',
        icon: require('../../assets/icon/ic_menu4_group.png'),
        bgColor: '#1de9b6',
        user: 'Gabriella Madelaine',
        actionLabel: 'Added you as her friend.',
        image: null,
        datetime: '1m'
    },
    {
        id: '2',
        icon: require('../../assets/icon/ic_menu1_messages.png'),
        bgColor: '#2979ff',
        user: 'Tony Ramirez',
        actionLabel: 'commented on your Post',
        image: null,
        datetime: '3h'
    },
    {
        id: '3',
        icon: require('../../assets/icon/ic_love_white.png'),
        bgColor: '#fbc02d',
        user: 'Christina',
        actionLabel: 'loved your photo',
        image: 'activity_17_img.jpg',
        datetime: '3h'
    },
    {
        id: '4',
        icon: require('../../assets/icon/ic_menu4_group.png'),
        bgColor: '#f44336',
        user: 'Gabriella Madelaine',
        actionLabel: 'tagged you in a Post',
        image: null,
        datetime: '1d'
    },
    {
        id: '5',
        icon: require('../../assets/icon/ic_menu1_messages.png'),
        bgColor: '#2979ff',
        user: 'Tony Ramirez',
        actionLabel: 'commented on your Post.',
        image: null,
        datetime: '1d'
    },
    {
        id: '6',
        icon: require('../../assets/icon/ic_menu4_group.png'),
        bgColor: '#1de9b6',
        user: 'Gabriella Madelaine',
        actionLabel: 'Added you as her friend.',
        image: null,
        datetime: '1m'
    },
];

function ActivityStyle17() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
                shadow={false}
            />
            <TabHeader titles={['FEED', 'NOTIFICATION']} bgColor='#f44336' activeIndex={1}
                       onActiveChanged={(i) => onTabChanged(i)}/>
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
            <View style={{width: 1, height: '100%', marginHorizontal: 25, backgroundColor: '#e0e0e0'}}>
                <View style={{
                    height: 26,
                    width: 26,
                    marginTop: 15,
                    marginLeft: -13,
                    borderRadius: 13,
                    backgroundColor: data.bgColor,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={data.icon}
                           style={{width: 12, height: 12, resizeMode: 'contain'}}/>
                </View>
            </View>
            <View style={{flex: 1, paddingVertical: 20, paddingRight: 15, borderBottomWidth: 0.5, borderBottomColor: '#e0e0e0'}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1, marginRight: 10}}>
                        <Text style={{flex: 1, fontSize: 14, color: '#616161'}}>
                            <Text style={{fontWeight: 'bold', color: '#616161'}}>{data.user} </Text>
                            <Text style={{color: '#bdbdbd'}}> {data.actionLabel} </Text>
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, marginRight: 5, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
                {data.image !== null && (
                    <Image source={{uri: storageImageUrl('activity', data.image)}}
                           style={{width: '100%', height: 106, marginTop: 10, resizeMode: 'cover'}}/>
                )}
                {data.id === '4' && (
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        backgroundColor: '#fafafa'
                    }}>
                        <Image source={{uri: storageImageUrl('activity', 'activity_13_img_1.jpg')}}
                               style={{height: 100, width: '30%', resizeMode: 'cover'}}/>
                        <View style={{padding: 10, flex: 1}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#616161'}}>Introduction to UX
                                Des..</Text>
                            <Text style={{fontSize: 10, color: '#bdbdbd'}}>Posted by Tony Ramirez</Text>
                            <Text style={{fontSize: 12, marginTop: 5, color: '#616161'}}>Weasel the jeeper goodness is
                                inconsiderately spelled with..</Text>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
}

export default ActivityStyle17;