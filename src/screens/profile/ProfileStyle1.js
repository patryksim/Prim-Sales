import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', image: 'profile_1_post_1.jpg', title: 'Book Shelf'},
    {id: '2', image: 'profile_1_post_2.jpg', title: 'Bedroom'},
    {id: '3', image: 'profile_1_post_3.jpg', title: 'Book Shelf'},
    {id: '4', image: 'profile_1_post_4.jpg', title: 'Workspace'},
    {id: '5', image: 'profile_1_post_1.jpg', title: 'Book Shelf'},
    {id: '6', image: 'profile_1_post_2.jpg', title: 'Bedroom'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle1() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Profile'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
            />
            <View style={{elevation: 3, shadowOffset: {width: 0, height: 2}, shadowOpacity: 0.3}}>
                <ImageBackground source={{uri: storageImageUrl('profile', 'profile_1_header.jpg')}}
                    style={{width: '100%', height: 180, backgroundColor: 'gray', alignItems: 'center'}}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 30,
                        paddingHorizontal: 50,
                        justifyContent: 'space-around'
                    }}>
                        <TouchableOpacity style={{padding: 20}}>
                            <Image source={require('../../assets/icon/ic_email.png')}
                                   style={{width: 22, height: 15, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                        <Image source={require('../../assets/icon/ic_profile1.png')}
                               style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                        <TouchableOpacity style={{padding: 20}}>
                            <Image source={require('../../assets/icon/ic_setting_white.png')}
                                   style={{width: 20, height: 20, resizeMode: 'contain'}}/>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 20, color: 'white', marginTop: 15}}>Michael Angelo</Text>
                </ImageBackground>
                <View style={{flexDirection: 'row', backgroundColor: 'white'}}>
                    <TouchableOpacity style={{
                        width: '33%',
                        height: '100%',
                        alignItems: 'center',
                        borderBottomWidth: 3,
                        borderBottomColor: '#8e24aa'
                    }}>
                        <TabTitle title='359' subtitle='Photos'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                        <TabTitle title='10,289' subtitle='Followers'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                        <TabTitle title='4,317' subtitle='Followings'/>
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={DATA}
                numColumns={2}
                renderItem={({item}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function TabTitle({title, subtitle}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: '#616161'}}>{title}</Text>
            <Text style={{fontSize: 12, color: '#616161'}}>{subtitle}</Text>
        </View>
    );
}

function ItemData({data}) {
    return (
        <View style={{width: (screenWidth / 2) - 5, padding: 5}}>
            <ImageBackground source={{uri: storageImageUrl('profile', data.image)}}
                             style={{
                                 height: 210,
                                 justifyContent: 'flex-end',
                                 padding: 10,
                                 borderRadius: 3,
                                 shadowRadius: 3,
                                 elevation: 3,
                                 shadowOffset: {width: 0, height: 2},
                                 shadowOpacity: 0.3,
                                 overflow: 'hidden'
                             }}>
                <Text style={{fontSize: 16, marginBottom: 8, color: 'white'}}>{data.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <Image source={require('../../assets/icon/ic_love_red.png')}
                           style={{width: 10, height: 10, tintColor: 'white', resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>1347</Text>
                    <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                           style={{width: 14, height: 10, tintColor: 'white', marginLeft: 25, resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>19546</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ProfileStyle1;