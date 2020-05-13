import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MaterialButton from "../../components/MaterialButton";

const DATA = [
    {id: '1', image: 'profile_2_friend_1.jpg', name: 'Michelle Hendley', address: 'San Fransisco, CA'},
    {id: '2', image: 'profile_2_friend_2.jpg', name: 'Kimberly White', address: 'Manhattan, NY'},
    {id: '3', image: 'profile_2_friend_3.jpg', name: 'Steve Rogers', address: 'Brooklyn, NY'},
    {id: '4', image: 'profile_2_friend_4.jpg', name: 'Amy Pattersson', address: 'Little Indian, ABQ'},
    {id: '5', image: 'profile_2_friend_1.jpg', name: 'Hannah Paige', address: 'San Fransisco, CA'},
    {id: '6', image: 'profile_2_friend_1.jpg', name: 'Michelle Hendley', address: 'San Fransisco, CA'},
    {id: '7', image: 'profile_2_friend_2.jpg', name: 'Kimberly White', address: 'Manhattan, NY'},
    {id: '8', image: 'profile_2_friend_3.jpg', name: 'Steve Rogers', address: 'Brooklyn, NY'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle4() {
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
            <View style={{
                width: '100%',
                paddingTop: 25,
                flexDirection: 'row',
                paddingLeft: 20,
                backgroundColor: 'white',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/icon/ic_profile1.png')}
                       style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 20, color: '#616161'}}>Michael Angelo</Text>
                    <Text style={{fontSize: 12, color: '#616161', marginTop: 8}}>UI Designer</Text>
                </View>
            </View>
            <Text style={{fontSize: 14, color: '#9e9e9e', padding: 15, backgroundColor: 'white'}}>Weasel maternal dove far the jeepers goodness
                inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much toward.</Text>
            <View style={{flexDirection: 'row', backgroundColor: 'white', borderTopColor: '#e4e4e4', borderTopWidth: 0.5}}>
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
            <FlatList
                contentContainerStyle={{padding: 0}}
                data={DATA}
                renderItem={({item}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialButton title='Follow Me'
                            style={{marginHorizontal: 15, marginVertical: 15, backgroundColor: '#42bd41'}}
                            buttonPress={() => snackbarRef.current.ShowSnackBarFunction('follow me clicked')}/>
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
        <View style={{
            width: screenWidth,
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#e4e4e4'
        }}>
            <Image source={{uri: storageImageUrl('profile', data.image)}}
                   style={{
                       height: 50,
                       width: 50,
                       borderRadius: 25,
                       overflow: 'hidden'
                   }}/>
            <View style={{marginLeft: 10}}>
                <Text style={{fontSize: 16, color: '#616161'}}>{data.name}</Text>
                <Text style={{fontSize: 12, color: '#8c8c8c'}}>{data.address}</Text>
            </View>
        </View>
    );
}

export default ProfileStyle4;