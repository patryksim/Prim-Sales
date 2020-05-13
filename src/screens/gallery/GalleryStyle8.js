import React, {useContext, useRef} from 'react';
import {Dimensions, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import MultiColumnView from "../../components/MultiColumnView";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', image: 'gallery_8_img_1.jpg'},
    {id: '2', image: 'gallery_8_img_2.jpg'},
    {id: '3', image: 'gallery_8_img_3.jpg'},
    {id: '4', image: 'gallery_8_img_4.jpg'},
    {id: '5', image: 'gallery_8_img_5.jpg'},
    {id: '6', image: 'gallery_8_img_6.jpg'},
];

const DATA2 = [
    {id: '1', image: 'gallery_8_img_7.jpg'},
    {id: '2', image: 'gallery_8_img_8.jpg'},
    {id: '3', image: 'gallery_8_img_9.jpg'},
    {id: '4', image: 'gallery_8_img_10.jpg'},
    {id: '5', image: 'gallery_8_img_11.jpg'},
    {id: '6', image: 'gallery_8_img_12.jpg'},
];

const screenWidth = Dimensions.get('window').width;

function GalleryStyle8() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Gallery'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
                shadow={false}
            />
            <TabHeader titles={['PHOTO', 'VIDEO', 'DOCUMENT']} bgColor='#8bc34a' activeIndex={1}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <ScrollView contentContainerStyle={{paddingVertical: 5}}>
                <ListDataImage data={DATA} title='RECENT VIDEOS'/>
                <ListDataImage data={DATA2} title='LAST WEEK'/>
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
            <TouchableOpacity style={{width: (screenWidth / 3), paddingHorizontal: 10, paddingVertical: 5}}>
                <ImageBackground source={{uri: storageImageUrl('gallery', data.image)}}
                                 style={{height: 110, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}>
                    <View style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        borderWidth: 1,
                        borderColor: 'white',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image source={require('../../assets/icon/ic_video.png')}
                               style={{height: 20, width: 20, tintColor: 'white', resizeMode: 'contain'}}/>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        );
    }
}

export default GalleryStyle8;