import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', image: 'profile_2_friend_1.jpg'},
    {id: '2', image: 'profile_2_friend_2.jpg'},
    {id: '3', image: 'profile_2_friend_3.jpg'},
    {id: '4', image: 'profile_2_friend_4.jpg'},
    {id: '5', image: 'profile_2_friend_2.jpg'},
    {id: '6', image: 'profile_2_friend_3.jpg'},
    {id: '7', image: 'profile_2_friend_4.jpg'},
    {id: '8', image: 'profile_2_friend_1.jpg'},
    {id: '9', image: 'profile_2_friend_3.jpg'},
    {id: '10', image: 'profile_2_friend_4.jpg'},
    {id: '11', image: 'profile_2_friend_1.jpg'},
    {id: '12', image: 'profile_2_friend_2.jpg'},
    {id: '13', image: 'profile_2_friend_1.jpg'},
    {id: '14', image: 'profile_2_friend_2.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle2() {
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
                <ImageBackground source={{uri: storageImageUrl('profile', 'profile_2_header.jpg')}}
                                 style={{width: '100%', height: 210, backgroundColor: 'gray', alignItems: 'center'}}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 30,
                        paddingHorizontal: 50,
                        justifyContent: 'space-around'
                    }}>
                        <Image source={require('../../assets/icon/ic_profile1.png')}
                               style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                    </View>
                    <Text style={{fontSize: 20, color: 'white', marginTop: 15}}>Michael Angelo</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5}}>
                        <Image source={require('../../assets/icon/ic_activity29_location.png')}
                               style={{width: 15, height: 15, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, color: 'white'}}>San Fransisco, CA</Text>
                    </View>
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
                contentContainerStyle={{padding: 0}}
                data={DATA}
                numColumns={4}
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
        <View style={{width: (screenWidth / 4), padding: 4}}>
            <Image source={{uri: storageImageUrl('profile', data.image)}}
                   style={{height: 78, justifyContent: 'flex-end', padding: 10}}/>
        </View>
    );
}

export default ProfileStyle2;