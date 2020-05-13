import React, {useContext, useRef} from 'react';
import {Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import FloatingButton from "../../components/FloatingButton";
import {storageImageUrl} from "../../tools/Helpers";

function ProfileStyle28() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onPress = (message) => {
        snackbarRef.current.ShowSnackBarFunction(message)
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
            <ImageBackground source={{uri: storageImageUrl('profile', 'profile_28_header.jpg')}}
                  style={{alignItems: 'center', backgroundColor: 'gray'}}>
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
                <Text style={{fontSize: 20, color: 'white'}}>Michael Angelo</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 5, marginBottom: 10}}>
                    <Image source={require('../../assets/icon/ic_activity29_location.png')}
                           style={{width: 15, height: 15, tintColor: 'white', resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, color: 'white'}}>San Fransisco, CA</Text>
                </View>
            </ImageBackground>
            <ScrollView>
                <View style={{
                    backgroundColor: 'white',
                    marginHorizontal: 10,
                    marginTop: 10,
                    marginBottom: 5,
                    padding: 15,
                    elevation: 3,
                    shadowOffset: {width: 0, height: 2},
                    shadowOpacity: 0.3,
                }}>
                    <Text style={{fontSize: 14, fontWeight: 'bold', color: '#616161', marginBottom: 10}}>ABOUT ME</Text>
                    <Text style={{fontSize: 14, color: '#9e9e9e', lineHeight: 20}}>Weasel maternal dove far the jeepers
                        goodness
                        inconsiderately spelled so ubiquitous amused knitted and altruistic amiable far much
                        toward.</Text>
                    <View style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_home_black.png')}
                               style={{width: 12, height: 12, resizeMode: 'contain'}}/>
                        <Text style={{flex: 1, fontSize: 14, color: '#616161', marginLeft: 8}}>www.angelo.com</Text>
                        <Image source={require('../../assets/icon/ic_dribbble.png')}
                               style={{width: 12, height: 12, resizeMode: 'contain'}}/>
                        <Text style={{flex: 1, fontSize: 14, color: '#616161', marginLeft: 8}}>michael-angelo</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <View style={{
                        margin: 10,
                        backgroundColor: 'white',
                        elevation: 3,
                        shadowOffset: {width: 0, height: 2},
                        shadowOpacity: 0.3,
                    }}>
                        <ItemData title='Education' onPress={onPress}/>
                        <ItemData title='Experience' onPress={onPress}/>
                        <ItemData title='Skills' onPress={onPress}/>
                        <ItemData title='Services' onPress={onPress}/>
                    </View>
                </View>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({title, onPress}) {
    return (
        <TouchableOpacity onPress={() => onPress('button ' + title + ' clicked')} style={{
            width: '100%',
            paddingVertical: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            alignItems: 'center',
            borderBottomColor: '#e4e4e4',
            borderBottomWidth: 1
        }}>
            <Text style={{fontSize: 16, color: '#616161'}}>{title}</Text>
            <Image source={require('../../assets/icon/ic_chevron_right.png')}
                   style={{width: 15, height: 15, resizeMode: 'contain', tintColor: '#aeaeae'}}/>
        </TouchableOpacity>

    );
}

export default ProfileStyle28;