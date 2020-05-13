import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import FloatingButton from "../../components/FloatingButton";

const DATA = [
    {id: '1', image: 'profile_6_image_1.jpg', title: 'Urban Skyscrapers'},
    {id: '2', image: 'profile_6_image_2.jpg', title: 'Citywalks'},
    {id: '3', image: 'profile_6_image_3.jpg', title: 'Antique Cars'},
    {id: '4', image: 'profile_6_image_1.jpg', title: 'Urban Skyscrapers'},
    {id: '5', image: 'profile_6_image_2.jpg', title: 'Citywalks'},
    {id: '6', image: 'profile_6_image_3.jpg', title: 'Antique Cars'},
];

const screenWidth = Dimensions.get('window').width;

function ProfileStyle12() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    let itemData = [];
    itemData.push(<ItemHeader key='header'/>);
    DATA.map((dt) => {
        itemData.push(<ItemData key={dt.id} data={dt} snackbarRef={snackbarRef}/>)
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
            <ScrollView contentContainerStyle={{paddingVertical: 5}}>
                {itemData}
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemHeader() {
    return (
        <View style={{
            width: screenWidth,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3
        }}>
            <View style={{
                width: '100%',
                paddingVertical: 20,
                flexDirection: 'row',
                paddingLeft: 20,
                backgroundColor: 'white',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/icon/ic_profile4.png')}
                       style={{width: 85, height: 85, resizeMode: 'contain'}}/>
                <View style={{flex: 1, marginLeft: 20}}>
                    <Text style={{fontSize: 27, color: '#616161'}}>Michael Angelo</Text>
                    <Text style={{fontSize: 14, color: '#616161', marginTop: 4}}>Manhattan, NY</Text>
                </View>
            </View>
        </View>
    );
}

function ItemData({data, snackbarRef}) {
    return (
        <View source={{uri: storageImageUrl('profile', data.image)}} style={{
            width: screenWidth,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
            elevation: 3,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.3
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
            {data.id === '1' && (
                <FloatingButton style={{backgroundColor: '#42bd41', position: 'absolute', right: 25, top: -30}}
                                onPress={() => snackbarRef.current.ShowSnackBarFunction('button plus clicked')}/>
            )}
        </View>
    );
}

export default ProfileStyle12;