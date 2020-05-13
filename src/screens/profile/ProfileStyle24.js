import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', image: 'profile_13_image_1.jpg'},
    {id: '2', image: 'profile_13_image_2.jpg'},
    {id: '3', image: 'profile_13_image_3.jpg'},
    {id: '4', image: 'profile_13_image_4.jpg'},
    {id: '5', image: 'profile_13_image_5.jpg'},
    {id: '6', image: undefined},
];

const DATA2 = [
    {id: '1', image: 'profile_13_image_1.jpg'},
    {id: '2', image: 'profile_13_image_2.jpg'},
    {id: '3', image: 'profile_13_image_3.jpg'},
    {id: '4', image: 'profile_13_image_4.jpg'},
    {id: '5', image: 'profile_13_image_5.jpg'},
    {id: '6', image: 'profile_13_image_6.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle24() {
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
            <TabHeader
                bgColor='#8e24aa'
                stripColor='white'
                activeIndex={0}
                icons={[
                    require('../../assets/icon/ic_profile19_camera.png'),
                    require('../../assets/icon/ic_profile19_group.png'),
                    require('../../assets/icon/ic_profile19_notif.png'),
                    require('../../assets/icon/ic_profile19_setting.png')]}
                onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView>
                <ImageBackground source={{uri: storageImageUrl('profile', 'profile_24_header.jpg')}}
                                 style={{
                                     width: '100%',
                                     height: 180,
                                     paddingVertical: 30,
                                     marginBottom: 5,
                                     backgroundColor: 'white',
                                     alignItems: 'center'
                                 }}>
                    <Text style={{fontSize: 27, color: 'white', marginTop: 10}}>Michael Angelo</Text>
                    <Text style={{fontSize: 14, color: 'white', marginTop: 4}}>Manhattan, NY</Text>
                </ImageBackground>
                <ListDataImage data={DATA} title='PORTFOLIOS'/>
                <View style={{marginTop: -345, paddingBottom: 265, alignSelf: 'center', elevation: 10}}>
                    <Image source={require('../../assets/icon/ic_profile4.png')}
                           style={{width: 84, height: 84, resizeMode: 'contain' }}/>
                </View>
                <ListDataImage data={DATA2} title='FRIENDS'/>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function TabTitle({image}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Image source={image}
                   style={{width: 24, height: 24, resizeMode: 'contain'}}/>
        </View>
    );
}

function ListDataImage({data, title}) {
    return (
        <View style={{
            marginVertical: 5,
            marginHorizontal: 10,
            backgroundColor: 'white',
            borderRadius: 3,
            shadowRadius: 3,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3
        }}>
            <Text style={{
                fontSize: 14,
                fontWeight: 'bold',
                color: '#263238',
                marginLeft: 10,
                marginTop: 15
            }}>{title}</Text>
            <View
                style={{marginHorizontal: 10, height: 10, borderBottomWidth: 1, borderBottomColor: '#e0e0e0'}}/>
            <MultiColumnView
                containerStyle={{padding: 5}}
                data={data}
                numColumns={3}
                renderItem={(item, numColumns) => <ItemData data={item}/>}
            />
        </View>
    );
}

function ItemData({data}) {
    if (data.image === undefined) {
        return (
            <View style={{width: (screenWidth / 3), paddingHorizontal: 10, paddingVertical: 5}}>
                <View style={{
                    height: 110,
                    borderRadius: 5,
                    backgroundColor: '#f1f5f7',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{fontSize: 27, color: '#8c8c8c'}}>136</Text>
                    <Text style={{fontSize: 12, color: '#8c8c8c'}}>more</Text>
                </View>
            </View>
        );
    } else {
        return (
            <View style={{width: (screenWidth / 3), paddingHorizontal: 10, paddingVertical: 5}}>
                <Image source={{uri: storageImageUrl('profile', data.image)}}
                       style={{height: 110, justifyContent: 'flex-end', borderRadius: 5}}/>
            </View>
        );
    }
}

export default ProfileStyle24;