import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ImageBackground, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', image: 'profile_6_image_1.jpg', title: 'Urban Skyscrapers'},
    {id: '2', image: 'profile_6_image_2.jpg', title: 'Citywalks'},
    {id: '3', image: 'profile_6_image_3.jpg', title: 'Antique Cars'},
    {id: '4', image: 'profile_6_image_1.jpg', title: 'Urban Skyscrapers'},
    {id: '5', image: 'profile_6_image_2.jpg', title: 'Citywalks'},
    {id: '6', image: 'profile_6_image_3.jpg', title: 'Antique Cars'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle11() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Profile'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8e24aa'
                shadow={false}
            />
            <TabHeader titles={['PROFILE', 'PHOTOS', 'FRIENDS', 'STORIES']} bgColor='#8e24aa' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <View style={{flex: 1}}>
                <ImageBackground source={{uri: storageImageUrl('profile', 'profile_11_background.jpg')}}
                                 style={{flex: 1, backgroundColor: 'gray', alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{backgroundColor: 'white', alignItems: 'center'}}>
                        <View style={{
                            width: screenWidth - 30,
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 50,
                            paddingHorizontal: 50,
                            justifyContent: 'space-around',
                        }}>
                            <TouchableOpacity style={{padding: 20}}>
                                <Image source={require('../../assets/icon/ic_email.png')}
                                       style={{width: 22, height: 15, tintColor: '#616161', resizeMode: 'contain'}}/>
                            </TouchableOpacity>
                            <Image source={require('../../assets/icon/ic_profile4.png')}
                                   style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                            <TouchableOpacity style={{padding: 20}}>
                                <Image source={require('../../assets/icon/ic_setting_white.png')}
                                       style={{width: 20, height: 20, tintColor: '#616161', resizeMode: 'contain'}}/>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize: 26, color: '#616161', marginTop: 15}}>Michael Angelo</Text>
                        <Text style={{fontSize: 14, color: '#616161', marginTop: 5}}>Manhattan, NY</Text>
                        <View style={{width: screenWidth - 30, flexDirection: 'row', backgroundColor: 'white', marginTop: 80}}>
                            <TouchableOpacity style={{
                                width: '33%',
                                height: '100%',
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderBottomColor: '#8e24aa'
                            }}>
                                <TabTitle2 title='359' subtitle='Photos'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                                <TabTitle2 title='10,289' subtitle='Followers'/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                                <TabTitle2 title='4,317' subtitle='Followings'/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function TabTitle({title}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 14, color: 'white'}}>{title}</Text>
        </View>
    );
}

function TabTitle2({title, subtitle}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: '#616161'}}>{title}</Text>
            <Text style={{fontSize: 12, color: '#616161'}}>{subtitle}</Text>
        </View>
    );
}

export default ProfileStyle11;