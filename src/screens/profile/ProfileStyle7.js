import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
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

function ProfileStyle7() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    let itemData = [];
    DATA.map((dt) => {
        itemData.push(<ItemData key={dt.id} data={dt}/>)
    });

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
                paddingVertical: 10,
                flexDirection: 'row',
                paddingLeft: 20,
                backgroundColor: 'white',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/icon/ic_profile2.png')}
                       style={{width: 47, height: 47, resizeMode: 'contain'}}/>
                <View style={{flex: 1, marginLeft: 20}}>
                    <Text style={{fontSize: 20, color: '#616161'}}>Michael Hendley</Text>
                    <Text style={{fontSize: 12, color: '#616161', marginTop: 4}}>UI Designer</Text>
                </View>
                <TouchableOpacity style={{marginRight: 15}} onPress={() => snackbarRef.current.ShowSnackBarFunction('button plus clicked')}>
                    <Image source={require('../../assets/icon/ic_add_green.png')}
                           style={{width: 32, height: 32, resizeMode: 'contain'}}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{
                    height: 75,
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    margin: 10,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                }}>
                    <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                        <TabTitle title='359' subtitle='Photos'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                        <TabTitle title='10,289' subtitle='Followers'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: '33%', alignItems: 'center'}}>
                        <TabTitle title='4,317' subtitle='Followings'/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    backgroundColor: 'white',
                    marginHorizontal: 10,
                    marginBottom: 5,
                    padding: 15,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                }}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161', marginBottom: 10}}>ABOUT ME</Text>
                    <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 20}}>Weasel maternal dove far the jeepers goodness
                        inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much toward.</Text>
                    <View style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_home_black.png')}
                               style={{width: 12, height: 12, resizeMode: 'contain'}}/>
                        <Text style={{flex: 1, fontSize: 14, color: '#616161', marginLeft: 8}}>www.hendley.com</Text>
                        <Image source={require('../../assets/icon/ic_dribbble.png')}
                               style={{width: 12, height: 12, resizeMode: 'contain'}}/>
                        <Text style={{flex: 1, fontSize: 14, color: '#616161', marginLeft: 8}}>michael-hendley</Text>
                    </View>
                </View>
                {itemData}
            </ScrollView>
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

export default ProfileStyle7;