import React, {useContext, useRef} from 'react';
import {Image, TouchableOpacity, View, ImageBackground, Text, FlatList, Dimensions} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import HeaderTwoButton from "../../components/HeaderTwoButton";
import {storageImageUrl} from "../../tools/Helpers";
import TabHeader from "../../components/TabHeader";

const DATA = [
    {id: '1', image: 'gallery_14_img_1.jpg', title: 'Book Shelf'},
    {id: '2', image: 'gallery_14_img_2.jpg', title: 'Bedroom'},
    {id: '3', image: 'gallery_14_img_3.jpg', title: 'Furniture'},
    {id: '4', image: 'gallery_14_img_4.jpg', title: 'Object'},
    {id: '5', image: 'gallery_14_img_5.jpg', title: 'Book Shelf'},
    {id: '6', image: 'gallery_14_img_6.jpg', title: 'Workspace'},
];

const screenWidth = Dimensions.get('window').width;

function GalleryStyle14() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    const onTabChanged = (index) => {

    };

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderTwoButton
                title='Gallery'
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
                shadow={false}
            />
            <TabHeader titles={['PHOTO', 'VIDEO', 'DOCUMENT']} bgColor='#8bc34a' activeIndex={0}
                       onActiveChanged={(i) => onTabChanged(i)}/>
            <FlatList
                contentContainerStyle={{padding: 5}}
                data={DATA}
                numColumns={2}
                renderItem={({item}) => <ItemData data={item}/>}
                keyExtractor={item => item.id}
            />
            <MaterialSnackbar ref={snackbarRef}/>
        </View>
    );
}

function ItemData({data}) {
    return (
        <View style={{width: (screenWidth / 2) - 5, padding: 5}}>
            <ImageBackground source={{uri: storageImageUrl('gallery', data.image)}}
                             style={{
                                 height: 210,
                                 justifyContent: 'flex-end',
                                 padding: 10,
                                 borderRadius: 3,
                                 shadowRadius: 3,
                                 elevation: 3,
                                 shadowOffset: {width: 0, height: 2},
                                 shadowOpacity: 0.3,
                                 overflow: 'hidden'
                             }}>
                <Text style={{fontSize: 16, marginBottom: 8, color: 'white'}}>{data.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                    <Image source={require('../../assets/icon/ic_love_red.png')}
                           style={{width: 10, height: 10, tintColor: 'white', resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>1347</Text>
                    <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                           style={{width: 14, height: 10, tintColor: 'white', marginLeft: 25, resizeMode: 'contain'}}/>
                    <Text style={{fontSize: 12, marginLeft: 5, color: 'white'}}>19546</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

export default GalleryStyle14;