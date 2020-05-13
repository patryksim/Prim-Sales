import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, View} from "react-native";
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

function ProfileStyle3() {
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
                bgColor='black'
            />
            <View style={{
                width: '100%',
                height: 130,
                flexDirection: 'row',
                paddingLeft: 20,
                backgroundColor: 'black',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/icon/ic_profile1.png')}
                       style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                <View style={{marginLeft: 20}}>
                    <Text style={{fontSize: 20, color: 'white'}}>Michael Angelo</Text>
                    <Text style={{fontSize: 12, color: 'white', marginTop: 8}}>San Fransisco, CA</Text>
                </View>
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

export default ProfileStyle3;