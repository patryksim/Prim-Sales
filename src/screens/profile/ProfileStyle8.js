import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, ImageBackground, Text, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', image: 'profile_8_image_1.jpg', title: 'Urban Skyscrapers'},
    {id: '2', image: 'profile_8_image_2.jpg', title: 'The Cliff Hanger'},
    {id: '3', image: 'profile_8_image_3.jpg', title: 'Cabin Interior'},
    {id: '4', image: 'profile_8_image_1.jpg', title: 'Urban Skyscrapers'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle8() {
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
                    <Text style={{fontSize: 12, color: '#616161', marginTop: 8}}>270 Followers •  345 Followings</Text>
                </View>
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

function ItemData({data}) {
    return (
        <View style={{
            width: screenWidth,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
        }}>
            <ImageBackground source={{uri: storageImageUrl('profile', data.image)}}
                             style={{
                                 flex: 1,
                                 height: 170,
                                 padding: 10,
                                 borderRadius: 3,
                                 overflow: 'hidden',
                                 justifyContent: 'space-between'
                             }}>
                <Text style={{fontSize: 16, marginBottom: 8, color: 'white'}}>{data.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, tintColor: 'white', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>1347</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                               style={{width: 14, height: 10, tintColor: 'white', marginLeft: 25, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>19546</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default ProfileStyle8;