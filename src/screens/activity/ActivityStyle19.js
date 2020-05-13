import React, {useContext, useRef, useState} from 'react';
import {Dimensions, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import {storageImageUrl} from "../../tools/Helpers";
import StaggeredView from "../../components/StaggeredView";
import ImageAutoHeight from "../../components/ImageAutoHeight";

const screenWidth = Dimensions.get('window').width;

const DATA = [
    {
        id: '1',
        avatar: require('../../assets/icon/ic_profile1.png'),
        user: 'Christina',
        datetime: '1 hour',
        image: 'activity_19_img_1.jpg'
    },
    {
        id: '2',
        avatar: require('../../assets/icon/ic_profile2.png'),
        user: 'Tony Ramirez',
        datetime: '20.00',
        image: 'activity_19_img_2.jpg'
    },
    {
        id: '3',
        avatar: require('../../assets/icon/ic_profile3.png'),
        user: 'Gabriella Madelaine',
        datetime: '14.30',
        image: 'activity_19_img_3.jpg'
    },
    {
        id: '4',
        avatar: require('../../assets/icon/ic_profile1.png'),
        user: 'Remi Boucher',
        datetime: '14.30',
        image: 'activity_19_img_4.jpg'
    },
    {
        id: '5',
        avatar: require('../../assets/icon/ic_profile1.png'),
        user: 'Christina',
        datetime: '1 hour',
        image: 'activity_19_img_1.jpg'
    },
    {
        id: '6',
        avatar: require('../../assets/icon/ic_profile2.png'),
        user: 'Tony Ramirez',
        datetime: '20.00',
        image: 'activity_19_img_2.jpg'
    },
];

function ActivityStyle19() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);
    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Activity'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#f44336'
            />
            <StaggeredView
                data={DATA}
                numColumns={2}
                renderItem={(item, numColumns) => <ItemStaggered data={item} numColumns={numColumns}/>}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemStaggered({data, numColumns = 1}) {

    return (
        <View>
            <ImageAutoHeight source={{uri: storageImageUrl('activity', data.image)}}
                             imageWidth={screenWidth / numColumns}/>
            <View style={{alignItems: 'center', marginTop: -20}}>
                <Image source={data.avatar} style={{height: 40, width: 40, marginBottom: 10, resizeMode: 'cover'}}/>
                <Text style={{fontSize: 14, color: '#616161'}}>{data.user}</Text>
                <Text style={{fontSize: 12, color: '#bdbdbd'}}>{data.datetime}</Text>
                <View style={{
                    width: screenWidth / numColumns,
                    marginTop: 20,
                    flexDirection: 'row',
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, tintColor: '#757575', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>1347</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_menu4_message.png')}
                               style={{width: 14, height: 10, marginLeft: 25, tintColor: '#757575', resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>19</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ActivityStyle19;