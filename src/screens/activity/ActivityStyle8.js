import React, {useContext, useRef} from 'react';
import {FlatList, Image, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const DATA = [
    {
        id: '1',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: 'activity_8_img_1.jpg',
        datetime: 'An hour ago'
    },
    {
        id: '2',
        user: 'Gabriella Madelaine',
        avatar: require('../../assets/icon/ic_profile1.png'),
        image: 'activity_8_img_2.jpg',
        datetime: '2 hour ago'
    },
    {
        id: '3',
        user: 'Tony Ramirez',
        avatar: require('../../assets/icon/ic_profile2.png'),
        image: 'activity_8_img_1.jpg',
        datetime: '3 hour ago'
    },
];

function ActivityStyle8() {
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
                marginHorizontal: 10,
                marginTop: 10,
                backgroundColor: 'white',
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3
            }}>
                <ImageBackground source={{uri: storageImageUrl('activity', data.image)}}
                                 style={{flex: 1, height: 230, justifyContent: 'flex-end', backgroundColor: 'gray'}}>
                    <View style={{flexDirection: 'row', padding: 12}}>
                        <Image source={data.avatar}
                               style={{height: 40, width: 40, resizeMode: 'cover'}}/>
                        <View style={{flex: 1, marginLeft: 10}}>
                            <Text style={{fontSize: 14}}>
                                <Text style={{fontWeight: 'bold', color: 'white'}}>{data.user}</Text>
                            </Text>
                            <View style={{flexDirection: 'row', marginTop: 2, alignItems: 'center'}}>
                                <Image source={require('../../assets/icon/ic_history.png')}
                                       style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                                <Text style={{fontSize: 12, color: 'white', marginLeft: 5}}>{data.datetime}</Text>
                            </View>
                        </View>
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            marginRight: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white'
                        }}>
                            <Image source={require('../../assets/icon/ic_love_red.png')}
                                   style={{height: 10, width: 10, resizeMode: 'contain'}}/>
                        </View>
                        <View style={{
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            marginRight: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white'
                        }}>
                            <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                                   style={{height: 14, width: 14, resizeMode: 'contain'}}/>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </View>
    );
}

export default ActivityStyle8;