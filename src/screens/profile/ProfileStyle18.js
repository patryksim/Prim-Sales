import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import FloatingButton from "../../components/FloatingButton";
import StaggeredView from "../../components/StaggeredView";
import ImageAutoHeight from "../../components/ImageAutoHeight";

const DATA = [
    {id: '1', title: 'Workspace', image: 'profile_18_post_1.jpg'},
    {id: '2', title: 'Still Objects', image: 'profile_18_post_2.jpg'},
    {id: '3', title: 'Funny Stuff', image: 'profile_18_post_3.jpg'},
    {id: '4', title: 'Toys', image: 'profile_18_post_4.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle18() {
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
            <ImageBackground source={{uri: storageImageUrl('profile', 'profile_18_header.jpg')}}
                             style={{
                                 width: '100%',
                                 height: 180,
                                 paddingVertical: 20,
                                 backgroundColor: 'white',
                                 alignItems: 'center'
                             }}>
                <Image source={require('../../assets/icon/ic_profile4.png')}
                       style={{width: 84, height: 84, resizeMode: 'contain'}}/>
                <Text style={{fontSize: 20, color: 'white', marginTop: 10}}>Michael Angelo</Text>
            </ImageBackground>
            <StaggeredView
                containerStyle={{padding: 5}}
                data={DATA}
                numColumns={2}
                renderItem={(item, numColumns) => <ItemStaggered data={item} numColumns={numColumns}/>}
            />
            <FloatingButton onPress={() => snackbarRef.current.ShowSnackBarFunction('button plus clicked')}
                            style={{backgroundColor: '#42bd41', position: 'absolute'}}/>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemStaggered({data, numColumns = 1}) {

    return (
        <View>
            <View style={{
                justifyContent: 'space-between',
                margin: 5,
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
                    <Text style={{fontSize: 14, marginLeft: 5, color: '#616161'}}>{data.title}</Text>
                    <Image source={require('../../assets/icon/ic_more.png')}
                           style={{width: 15, height: 12, resizeMode: 'contain', tintColor: 'gray'}}/>
                </View>
                <ImageAutoHeight source={{uri: storageImageUrl('profile', data.image)}} imageWidth={(screenWidth / numColumns) - 15}/>
            </View>
        </View>
    );
}

export default ProfileStyle18;