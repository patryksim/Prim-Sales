import React, {useContext, useRef} from 'react';
import {Dimensions, FlatList, Image, Text, View} from "react-native";
import {PageContext} from "../../../App";
import HeaderThreeButton from "../../components/HeaderThreeButton";
import MaterialSnackbar from "../../components/MaterialSnackbar";
import {storageImageUrl} from "../../tools/Helpers";

const DATA = [
    {id: '1', image: 'gallery_4_img_1.jpg', datetime: 'An hour ago'},
    {id: '2', image: 'gallery_4_img_2.jpg', datetime: 'An hour ago'},
];

const screenWidth = Dimensions.get('window').width;

function GalleryStyle4 () {
    const pageContext = useContext(PageContext);
    const snackbarRef = useRef(null);

    return (
        <View style={{flex: 1, backgroundColor: '#f1f5f7'}}>
            <HeaderThreeButton
                title='Most Popular'
                isHome={false}
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
        <View style={{width: screenWidth}}>
            <View style={{
                marginHorizontal: 10,
                marginVertical: 5,
                borderRadius: 3,
                shadowRadius: 3,
                elevation: 3,
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.3,
                backgroundColor: 'white'
            }}>
                <Image source={{uri: storageImageUrl('gallery', data.image)}}
                       style={{width: '100%', height: 220, resizeMode: 'cover', backgroundColor: 'gray'}}/>
                <View style={{
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_love_red.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>1347</Text>
                        <Image source={require('../../assets/icon/ic_viewer_blue.png')}
                               style={{width: 14, height: 10, marginLeft: 25, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#616161'}}>19546</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../../assets/icon/ic_history.png')}
                               style={{width: 10, height: 10, resizeMode: 'contain'}}/>
                        <Text style={{fontSize: 12, marginLeft: 5, color: '#bdbdbd'}}>{data.datetime}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default GalleryStyle4;