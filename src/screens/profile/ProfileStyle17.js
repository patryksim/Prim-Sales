import React, {useContext, useRef} from 'react';
import {FlatList, Image, ScrollView, Text, View} from "react-native";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {PageContext} from "../../../App";
import {storageImageUrl} from "../../tools/Helpers";
import FloatingButton from "../../components/FloatingButton";

const DATA1 = [
    {id: '1', image: 'profile_17_post_1.jpg', title: 'Book Shelf'},
    {id: '2', image: 'profile_17_post_2.jpg', title: 'Bedroom'},
    {id: '3', image: 'profile_17_post_1.jpg', title: 'Book Shelf'},
];

const DATA2 = [
    {id: '1', image: 'profile_17_post_3.jpg', title: 'Book Shelf'},
    {id: '2', image: 'profile_17_post_4.jpg', title: 'Book Shelf'},
    {id: '3', image: 'profile_17_post_5.jpg', title: 'Bedroom'},
];

const DATA3 = [
    {id: '1', image: 'profile_17_post_6.jpg', title: 'Bedroom'},
    {id: '2', image: 'profile_17_post_6.jpg', title: 'Book Shelf'},
];

function ProfileStyle17() {
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
                paddingHorizontal: 20,
                backgroundColor: 'white',
                alignItems: 'center',
                marginBottom: 10
            }}>
                <Image source={require('../../assets/icon/ic_profile4.png')}
                       style={{width: 47, height: 47, resizeMode: 'contain'}}/>
                <View style={{flex: 1, marginLeft: 20}}>
                    <Text style={{fontSize: 14, color: '#616161'}}>Michael Hendley</Text>
                    <Text style={{fontSize: 12, color: '#616161', marginTop: 4}}>UI Designer</Text>
                </View>
                <FloatingButton onPress={() => snackbarRef.current.ShowSnackBarFunction('button plus clicked')}
                                style={{backgroundColor: '#42bd41', position: 'relative'}}/>
            </View>
            <ScrollView>
                <ItemData title='Landscape' data={DATA1} height={160}/>
                <ItemData title='Urban City' data={DATA2} height={100}/>
                <ItemData title='Nature' data={DATA3} height={190}/>
            </ScrollView>
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({title, data, height}) {
    return (
        <>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 20,
                backgroundColor: 'white',
            }}>
                <Text style={{fontSize: 14, color: '#616161'}}>{title}</Text>
                <Text style={{fontSize: 12, color: '#bdbdbd'}}>24 Photos</Text>
            </View>
            <FlatList
                contentContainerStyle={{padding: 5}}
                horizontal
                data={data}
                renderItem={({item}) => <ItemImage data={item} height={height}/>}
                keyExtractor={item => item.id}
            />
        </>
    );
}

function ItemImage({data, height}) {
    return (
        <View style={{width: (height * 1.7), padding: 5}}>
            <Image source={{uri: storageImageUrl('profile', data.image)}}
                   style={{
                       height: height,
                       justifyContent: 'flex-end',
                       padding: 10,
                       borderRadius: 3,
                       shadowRadius: 3,
                       shadowOffset: {width: 0, height: 2},
                       shadowOpacity: 0.3,
                       overflow: 'hidden'
                   }}/>
        </View>
    );
}

export default ProfileStyle17;