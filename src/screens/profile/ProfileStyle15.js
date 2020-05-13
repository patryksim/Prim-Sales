import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import FloatingButton from "../../components/FloatingButton";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', image: 'profile_15_image_1.jpg', title: 'Book Shelf', datetime: 'An hour ago'},
    {id: '2', image: 'profile_15_image_2.jpg', title: 'Bedroom', datetime: 'An hour ago'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle15() {
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
            />
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
            <TabHeader
                bgColor='white'
                stripColor='#8e24aa'
                icons={[
                    require('../../assets/icon/ic_profile15_camera.png'),
                    require('../../assets/icon/ic_profile15_video.png'),
                    require('../../assets/icon/ic_profile15_message.png')]}
                onActiveChanged={(i) => onTabChanged(i)}/>
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
        <View style={{width: screenWidth}}>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 5,
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <Image source={{uri: storageImageUrl('profile', data.image)}}
                       style={{width: '100%', height: 220, resizeMode: 'cover', backgroundColor: 'gray'}}/>
                <View style={{
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>1347</Text>
                        <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                               style={{width: 14, height: 10, marginLeft: 25, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>19546</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ProfileStyle15;