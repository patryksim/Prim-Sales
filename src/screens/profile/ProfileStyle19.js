import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";

const DATA = [
    {id: '1', image: 'profile_13_image_1.jpg'},
    {id: '2', image: 'profile_13_image_2.jpg'},
    {id: '3', image: 'profile_13_image_3.jpg'},
    {id: '4', image: 'profile_13_image_4.jpg'},
    {id: '5', image: 'profile_13_image_5.jpg'},
    {id: '6', image: 'profile_13_image_6.jpg'},
    {id: '7', image: 'profile_13_image_1.jpg'},
    {id: '8', image: 'profile_13_image_2.jpg'},
    {id: '9', image: 'profile_13_image_3.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle19() {
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
                shadow={false}
            />
            <View style={{flexDirection: 'row', backgroundColor: '#8e24aa'}}>
                <TouchableOpacity style={{
                    width: '25%',
                    height: '100%',
                    alignItems: 'center',
                    borderBottomWidth: 3,
                    borderBottomColor: 'white'
                }}>
                    <TabTitle image={require('../../assets/icon/ic_profile19_camera.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
                    <TabTitle image={require('../../assets/icon/ic_profile19_group.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
                    <TabTitle image={require('../../assets/icon/ic_profile19_notif.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{width: '25%', alignItems: 'center'}}>
                    <TabTitle image={require('../../assets/icon/ic_profile19_setting.png')}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
                    <Image source={require('../../assets/icon/ic_profile4.png')}
                           style={{width: 84, height: 84, resizeMode: 'contain'}}/>
                    <View style={{marginLeft: 15}}>
                        <Text style={{fontSize: 20, color: '#616161'}}>Michael Angelo</Text>
                        <Text style={{fontSize: 12, color: '#8c8c8c', marginTop: 4}}>UI Designer</Text>
                    </View>
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
                        <Text style={{flex: 1, fontSize: 14, color: '#616161', marginLeft: 8}}>www.angelo.com</Text>
                        <Image source={require('../../assets/icon/ic_dribbble.png')}
                               style={{width: 12, height: 12, resizeMode: 'contain'}}/>
                        <Text style={{flex: 1, fontSize: 14, color: '#616161', marginLeft: 8}}>michael-angelo</Text>
                    </View>
                </View>
                <ListDataImage data={DATA} title='PHOTOS'/>
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
    return (
        <View style={{width: (screenWidth / 3), paddingHorizontal: 10, paddingVertical: 5}}>
            <Image source={{uri: storageImageUrl('profile', data.image)}}
                   style={{height: 110, justifyContent: 'flex-end', borderRadius: 5}}/>
        </View>
    );
}

export default ProfileStyle19;