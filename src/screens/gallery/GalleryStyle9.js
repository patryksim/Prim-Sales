import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, ImageBackground, Text, View} from "react-native";
import {PageContext} from "../../../App";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";
import HeaderThreeButton from "../../components/HeaderThreeButton";

const DATA = [
    {id: '1', image: 'gallery_9_img_1.jpg', title: 'Urban Skyscrapers'},
    {id: '2', image: 'gallery_9_img_2.jpg', title: 'Citywalks'},
    {id: '3', image: 'gallery_9_img_3.jpg', title: 'Nature'},
    {id: '4', image: 'gallery_9_img_4.jpg', title: 'Mountain'},
];

const screenWidth = Dimensions.get('window').width;

function GalleryStyle9() {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Gallery'
                isHome={true}
                navPress={() => pageContext.pageDispatch({page: 'pop'})}
                searchPress={() => snackbarRef.current.ShowSnackBarFunction('search clicked')}
                morePress={() => snackbarRef.current.ShowSnackBarFunction('more clicked')}
                bgColor='#8bc34a'
            />
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
        <View style={{
            width: screenWidth,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 5,
        }}>
            <ImageBackground source={{uri: storageImageUrl('gallery', data.image)}}
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
        </View>
    );
}

export default GalleryStyle9;