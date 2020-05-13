import React, {useContext, useRef} from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View, ScrollView} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import FloatingButton from "../../components/FloatingButton";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', image: 'profile_13_image_1.jpg'},
    {id: '2', image: 'profile_13_image_2.jpg'},
    {id: '3', image: 'profile_13_image_3.jpg'},
    {id: '4', image: 'profile_13_image_4.jpg'},
    {id: '5', image: 'profile_13_image_5.jpg'},
    {id: '6', image: 'profile_13_image_6.jpg'},
    {id: '7', image: 'profile_13_image_7.jpg'},
    {id: '8', image: 'profile_13_image_8.jpg'},
    {id: '9', image: 'profile_13_image_9.jpg'},
    {id: '10', image: 'profile_13_image_1.jpg'},
    {id: '11', image: 'profile_13_image_2.jpg'},
    {id: '12', image: 'profile_13_image_3.jpg'},
    {id: '13', image: 'profile_13_image_4.jpg'},
    {id: '14', image: 'profile_13_image_5.jpg'},
    {id: '15', image: 'profile_13_image_6.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle13() {
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
            <TabHeader titles={['PROFILE', 'PHOTOS', 'FRIENDS', 'STORIES']} bgColor='#8e24aa' activeIndex={1}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView>
                <View style={{width: '100%', backgroundColor: 'white'}}>
                    <View style={{paddingVertical: 20, marginLeft: 100}}>
                        <Text style={{fontSize: 17, color: '#616161'}}>James Richardson</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginLeft: 10}}>
                            <Image source={require('../../assets/icon/ic_activity29_location.png')}
                                   style={{width: 15, height: 15, tintColor: '#616161', resizeMode: 'contain'}}/>
                            <Text style={{fontSize: 12, color: '#616161'}}>San Fransisco, CA</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: '#f1f5f7',
                        paddingHorizontal: 15,
                        paddingTop: 10,
                        paddingBottom: 20
                    }}>
                        <Image source={require('../../assets/icon/ic_profile4.png')}
                               style={{width: 85, height: 85, resizeMode: 'contain', marginTop: -50}}/>
                        <ItemCount title='56' subtitle='Photos'/>
                        <ItemCount title='14' subtitle='Stories'/>
                        <ItemCount title='136' subtitle='Friends'/>
                    </View>
                </View>
                <View style={{
                    margin: 10,
                    backgroundColor: 'white',
                    borderRadius: 3,
                    shadowRadius: 3,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3
                }}>
                    <View style={{height: 50, flexDirection: 'row'}}>
                        <FloatingButton style={{backgroundColor: '#42bd41', position: 'absolute', left: 20}}
                                        onPress={() => snackbarRef.current.ShowSnackBarFunction('button plus clicked')}/>
                        <FloatingButton style={{backgroundColor: 'white', position: 'absolute', right: 100}} image={require('../../assets/icon/ic_share.png')}
                                        onPress={() => snackbarRef.current.ShowSnackBarFunction('button share clicked')}/>
                        <FloatingButton style={{backgroundColor: 'white', position: 'absolute', right: 20}} image={require('../../assets/icon/ic_love_red.png')}
                                        onPress={() => snackbarRef.current.ShowSnackBarFunction('button love clicked')}/>
                    </View>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161', marginLeft: 10}}>PHOTOS</Text>
                    <View style={{marginHorizontal: 10, height: 10, borderBottomWidth: 1, borderBottomColor: '#e0e0e0'}}/>
                    <MultiColumnView
                        containerStyle={{padding: 5}}
                        data={DATA}
                        numColumns={3}
                        renderItem={(item, numColumns) => <ItemData data={item}/>}
                    />
                </View>
            </ScrollView>
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

function ItemCount({title, subtitle}) {
    return (
        <View style={{marginVertical: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 27, color: '#616161'}}>{title}</Text>
            <Text style={{fontSize: 12, color: '#616161'}}>{subtitle}</Text>
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

export default ProfileStyle13;