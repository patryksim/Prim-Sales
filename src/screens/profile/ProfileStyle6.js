import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', image: 'profile_6_image_1.jpg', title: 'Urban Skyscrapers'},
    {id: '2', image: 'profile_6_image_2.jpg', title: 'Citywalks'},
    {id: '3', image: 'profile_6_image_3.jpg', title: 'Antique Cars'},
    {id: '4', image: 'profile_6_image_1.jpg', title: 'Urban Skyscrapers'},
    {id: '5', image: 'profile_6_image_2.jpg', title: 'Citywalks'},
    {id: '6', image: 'profile_6_image_3.jpg', title: 'Antique Cars'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle6() {
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
                paddingVertical: 20,
                flexDirection: 'row',
                paddingLeft: 20,
                backgroundColor: 'white',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/icon/ic_profile1.png')}
                       style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                <View style={{flex: 1, marginLeft: 20}}>
                    <Text style={{fontSize: 20, color: '#616161'}}>Michael Angelo</Text>
                    <Text style={{fontSize: 12, color: '#616161', marginTop: 4}}>UI Designer</Text>
                </View>
                <TouchableOpacity style={{marginRight: 15}} onPress={() => snackbarRef.current.ShowSnackBarFunction('button plus clicked')}>
                    <Image source={require('../../assets/icon/ic_add_green.png')}
                           style={{width: 32, height: 32, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                borderTopColor: '#e4e4e4',
                borderTopWidth: 0.5
            }}>
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
                contentContainerStyle={{paddingVertical: 5}}
                data={DATA}
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
        <View source={{uri: storageImageUrl('profile', data.image)}} style={{
            width: screenWidth,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
        }}>
            <ImageBackground source={{uri: storageImageUrl('profile', data.image)}}
                             style={{
                                 flex: 1,
                                 height: 140,
                                 borderRadius: 3,
                                 overflow: 'hidden',
                                 alignItems: 'center',
                                 justifyContent: 'center'
                             }}>
                <Text style={{fontSize: 16, color: 'white'}}>{data.title}</Text>
                <Text style={{fontSize: 12, color: 'white', marginTop: 5}}>19 Photos</Text>
            </ImageBackground>
        </View>
    );
}

export default ProfileStyle6;