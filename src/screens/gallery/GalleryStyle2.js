import React, {useContext, useRef} from 'react';
import {FlatList, Image, ScrollView, Text, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";

const DATA1 = [
    {id: '1', image: 'gallery_2_img_1.jpg'},
    {id: '2', image: 'gallery_2_img_2.jpg'},
    {id: '3', image: 'gallery_2_img_1.jpg'},
];

const DATA2 = [
    {id: '1', image: 'gallery_2_img_3.jpg'},
    {id: '2', image: 'gallery_2_img_4.jpg'},
    {id: '3', image: 'gallery_2_img_5.jpg'},
];

const DATA3 = [
    {id: '1', image: 'gallery_2_img_6.jpg'},
    {id: '2', image: 'gallery_2_img_6.jpg'},
];

function GalleryStyle2 () {
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
            <Image source={{uri: storageImageUrl('gallery', data.image)}}
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

export default GalleryStyle2;