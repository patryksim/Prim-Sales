import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ScrollView, Text, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import FloatingButton from "../../components/FloatingButton";

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

function ProfileStyle14() {
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
            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <View style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        paddingTop: 30,
                        paddingBottom: 20,
                        paddingHorizontal: 50,
                    }}>
                        <FloatingButton style={{backgroundColor: '#42bd41', position: 'relative'}}
                                        onPress={() => snackbarRef.current.ShowSnackBarFunction('button plus clicked')}/>
                        <Image source={require('../../assets/icon/ic_profile4.png')}
                               style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                        <FloatingButton style={{backgroundColor: 'white', position: 'relative'}}
                                        image={require('../../assets/icon/ic_share.png')}
                                        onPress={() => snackbarRef.current.ShowSnackBarFunction('button share clicked')}/>
                    </View>
                    <Text style={{fontSize: 20, color: '#616161'}}>Michael Angelo</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginBottom: 10}}>
                        <Image source={require('../../assets/icon/ic_activity29_location.png')}
                               style={{width: 15, height: 15, tintColor: '#616161', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, color: '#8c8c8c'}}>San Fransisco, CA</Text>
                    </View>
                </View>
                <ListDataImage data={DATA} title='PHOTOS'/>
                <ListDataImage data={DATA2} title='FRIENDS'/>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
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

export default ProfileStyle14;